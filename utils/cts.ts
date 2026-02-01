const API_TOKEN = '4f4515f9-e0dd-4758-b372-a546d8729fbf';
const BASE_URL = 'https://api.cts-strasbourg.eu/v1/siri/2.0';


const toBase64 = (input: string) => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
        str.charAt(i | 0) || (map = '=', i % 1);
        output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

        charCode = str.charCodeAt(i += 3 / 4);

        if (charCode > 0xFF) {
            throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
        }

        block = block << 8 | charCode;
    }

    return output;
};

const getAuthHeader = () => {
    
    const credentials = `${API_TOKEN}:`;

    
    let encoded = '';
    try {
        if (typeof btoa === 'function') {
            encoded = btoa(credentials);
        } else {
            encoded = toBase64(credentials);
        }
    } catch (e) {
        console.warn('[CTSService] btoa failed, falling back to polyfill', e);
        encoded = toBase64(credentials);
    }

    return `Basic ${encoded}`;
};

export interface StopPoint {
    StopPointName: string;
    StopCode: string;
    StopPointRef: string;
    Location: {
        Longitude: number;
        Latitude: number;
    };
    Lines?: string[];
}

export interface VehicleJourney {
    LineRef: string;
    DirectionRef: string;
    DatedVehicleJourneyRef: string;
    PublishedLineName: string;
    DestinationName: string;
    MonitoredCall: {
        StopPointRef: string;
        ExpectedArrivalTime: string;
        DestinationDisplay: string;
    };
}

export interface ParsedStop {
    StopPointRef: string;
    StopPointName: string;
    Longitude: number;
    Latitude: number;
    lines: string[];
}

export interface ParsedLine {
    LineRef: string;
    LineName: string;
    RouteColor: string;
}




const extractTag = (content: string, tagName: string) => {
    
    const regex = new RegExp(`<[\\w:]*${tagName}[^>]*>([\\s\\S]*?)<\/[\\w:]*${tagName}>`);
    const match = content.match(regex);
    return match ? match[1].trim() : null;
};


const getVal = (obj: any, key: string) => {
    if (!obj) return null;
    if (obj[key] !== undefined) return obj[key];

    const lowerKey = key.toLowerCase();
    const foundKey = Object.keys(obj).find(k => k.toLowerCase() === lowerKey);
    return foundKey ? obj[foundKey] : null;
};

const parseXMLStops = (xmlString: string) => {
    const stops: ParsedStop[] = [];

    
    
    const rawItems = xmlString.split(/<[\w:]*AnnotatedStopPointStructure/);

    console.log(`[CTSService] Split XML into ${rawItems.length} chunks (Stops)`);

    
    for (let i = 1; i < rawItems.length; i++) {
        const content = rawItems[i];

        
        

        const ref = extractTag(content, 'StopPointRef');
        const name = extractTag(content, 'StopName');
        const lon = extractTag(content, 'Longitude');
        const lat = extractTag(content, 'Latitude');

        
        const lines: string[] = [];
        const lineRegex = /<[\w:]*LineRef[^>]*>(?:STRASBOURG:Line:)?(.*?)<\/[\w:]*LineRef>/g;
        let lineMatch;
        while ((lineMatch = lineRegex.exec(content)) !== null) {
            lines.push(lineMatch[1].trim());
        }

        if (ref && lon && lat) {
            stops.push({
                StopPointRef: ref,
                StopPointName: name || 'Unknown',
                Longitude: parseFloat(lon),
                Latitude: parseFloat(lat),
                lines: lines
            });
        }
    }
    return stops;
};

const parseXMLLines = (xmlString: string) => {
    const lines: ParsedLine[] = [];

    
    const rawItems = xmlString.split(/<[\w:]*AnnotatedLineStructure/);

    console.log(`[CTSService] Split XML into ${rawItems.length} chunks (Lines)`);

    for (let i = 1; i < rawItems.length; i++) {
        const content = rawItems[i];

        let ref = extractTag(content, 'LineRef');
        if (ref) ref = ref.replace('STRASBOURG:Line:', '');

        const name = extractTag(content, 'LineName');
        const color = extractTag(content, 'RouteColor');

        if (ref) {
            lines.push({
                LineRef: ref,
                LineName: name || ref,
                RouteColor: color ? `#${color}` : '#666666'
            });
        }
    }
    return lines;
};

