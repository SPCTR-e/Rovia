
const fetch = require('node-fetch'); 




const BASE_URL = 'https://data.strasbourg.eu/api/explore/v2.1/catalog/datasets';

async function searchDatasets(query) {
    try {
        const url = `${BASE_URL}?q=${encodeURIComponent(query)}&limit=10`;
        console.log(`Searching: ${url}`);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);

        const data = await response.json();
        console.log(`Found ${data.total_count} datasets.`);

        data.results.forEach(ds => {
            console.log(`\nID: ${ds.dataset_id}`);
            console.log(`Title: ${ds.metas.default.title}`);
            console.log(`Description: ${ds.metas.default.description}`);
            
            
        });
    } catch (e) {
        console.error('Error:', e);
    }
}

searchDatasets('CTS ligne');