class CTSService {
    private async request(endpoint: string, params: Record<string, string> = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = `${BASE_URL}/${endpoint}${queryString ? `?${queryString}` : ''}`;

        console.log(`[CTSService] Requesting ${url}`);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': getAuthHeader(),
                    'Accept': 'application/json', 
                },
            });

            if (!response.ok) {
                const text = await response.text();
                console.error(`[CTSService] Error ${response.status}: ${text}`);
                throw new Error(`CTS API Error: ${response.status} ${response.statusText}`);
            }

            
            
            
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('xml')) {
                console.warn("[CTSService] Unexpected XML content for JSON request");
                
            }

            return await response.json();
        } catch (error) {
            console.error('[CTSService] Request Failed:', error);
            throw error;
        }
    }

    
    
    
    async getStopPointsDiscovery(): Promise<ParsedStop[]> {
        const url = `${BASE_URL}/stoppoints-discovery`;
        console.log(`[CTSService] Requesting XML from ${url}`);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': getAuthHeader(),
                    'Accept': 'application/xml', 
                },
            });

            const text = await response.text();

            
            console.log("Raw API Response Start:", text.slice(0, 500));

            if (!response.ok) {
                console.error(`[CTSService] Error ${response.status}`);
                throw new Error(`CTS API Error: ${response.status}`);
            }

            const stops = parseXMLStops(text);
            console.log(`[CTSService] Parsed ${stops.length} stops from XML`);
            return stops;

        } catch (error) {
            console.error('[CTSService] StopPoints Request Failed:', error);
            return [];
        }
    }

    async getStopMonitoring(stopPointRef: string): Promise<VehicleJourney[]> {
        
        const data = await this.request('stop-monitoring', { MonitoringRef: stopPointRef });

        
        
        const delivery = getVal(getVal(data, 'ServiceDelivery'), 'StopMonitoringDelivery')?.[0];
        const visits = getVal(delivery, 'MonitoredStopVisit') || [];

        console.log(`[CTSService] StopMonitoring: Found ${visits.length} visits`);

        return visits.map((visit: any) => {
            const mvj = getVal(visit, 'MonitoredVehicleJourney');
            if (!mvj) return null;
            const call = getVal(mvj, 'MonitoredCall');

            return {
                LineRef: getVal(mvj, 'LineRef'),
                DirectionRef: getVal(mvj, 'DirectionRef'),
                DatedVehicleJourneyRef: getVal(mvj, 'DatedVehicleJourneyRef'),
                PublishedLineName: getVal(mvj, 'PublishedLineName'),
                DestinationName: getVal(mvj, 'DestinationName') || getVal(call, 'DestinationDisplay'),
                MonitoredCall: {
                    StopPointRef: getVal(call, 'StopPointRef'),
                    ExpectedArrivalTime: getVal(call, 'ExpectedDepartureTime') ||
                        getVal(call, 'ExpectedArrivalTime') ||
                        getVal(call, 'AimedDepartureTime') ||
                        getVal(call, 'AimedArrivalTime'),
                    DestinationDisplay: getVal(call, 'DestinationDisplay')
                }
            };
        }).filter((v: any) => v !== null);
    }

    async getLinesDiscovery(): Promise<ParsedLine[]> {
        const url = `${BASE_URL}/lines-discovery`;
        console.log(`[CTSService] Requesting XML from ${url}`);

        try {
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Authorization': getAuthHeader(),
                    'Accept': 'application/xml',
                },
            });

            const text = await response.text();
            
            console.log("Raw API Response Start (Lines):", text.slice(0, 500));

            if (!response.ok) {
                console.error(`[CTSService] Error ${response.status}`);
                throw new Error(`CTS API Error: ${response.status}`);
            }

            const lines = parseXMLLines(text);
            console.log(`[CTSService] Parsed ${lines.length} lines from XML`);
            return lines;

        } catch (error) {
            console.error('[CTSService] Lines Request Failed:', error);
            return [];
        }
    }

    async getParkAndRide() {
        return await this.request('park-and-ride');
    }
    async getVehiclePositions() {
        
        const url = `${BASE_URL}/vehicle-monitoring`;
        console.log(`[CTSService] Fetching Live GPS from ${url}`);

        try {
            const response = await fetch(url, {
                headers: {
                    'Authorization': getAuthHeader(),
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) throw new Error(`HTTP Error ${response.status}`);
            const data = await response.json();

            
            const delivery = data.ServiceDelivery?.VehicleMonitoringDelivery?.[0];
            const activities = delivery?.VehicleActivity || [];

            console.log(`[CTSService] Raw GPS Data: Found ${activities.length} total vehicles`);

            const vehicles = activities.map((activity: any) => {
                const journey = activity.MonitoredVehicleJourney;
                if (!journey) return null;

                const line = journey.PublishedLineName;
                const lat = journey.VehicleLocation?.Latitude;
                const lon = journey.VehicleLocation?.Longitude;

                
                if (!['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'].includes(line)) return null;

                
                if (!lat || !lon) return null;

                return {
                    line: line,
                    direction: journey.DirectionName || journey.DestinationName || '',
                    longitude: parseFloat(lon),
                    latitude: parseFloat(lat),
                    bearing: parseFloat(journey.Bearing || '0')
                };
            }).filter((v: any) => v !== null);

            console.log(`[CTSService] Returning ${vehicles.length} active Trams with GPS`);
            return vehicles;

        } catch (e) {
            console.error('[CTSService] GPS fetch failed:', e);
            return [];
        }
    }
}

export const ctsService = new CTSService();