export type Sight = {
    id: string;
    name: string;
    shortDescription: string;
    description?: string;
    image: any; 
    category: 'sights' | 'nature' | 'modern' | 'mustSee' | 'museums' | 'restaurants' | 'activities' | 'sights';
    location: string;
    coordinates?: {
        latitude: number;
        longitude: number;
    };
    reservationUrl?: string;
    phoneNumber?: string;
    tags?: string[];
    translations?: {
        [key: string]: {
            name: string;
            shortDescription: string;
            description?: string;
            location?: string;
        } | undefined;
    };
};

export const SIGHTS: Sight[] = [
    
    {
        id: 'cathedral',
        name: 'Cathédrale Notre-Dame',
        shortDescription: 'The stunning masterpiece of Gothic art.',
        description: 'Strasbourg Cathedral is widely considered a masterpiece of Gothic architecture, famous for its intricate pink sandstone facade and astronomical clock. Its 142-meter spire was the world\'s tallest building for over two centuries, dominating the Alsatian plain. Visitors can climb to the platform for a breathtaking view of the city and the Vosges mountains.',
        image: require('@/assets/images/sights/cathedral.jpg'),
        category: 'sights',
        
        location: 'Pl. de la Cathédrale',
        coordinates: { latitude: 48.58180755516249, longitude: 7.750911815075193 },
        translations: {
            tr: {
                name: 'Strazburg Notre-Dame Katedrali',
                shortDescription: 'Gotik sanatın büyüleyici şaheseri.',
                description: 'Strazburg Katedrali, karmaşık pembe kumtaşı cephesi ve astronomik saatiyle ünlü, Gotik mimarinin bir şaheseri olarak kabul edilir. 142 metrelik kulesi, iki yüzyılı aşkın bir süre boyunca dünyanın en yüksek yapısıydı ve Alsas ovasına hakimdir. Ziyaretçiler, şehrin ve Vosges dağlarının nefes kesen manzarası için platforma çıkabilirler.',
                location: 'Katedral Meydanı (Place de la Cathédrale)'
            },
            fr: {
                name: 'Cathédrale Notre-Dame',
                shortDescription: 'Le chef-d\'œuvre absolu de l\'art gothique.',
                description: "Chef-d'œuvre absolu de l'art gothique, la cathédrale de Strasbourg fascine par sa façade en grès rose et sa célèbre horloge astronomique. Avec sa flèche culminant à 142 mètres, elle est restée l'édifice le plus haut de la chrétienté jusqu'au XIXe siècle. La montée vers la plateforme offre un panorama exceptionnel sur la ville et les Vosges.",
                location: 'Pl. de la Cathédrale'
            },
            de: {
                name: 'Liebfrauenmünster zu Straßburg',
                shortDescription: 'Das atemberaubende Meisterwerk der Gotik.',
                description: 'Das Straßburger Münster gilt weithin als Meisterwerk der gotischen Architektur, berühmt für seine filigrane Fassade aus rosa Sandstein und die astronomische Uhr. Sein 142 Meter hoher Turm war über zwei Jahrhunderte lang das höchste Gebäude der Welt und dominiert die elsässische Ebene. Besucher können zur Plattform hinaufsteigen, um einen atemberaubenden Blick auf die Stadt und die Vogesen zu genießen.',
                location: 'Münsterplatz'
            },
            es: {
                name: 'Catedral de Notre-Dame',
                shortDescription: 'La impresionante obra maestra del arte gótico.',
                description: 'La Catedral de Estrasburgo es ampliamente considerada una obra maestra de la arquitectura gótica, famosa por su intrincada fachada de arenisca rosa y su reloj astronómico. Su aguja de 142 metros fue el edificio más alto del mundo durante más de dos siglos, dominando la llanura alsaciana. Los visitantes pueden subir a la plataforma para disfrutar de una vista impresionante de la ciudad y los montes Vosgos.',
                location: 'Pl. de la Cathédrale'
            },
            it: {
                name: 'Cattedrale di Nostra Signora',
                shortDescription: 'Il meraviglioso capolavoro dell\'arte gotica.',
                description: 'La Cattedrale di Strasburgo è ampiamente considerata un capolavoro dell\'architettura gotica, famosa per la sua intricata facciata in arenaria rosa e l\'orologio astronomico. La sua guglia di 142 metri è stata l\'edificio più alto del mondo per oltre due secoli, dominando la pianura alsaziana. I visitatori possono salire sulla piattaforma per una vista mozzafiato sulla città e sui monti Vosgi.',
                location: 'Pl. de la Cathédrale'
            },
            ru: {
                name: 'Страсбургский собор',
                shortDescription: 'Потрясающий шедевр готического искусства.',
                description: 'Страсбургский собор широко признан шедевром готической архитектуры, известным своим сложным фасадом из розового песчаника и астрономическими часами. Его 142-метровый шпиль был самым высоким зданием в мире на протяжении более двух столетий, доминируя над эльзасской равниной. Посетители могут подняться на платформу, чтобы насладиться захватывающим видом на город и Вогезы.',
                location: 'Pl. de la Cathédrale'
            },
            pt: {
                name: 'Catedral de Estrasburgo',
                shortDescription: 'A obra-prima deslumbrante da arte gótica.',
                description: 'A Catedral de Estrasburgo é amplamente considerada uma obra-prima da arquitetura gótica, famosa pela sua intrincada fachada de arenito rosa e pelo relógio astronômico. Sua torre de 142 metros foi o edifício mais alto do mundo por mais de dois séculos, dominando a planície da Alsácia. Os visitantes podem subir à plataforma para desfrutar de uma vista deslumbrante da cidade e das montanhas Vosges.',
                location: 'Pl. de la Cathédrale'
            },
        }
    },
    {
        id: 'petite-france',
        name: 'La Petite France',
        shortDescription: 'The most picturesque district of old Strasbourg.',
        description: 'This picturesque historic quarter was once home to the city\'s tanners, millers, and fishermen. The neighborhood is defined by its charming half-timbered houses dating from the 16th and 17th centuries, leaning over the canals. It is a pedestrian-friendly area best explored on foot, offering intimate views of the Ill River and its locks.',
        image: require('@/assets/images/sights/petite-france.jpg'),
        category: 'sights',
        
        location: '1 Rue du Pont Saint-Martin',
        coordinates: { latitude: 48.58009767451487, longitude: 7.743200116368558 },
        translations: {
            tr: {
                name: 'La Petite France (Küçük Fransa)',
                shortDescription: 'Eski Strazburg\'un en pitoresk bölgesi.',
                description: 'Bu pitoresk tarihi semt, bir zamanlar şehrin tabakçılarına, değirmencilerine ve balıkçılarına ev sahipliği yapıyordu. Mahalle, 16. ve 17. yüzyıllardan kalma, kanallara sarkan büyüleyici yarı ahşap evleri ile tanımlanır. Yayalara uygun bu bölge en iyi yürüyerek keşfedilir ve Ill Nehri ile kilitlerinin samimi manzaralarını sunar.',
                location: '1 Rue du Pont Saint-Martin, Strazburg'
            },
            fr: {
                name: 'La Petite France',
                shortDescription: 'Le quartier le plus pittoresque du vieux Strasbourg.',
                description: "Ce quartier historique pittoresque était autrefois le lieu de vie des tanneurs, meuniers et pêcheurs de la ville. Il se caractérise par ses magnifiques maisons à colombages des XVIe et XVIIe siècles qui se reflètent dans les canaux. C'est un espace privilégié pour la promenade à pied, offrant des vues charmantes sur l'Ill et ses écluses.",
                location: '1 Rue du Pont Saint-Martin'
            },
            de: {
                name: 'La Petite France',
                shortDescription: 'Das malerischste Viertel des alten Straßburg.',
                description: 'Dieses malerische historische Viertel war einst die Heimat der Gerber, Müller und Fischer der Stadt. Das Viertel ist geprägt von charmanten Fachwerkhäusern aus dem 16. und 17. Jahrhundert, die sich über die Kanäle neigen. Es ist eine fußgängerfreundliche Gegend, die man am besten zu Fuß erkundet, und bietet intime Einblicke in die Ill und ihre Schleusen.',
                location: '1 Rue du Pont Saint-Martin'
            },
            es: {
                name: 'La Petite France',
                shortDescription: 'El barrio más pintoresco del viejo Estrasburgo.',
                description: 'Este pintoresco barrio histórico fue el hogar de los curtidores, molineros y pescadores de la ciudad. El vecindario se define por sus encantadoras casas con entramado de madera que datan de los siglos XVI y XVII, inclinadas sobre los canales. Es una zona peatonal ideal para explorar a pie, que ofrece vistas íntimas del río Ill y sus esclusas.',
                location: '1 Rue du Pont Saint-Martin'
            },
            it: {
                name: 'La Petite France',
                shortDescription: 'Il quartiere più pittoresco della vecchia Strasburgo.',
                description: 'Questo pittoresco quartiere storico era un tempo la casa di conciatori, mugnai e pescatori della città. Il quartiere è definito dalle sue affascinanti case a graticcio risalenti al XVI e XVII secolo, che si affacciano sui canali. È un\'area pedonale ideale da esplorare a piedi, offrendo viste intime sul fiume Ill e le sue chiuse.',
                location: '1 Rue du Pont Saint-Martin'
            },
            ru: {
                name: 'Маленькая Франция',
                shortDescription: 'Самый живописный район старого Страсбурга.',
                description: 'Этот живописный исторический квартал когда-то был домом для городских кожевников, мельников и рыбаков. Район характеризуется очаровательными фахверковыми домами XVI и XVII веков, нависающими над каналами. Это пешеходная зона, которую лучше всего исследовать пешком, наслаждаясь уютными видами на реку Иль и ее шлюзы.',
                location: '1 Rue du Pont Saint-Martin'
            },
            pt: {
                name: 'Petite France',
                shortDescription: 'O bairro mais pitoresco da antiga Estrasburgo.',
                description: 'Este pitoresco bairro histórico foi outrora o lar dos curtidores, moleiros e pescadores da cidade. O bairro é definido pelas suas encantadoras casas em enxaimel datadas dos séculos XVI e XVII, inclinadas sobre os canais. É uma área ideal para pedestres e melhor explorada a pé, oferecendo vistas íntimas do rio Ill e das suas eclusas.',
                location: 'Bairro Histórico'
            }
        }
    },
    {
        id: 'rohan-palace',
        name: 'Palais Rohan',
        shortDescription: 'Former residence of the prince-bishops.',
        description: 'Built in the 18th century for the Prince-Bishops of Strasbourg, this palace is a splendid example of French Baroque architecture. Modeled after Parisian mansions, it features opulent royal apartments and a magnificent riverfront terrace. Today, it houses three major museums: the Museum of Fine Arts, the Archaeological Museum, and the Museum of Decorative Arts.',
        image: require('@/assets/images/sights/palais-rohan.jpg'),
        category: 'sights',
        
        location: '2 Pl. du Château',
        coordinates: { latitude: 48.581059628550705, longitude: 7.752234701598285 },
        translations: {
            tr: {
                name: 'Rohan Sarayı (Palais Rohan)',
                shortDescription: 'Prens-piskoposların eski ikametgahı.',
                description: '18. yüzyılda Strazburg\'un Prens Piskoposları için inşa edilen bu saray, Fransız Barok mimarisinin muhteşem bir örneğidir. Paris konaklarından model alınan sarayda, gösterişli kraliyet daireleri ve muhteşem bir nehir kıyısı terası bulunmaktadır. Bugün, Güzel Sanatlar Müzesi, Arkeoloji Müzesi ve Dekoratif Sanatlar Müzesi olmak üzere üç büyük müzeye ev sahipliği yapmaktadır.',
                location: '2 Place du Château, Strazburg'
            },
            fr: {
                name: 'Palais Rohan',
                shortDescription: 'Ancienne résidence des princes-évêques.',
                description: "Construit au XVIIIe siècle pour les princes-évêques, ce palais est un magnifique exemple de l'architecture baroque française. Inspiré des grands hôtels parisiens, il dévoile de somptueux appartements royaux et une superbe terrasse au bord de l'eau. Il abrite aujourd'hui trois musées majeurs : le Musée des Beaux-Arts, le Musée Archéologique et le Musée des Arts Décoratifs.",
                location: '2 Pl. du Château'
            },
            de: {
                name: 'Rohan-Schloss',
                shortDescription: 'Ehemalige Residenz der Fürstbischöfe.',
                description: 'Dieser im 18. Jahrhundert für die Fürstbischöfe von Straßburg erbaute Palast ist ein herrliches Beispiel französischer Barockarchitektur. Nach dem Vorbild Pariser Stadtpaläste bietet er opulente königliche Gemächer und eine prächtige Terrasse am Flussufer. Heute beherbergt er drei bedeutende Museen: das Museum für Bildende Kunst, das Archäologische Museum und das Kunstgewerbemuseum.',
                location: '2 Pl. du Château'
            },
            es: {
                name: 'Palacio Rohan',
                shortDescription: 'Antigua residencia de los príncipes-obispos.',
                description: 'Construido en el siglo XVIII para los príncipes obispos de Estrasburgo, este palacio es un espléndido ejemplo de la arquitectura barroca francesa. Inspirado en las mansiones parisinas, cuenta con opulentos apartamentos reales y una magnífica terraza frente al río. Hoy en día, alberga tres museos importantes: el Museo de Bellas Artes, el Museo Arqueológico y el Museo de Artes Decorativas.',
                location: '2 Pl. du Château'
            },
            it: {
                name: 'Palazzo Rohan',
                shortDescription: 'Antica residenza dei principi-vescovi.',
                description: 'Costruito nel XVIII secolo per i Principi Vescovi di Strasburgo, questo palazzo è uno splendido esempio di architettura barocca francese. Ispirato ai palazzi parigini, presenta opulenti appartamenti reali e una magnifica terrazza sul fiume. Oggi ospita tre importanti musei: il Museo delle Belle Arti, il Museo Archeologico e il Museo delle Arti Decorative.',
                location: '2 Pl. du Château'
            },
            ru: {
                name: 'Дворец Рогана',
                shortDescription: 'Бывшая резиденция князей-епископов.',
                description: 'Построенный в XVIII веке для князей-епископов Страсбурга, этот дворец является великолепным примером французской архитектуры барокко. Смоделированный по образцу парижских особняков, он располагает роскошными королевскими апартаментами и великолепной террасой на берегу реки. Сегодня в нем размещаются три крупных музея: Музей изящных искусств, Археологический музей и Музей декоративного искусства.',
                location: '2 Place du Château'
            },
            pt: {
                name: 'Palácio Rohan',
                shortDescription: 'Antiga residência dos príncipes-bispos.',
                description: 'Construído no século XVIII para os Príncipes-Bispos de Estrasburgo, este palácio é um esplêndido exemplo da arquitetura barroca francesa. Inspirado nas mansões parisienses, apresenta opulentos apartamentos reais e um magnífico terraço à beira do rio. Hoje, abriga três grandes museus: o Museu de Belas Artes, o Museu Arqueológico e o Museu de Artes Decorativas.',
                location: '2 Place du Château'
            }
        }
    },
    {
        id: 'barrage-vauban',
        name: 'Barrage Vauban',
        shortDescription: '17th-century bridge and weir.',
        description: 'Constructed in the late 17th century by the military engineer Vauban, this covered bridge and weir was designed to flood the city\'s southern approaches in case of attack. The structure spans the River Ill and features a rooftop terrace open to the public. From the top, visitors can enjoy one of the best panoramic views of the Petite France district and the cathedral\'s spire.',
        image: require('@/assets/images/sights/barrage-vauban.jpg'),
        category: 'sights',
        
        location: 'Pl. du Quartier Blanc',
        coordinates: { latitude: 48.579601192743404, longitude: 7.738016252519863 },
        translations: {
            tr: {
                name: 'Vauban Barajı (Barrage Vauban)',
                shortDescription: '17. yüzyıldan kalma köprü ve baraj.',
                description: 'Askeri mühendis Vauban tarafından 17. yüzyılın sonlarında inşa edilen bu kapalı köprü ve bent, saldırı durumunda şehrin güney yaklaşımlarını sular altında bırakmak için tasarlandı. Yapı Ill Nehri\'ni kapsar ve halka açık bir çatı terasına sahiptir. Ziyaretçiler tepeden, Petite France bölgesinin ve katedralin kulesinin en iyi panoramik manzaralarından birinin keyfini çıkarabilirler.',
                location: 'Place du Quartier Blanc, Strazburg'
            },
            fr: {
                name: 'Barrage Vauban',
                shortDescription: 'Pont-écluse du 17ème siècle.',
                description: "Construit à la fin du XVIIe siècle par Vauban, ce pont-écluse couvert avait pour but d'inonder le sud de la ville en cas d'attaque. Enjambant l'Ill, l'ouvrage dispose d'une terrasse panoramique accessible au public. Elle offre l'une des plus belles vues sur le quartier de la Petite France et la flèche de la cathédrale.",
                location: 'Pl. du Quartier Blanc'
            },
            de: {
                name: 'Barrage Vauban',
                shortDescription: 'Brücke und Wehr aus dem 17. Jahrhundert.',
                description: 'Diese gedeckte Brücke und das Wehr wurden im späten 17. Jahrhundert vom Militäringenieur Vauban erbaut und sollten im Angriffsfall die südlichen Zugänge der Stadt überfluten. Das Bauwerk überspannt die Ill und verfügt über eine öffentlich zugängliche Dachterrasse. Von oben genießen Besucher einen der besten Panoramablicke auf das Viertel Petite France und die Turmspitze des Münsters.',
                location: 'Pl. du Quartier Blanc'
            },
            es: {
                name: 'Barrage Vauban',
                shortDescription: 'Puente y presa del siglo XVII.',
                description: 'Construido a finales del siglo XVII por el ingeniero militar Vauban, este puente cubierto y presa fue diseñado para inundar los accesos sur de la ciudad en caso de ataque. La estructura atraviesa el río Ill y cuenta con una terraza en la azotea abierta al público. Desde la cima, los visitantes pueden disfrutar de una de las mejores vistas panorámicas del barrio de la Petite France y la aguja de la catedral.',
                location: 'Pl. du Quartier Blanc'
            },
            it: {
                name: 'Diga di Vauban',
                shortDescription: 'Ponte e sbarramento del XVII secolo.',
                description: 'Costruito alla fine del XVII secolo dall\'ingegnere militare Vauban, questo ponte coperto e diga è stato progettato per inondare gli accessi meridionali della città in caso di attacco. La struttura attraversa il fiume Ill e presenta una terrazza sul tetto aperta al pubblico. Dall\'alto, i visitatori possono godere di una delle migliori viste panoramiche sul quartiere Petite France e sulla guglia della cattedrale.',
                location: 'Pl. du Quartier Blanc'
            },
            ru: {
                name: 'Дамба Вобана',
                shortDescription: 'Мост и плотина XVII века.',
                description: 'Построенный в конце XVII века военным инженером Вобаном, этот крытый мост и плотина были спроектированы для затопления южных подступов к городу в случае нападения. Сооружение переброшено через реку Иль и имеет террасу на крыше, открытую для публики. С вершины посетители могут насладиться одним из лучших панорамных видов на квартал Маленькая Франция и шпиль собора.',
                location: 'Place du Quartier Blanc'
            },
            pt: {
                name: 'Barragem Vauban',
                shortDescription: 'Ponte e represa do século XVII.',
                description: 'Construída no final do século XVII pelo engenheiro militar Vauban, esta ponte coberta e represa foi projetada para inundar os acessos sul da cidade em caso de ataque. A estrutura atravessa o rio Ill e possui um terraço na cobertura aberto ao público. Do topo, os visitantes podem desfrutar de uma das melhores vistas panorâmicas do bairro Petite France e da torre da catedral.',
                location: 'Place du Quartier Blanc'
            }
        }
    },
    
    {
        id: 'eu-parliament',
        name: 'European Parliament',
        shortDescription: 'The legislative heart of Europe.',
        description: 'The Louise Weiss building is the impressive seat of the European Parliament, featuring a vast hemicycle for plenary sessions. Its distinctive glass and metal architecture symbolizes transparency and the unfinished nature of the European project. Visitors can tour the building to witness the heart of European democracy and admire its contemporary design.',
        image: require('@/assets/images/sights/eu-parliament.jpg'),
        category: 'sights',
        
        location: '1 Av. du Président Robert Schuman',
        coordinates: { latitude: 48.597484505938425, longitude: 7.768460744781987 },
        translations: {
            tr: {
                name: 'Avrupa Parlamentosu',
                shortDescription: 'Avrupa\'nın yasama kalbi.',
                description: 'Louise Weiss binası, genel kurul oturumları için geniş bir yarım daireye sahip olan Avrupa Parlamentosu\'nun etkileyici merkezidir. Kendine özgü cam ve metal mimarisi, şeffaflığı ve Avrupa projesinin tamamlanmamış doğasını simgeler. Ziyaretçiler, Avrupa demokrasisinin kalbine tanıklık etmek ve çağdaş tasarımına hayran kalmak için binayı gezebilirler.',
                location: '1 Av. du Président Robert Schuman, Strazburg'
            },
            fr: {
                name: 'Parlement Européen',
                shortDescription: 'Le cœur législatif de l\'Europe.',
                description: "Le bâtiment Louise Weiss est le siège impressionnant du Parlement européen, abritant le grand hémicycle des sessions plénières. Son architecture audacieuse de verre et de métal symbolise la transparence et la construction permanente de l'Europe. Les visiteurs peuvent y découvrir le cœur de la démocratie européenne et admirer son design contemporain.",
                location: '1 Av. du Président Robert Schuman'
            },
            de: {
                name: 'Europäisches Parlament',
                shortDescription: 'Das legislative Herz Europas.',
                description: 'Das Louise-Weiss-Gebäude ist der beeindruckende Sitz des Europäischen Parlaments und verfügt über einen riesigen Plenarsaal für die Vollversammlungen. Seine markante Glas- und Metallarchitektur symbolisiert Transparenz und den unvollendeten Charakter des europäischen Projekts. Besucher können das Gebäude besichtigen, um das Herz der europäischen Demokratie zu erleben und sein zeitgenössisches Design zu bewundern.',
                location: '1 Av. du Président Robert Schuman'
            },
            es: {
                name: 'Parlamento Europeo',
                shortDescription: 'El corazón legislativo de Europa.',
                description: 'El edificio Louise Weiss es la impresionante sede del Parlamento Europeo, con un vasto hemiciclo para las sesiones plenarias. Su distintiva arquitectura de vidrio y metal simboliza la transparencia y la naturaleza inacabada del proyecto europeo. Los visitantes pueden recorrer el edificio para presenciar el corazón de la democracia europea y admirar su diseño contemporáneo.',
                location: '1 Av. du Président Robert Schuman'
            },
            it: {
                name: 'Parlamento Europeo',
                shortDescription: 'Il cuore legislativo dell\'Europa.',
                description: 'L\'edificio Louise Weiss è l\'imponente sede del Parlamento Europeo, caratterizzato da un vasto emiciclo per le sessioni plenarie. La sua particolare architettura in vetro e metallo simboleggia la trasparenza e la natura incompiuta del progetto europeo. I visitatori possono visitare l\'edificio per testimoniare il cuore della democrazia europea e ammirarne il design contemporaneo.',
                location: '1 Av. du Président Robert Schuman'
            },
            ru: {
                name: 'Европейский парламент',
                shortDescription: 'Законодательное сердце Европы.',
                description: 'Здание Луизы Вайс является впечатляющей резиденцией Европейского парламента с огромным амфитеатром для пленарных заседаний. Его отличительная архитектура из стекла и металла символизирует прозрачность и незавершенность европейского проекта. Посетители могут осмотреть здание, чтобы увидеть сердце европейской демократии и полюбоваться его современным дизайном.',
                location: '1 Av. du Président Robert Schuman'
            },
            pt: {
                name: 'Parlamento Europeu',
                shortDescription: 'O coração legislativo da Europa.',
                description: 'O edifício Louise Weiss é a impressionante sede do Parlamento Europeu, com um vasto hemiciclo para as sessões plenárias. A sua distinta arquitetura de vidro e metal simboliza a transparência e a natureza inacabada do projeto europeu. Os visitantes podem percorrer o edifício para testemunhar o coração da democracia europeia e admirar o seu design contemporâneo.',
                location: '1 Av. du Président Robert Schuman'
            }
        }
    },
    {
        id: 'orangerie',
        name: 'Parc de l\'Orangerie',
        shortDescription: 'Strasbourg\'s oldest and favorite park.',
        description: 'This is Strasbourg\'s oldest and most beloved park, a favorite retreat for locals located right next to the European institutions. It features a boating lake, a small zoo, and a famous sanctuary for storks, the symbol of Alsace. The park also boasts the Pavillon Joséphine, built for Napoleon\'s wife, and extensive walking paths lined with centuries-old trees.',
        image: require('@/assets/images/sights/orangerie.jpg'),
        category: 'sights',
        
        location: 'Parc de l\'Orangerie',
        coordinates: { latitude: 48.59242512751338, longitude: 7.774717627413548 },
        translations: {
            tr: {
                name: 'Orangerie Parkı (Parc de l\'Orangerie)',
                shortDescription: 'Strazburg\'un en eski ve en sevilen parkı.',
                description: 'Burası, Strazburg\'un en eski ve en sevilen parkıdır ve Avrupa kurumlarının hemen yanında yer alan, yerel halkın gözde bir inziva yeridir. İçinde bir kayık gölü, küçük bir hayvanat bahçesi ve Alsas\'ın sembolü olan leylekler için ünlü bir sığınak bulunmaktadır. Park ayrıca Napolyon\'un karısı için inşa edilen Pavillon Joséphine\'e ve asırlık ağaçlarla çevrili geniş yürüyüş yollarına sahiptir.',
                location: 'Parc de l\'Orangerie, Strazburg'
            },
            fr: {
                name: 'Parc de l\'Orangerie',
                shortDescription: 'Le plus ancien et le parc préféré des Strasbourgeois.',
                description: "Plus ancien et plus vaste parc de la ville, l'Orangerie est le lieu de détente privilégié des Strasbourgeois, au pied des institutions européennes. Il abrite un lac, un zoo et un célèbre centre de réintroduction des cigognes, emblème de l'Alsace. On y trouve également le Pavillon Joséphine, érigé pour l'impératrice, et de nombreuses allées ombragées.",
                location: 'Parc de l\'Orangerie'
            },
            de: {
                name: 'Orangerie-Park',
                shortDescription: 'Straßburgs ältester und beliebtester Park.',
                description: 'Dies ist Straßburgs ältester und beliebtester Park, ein bevorzugter Rückzugsort für Einheimische, direkt neben den europäischen Institutionen gelegen. Er verfügt über einen See zum Bootfahren, einen kleinen Zoo und eine berühmte Station für Störche, das Symbol des Elsass. Der Park beherbergt auch den Pavillon Joséphine, der für Napoleons Frau erbaut wurde, sowie weitläufige Spazierwege, die von jahrhundertealten Bäumen gesäumt sind.',
                location: 'Parc de l\'Orangerie'
            },
            es: {
                name: 'Parque de la Orangerie',
                shortDescription: 'El parque más antiguo y favorito de Estrasburgo.',
                description: 'Este es el parque más antiguo y querido de Estrasburgo, un refugio favorito para los lugareños ubicado justo al lado de las instituciones europeas. Cuenta con un lago para botes, un pequeño zoológico y un famoso santuario para cigüeñas, el símbolo de Alsacia. El parque también cuenta con el Pavillon Joséphine, construido para la esposa de Napoleón, y extensos senderos bordeados de árboles centenarios.',
                location: 'Parque de la Orangerie'
            },
            it: {
                name: 'Parco dell\'Orangerie',
                shortDescription: 'Il parco più antico e preferito di Strasburgo.',
                description: 'Questo è il parco più antico e amato di Strasburgo, un rifugio preferito per i locali situato proprio accanto alle istituzioni europee. Dispone di un lago navigabile, un piccolo zoo e un famoso santuario per le cicogne, simbolo dell\'Alsazia. Il parco vanta anche il Pavillon Joséphine, costruito per la moglie di Napoleone, e ampi sentieri fiancheggiati da alberi secolari.',
                location: 'Parco dell\'Orangerie'
            },
            ru: {
                name: 'Парк Оранжери',
                shortDescription: 'Самый старый и любимый парк Страсбурга.',
                description: 'Это самый старый и любимый парк Страсбурга, любимое место отдыха местных жителей, расположенное рядом с европейскими учреждениями. Здесь есть лодочное озеро, небольшой зоопарк и знаменитый приют для аистов — символа Эльзаса. В парке также находится Павильон Жозефины, построенный для жены Наполеона, и обширные пешеходные дорожки, обсаженные вековыми деревьями.',
                location: 'Parc de l\'Orangerie'
            },
            pt: {
                name: 'Parque da Orangerie',
                shortDescription: 'O parque mais antigo e favorito de Estrasburgo.',
                description: 'Este é o parque mais antigo e querido de Estrasburgo, um refúgio favorito para os habitantes locais, localizado ao lado das instituições europeias. Possui um lago para passeios de barco, um pequeno zoológico e um famoso santuário para cegonhas, o símbolo da Alsácia. O parque também ostenta o Pavillon Joséphine, construído para a esposa de Napoleão, e extensos caminhos ladeados por árvores centenárias.',
                location: 'Parc de l\'Orangerie'
            }
        }
    },
    {
        id: 'jardin-deux-rives',
        name: 'Jardin des Deux Rives',
        shortDescription: 'A symbol of friendship between France and Germany.',
        description: 'Spanning both banks of the Rhine, this unique cross-border park symbolizes the friendship between France and Germany. A magnificent pedestrian and cyclist bridge connects the Strasbourg side with the German town of Kehl. It offers expansive green spaces for recreation and hosts cultural events that celebrate the unity of the two nations.',
        image: require('@/assets/images/sights/deux-rives.jpg'),
        category: 'sights',
        
        location: '1 Rue des Cavaliers',
        coordinates: { latitude: 48.568389795860774, longitude: 7.79880482370121 },
        translations: {
            tr: {
                name: 'İki Kıyı Bahçesi (Jardin des Deux Rives)',
                shortDescription: 'Fransa ve Almanya arasındaki dostluğun sembolü.',
                description: 'Ren Nehri\'nin her iki yakasına yayılan bu eşsiz sınır ötesi park, Fransa ve Almanya arasındaki dostluğu simgeler. Muhteşem bir yaya ve bisiklet köprüsü, Strazburg tarafını Alman şehri Kehl ile birleştirir. Rekreasyon için geniş yeşil alanlar sunar ve iki ulusun birliğini kutlayan kültürel etkinliklere ev sahipliği yapar.',
                location: '1 Rue des Cavaliers, Strazburg'
            },
            fr: {
                name: 'Jardin des Deux Rives',
                shortDescription: 'Un symbole d\'amitié entre la France et l\'Allemagne.',
                description: "S'étendant sur les deux rives du Rhin, ce parc transfrontalier unique symbolise l'amitié franco-allemande. Une magnifique passerelle pour piétons et cyclistes relie le côté strasbourgeois à la ville allemande de Kehl. Le parc offre de vastes espaces verts et accueille des événements culturels célébrant l'unité des deux nations.",
                location: '1 Rue des Cavaliers'
            },
            de: {
                name: 'Garten der zwei Ufer',
                shortDescription: 'Ein Symbol der Freundschaft zwischen Frankreich und Deutschland.',
                description: 'Dieser einzigartige grenzüberschreitende Park erstreckt sich über beide Ufer des Rheins und symbolisiert die Freundschaft zwischen Frankreich und Deutschland. Eine prächtige Fußgänger- und Radfahrerbrücke verbindet die Straßburger Seite mit der deutschen Stadt Kehl. Er bietet weitläufige Grünflächen zur Erholung und beherbergt kulturelle Veranstaltungen, die die Einheit der beiden Nationen feiern.',
                location: '1 Rue des Cavaliers'
            },
            es: {
                name: 'Jardín de las Dos Riberas',
                shortDescription: 'Un símbolo de amistad entre Francia y Alemania.',
                description: 'Abarcando ambas orillas del Rin, este parque transfronterizo único simboliza la amistad entre Francia y Alemania. Un magnífico puente peatonal y ciclista conecta el lado de Estrasburgo con la ciudad alemana de Kehl. Ofrece amplios espacios verdes para la recreación y alberga eventos culturales que celebran la unidad de las dos naciones.',
                location: '1 Rue des Cavaliers'
            },
            it: {
                name: 'Giardino delle Due Rive',
                shortDescription: 'Un simbolo di amicizia tra Francia e Germania.',
                description: 'Estendendosi su entrambe le rive del Reno, questo parco transfrontaliero unico simboleggia l\'amicizia tra Francia e Germania. Un magnifico ponte pedonale e ciclabile collega il lato di Strasburgo con la città tedesca di Kehl. Offre ampi spazi verdi per la ricreazione e ospita eventi culturali che celebrano l\'unità delle due nazioni.',
                location: '1 Rue des Cavaliers'
            },
            ru: {
                name: 'Сад двух берегов',
                shortDescription: 'Символ дружбы между Францией и Германией.',
                description: 'Охватывая оба берега Рейна, этот уникальный трансграничный парк символизирует дружбу между Францией и Германией. Великолепный пешеходный и велосипедный мост соединяет сторону Страсбурга с немецким городом Кель. Он предлагает обширные зеленые насаждения для отдыха и проводит культурные мероприятия, прославляющие единство двух наций.',
                location: '1 Rue des Cavaliers'
            },
            pt: {
                name: 'Jardim das Duas Margens',
                shortDescription: 'Um símbolo de amizade entre França e Alemanha.',
                description: 'Abrangendo ambas as margens do Reno, este parque transfronteiriço único simboliza a amizade entre França e Alemanha. Uma magnífica ponte pedonal e ciclável liga o lado de Estrasburgo à cidade alemã de Kehl. Oferece amplos espaços verdes para recreação e acolhe eventos culturais que celebram a unidade das duas nações.',
                location: '1 Rue des Cavaliers'
            }
        }
    },
    {
        id: 'palais-rhin',
        name: 'Palais du Rhin',
        shortDescription: 'Former Imperial Palace.',
        description: 'Situated on the Place de la République, the former "Kaiserpalast" is a monumental example of late 19th-century German imperial architecture. Built for the German Emperor, its massive dome and Renaissance-inspired facade dominate the Neustadt district. While not always open to the public, its imposing exterior and historical significance make it a key landmark of the city\'s dual heritage.',
        image: require('@/assets/images/sights/palais-rhin.jpg'),
        category: 'sights',
        
        location: '2 Pl. de la République',
        coordinates: { latitude: 48.58760234137872, longitude: 7.7527729604229005 },
        translations: {
            tr: {
                name: 'Ren Sarayı (Palais du Rhin)',
                shortDescription: 'Eski İmparatorluk Sarayı.',
                description: 'Place de la République\'de bulunan eski \'Kaiserpalast\', 19. yüzyıl sonu Alman imparatorluk mimarisinin anıtsal bir örneğidir. Alman İmparatoru için inşa edilen devasa kubbesi ve Rönesans esintili cephesi, Neustadt bölgesine hakimdir. Her zaman halka açık olmasa da, heybetli dış cephesi ve tarihi önemi, onu şehrin ikili mirasının önemli bir simgesi haline getirir.',
                location: '2 Place de la République, Strazburg'
            },
            fr: {
                name: 'Palais du Rhin',
                shortDescription: 'Ancien Palais Impérial.',
                description: 'Situé place de la République, l\'ancien "Kaiserpalast" est un exemple monumental de l\'architecture impériale allemande de la fin du XIXe siècle. Construit pour l\'Empereur, son dôme massif et sa façade néo-Renaissance dominent le quartier de la Neustadt. Témoin de la double culture de la ville, cet édifice imposant reste un repère historique majeur.',
                location: '2 Pl. de la République'
            },
            de: {
                name: 'Rheinpalast',
                shortDescription: 'Ehemaliger Kaiserpalast.',
                description: 'Das ehemalige "Kaiserpalast" befindet sich am Place de la République und ist ein monumentales Beispiel deutscher kaiserlicher Architektur des späten 19. Jahrhunderts. Erbaut für den deutschen Kaiser, dominieren seine massive Kuppel und die von der Renaissance inspirierte Fassade das Viertel Neustadt. Obwohl nicht immer für die Öffentlichkeit zugänglich, machen sein imposantes Äußeres und seine historische Bedeutung es zu einem wichtigen Wahrzeichen des doppelten Erbes der Stadt.',
                location: '2 Pl. de la République'
            },
            es: {
                name: 'Palacio del Rin',
                shortDescription: 'Antiguo Palacio Imperial.',
                description: 'Situado en la Place de la République, el antiguo "Kaiserpalast" es un ejemplo monumental de la arquitectura imperial alemana de finales del siglo XIX. Construido para el emperador alemán, su enorme cúpula y su fachada de inspiración renacentista dominan el distrito de Neustadt. Aunque no siempre está abierto al público, su imponente exterior y su importancia histórica lo convierten en un hito clave de la doble herencia de la ciudad.',
                location: '2 Pl. de la République'
            },
            it: {
                name: 'Palazzo del Reno',
                shortDescription: 'Antico Palazzo Imperiale.',
                description: 'Situato in Place de la République, l\'ex "Kaiserpalast" è un esempio monumentale dell\'architettura imperiale tedesca della fine del XIX secolo. Costruito per l\'imperatore tedesco, la sua massiccia cupola e la facciata ispirata al Rinascimento dominano il quartiere Neustadt. Sebbene non sempre aperto al pubblico, il suo imponente esterno e il suo significato storico lo rendono un punto di riferimento fondamentale della doppia eredità della città.',
                location: '2 Pl. de la République'
            },
            ru: {
                name: 'Рейнский дворец',
                shortDescription: 'Бывший Императорский дворец.',
                description: 'Расположенный на площади Республики, бывший «Кайзерпаласт» является монументальным образцом немецкой имперской архитектуры конца XIX века. Построенный для немецкого императора, его массивный купол и фасад в стиле ренессанс доминируют над районом Нойштадт. Хотя он не всегда открыт для публики, его впечатляющий внешний вид и историческое значение делают его ключевой достопримечательностью двойного наследия города.',
                location: '2 Place de la République'
            },
            pt: {
                name: 'Palácio do Reno',
                shortDescription: 'Antigo Palácio Imperial.',
                description: 'Situado na Place de la République, o antigo "Kaiserpalast" é um exemplo monumental da arquitetura imperial alemã do final do século XIX. Construído para o imperador alemão, a sua enorme cúpula e fachada de inspiração renascentista dominam o distrito de Neustadt. Embora nem sempre aberto ao público, o seu exterior imponente e significado histórico tornam-no um marco fundamental da dupla herança da cidade.',
                location: '2 Place de la République'
            }
        }
    },
    {
        id: 'st-paul',
        name: 'Eglise St. Paul',
        shortDescription: 'Neo-Gothic church on the river.',
        description: 'Commanding the southern tip of Sainte-Hélène Island, the Reformed Church of St. Paul is a masterpiece of Neo-Gothic architecture. Its twin spires rise elegantly above the river, creating stunning reflections in the Ill and the Aar. Built during the German annexation for the garrison troops, it remains one of the most photographed and picturesque sites in Strasbourg.',
        image: require('@/assets/images/sights/st-paul.jpg'),
        category: 'sights',
        
        location: '1 Pl. du Général Eisenhower',
        coordinates: { latitude: 48.58618301091684, longitude: 7.7597309527141425 },
        translations: {
            tr: {
                name: 'Aziz Paul Kilisesi (Eglise St. Paul)',
                shortDescription: 'Nehir kenarında Neo-Gotik kilise.',
                description: 'Sainte-Hélène Adası\'nın güney ucuna hakim olan Aziz Paul Reform Kilisesi, Neo-Gotik mimarinin bir şaheseridir. İkiz kuleleri nehrin üzerinde zarif bir şekilde yükselir ve Ill ile Aar nehirlerinde çarpıcı yansımalar yaratır. Alman ilhakı sırasında garnizon birlikleri için inşa edilen kilise, Strazburg\'un en çok fotoğraflanan ve pitoresk yerlerinden biri olmaya devam etmektedir.',
                location: '1 Place du Général Eisenhower, Strazburg'
            },
            fr: {
                name: 'Église St Paul',
                shortDescription: 'Église néo-gothique au bord de l\'eau.',
                description: "Dominant la pointe sud de l'île Sainte-Hélène, l'église réformée Saint-Paul est un chef-d'œuvre de l'architecture néo-gothique. Ses deux flèches s'élèvent élégamment au-dessus de la rivière, créant de superbes reflets dans l'Ill et l'Aar. Construite sous l'annexion allemande pour la garnison, elle demeure l'un des sites les plus pittoresques de Strasbourg.",
                location: '1 Pl. du Général Eisenhower'
            },
            de: {
                name: 'Paulskirche',
                shortDescription: 'Neugotische Kirche am Fluss.',
                description: 'Die reformierte Paulskirche beherrscht die Südspitze der Insel Sainte-Hélène und ist ein Meisterwerk neugotischer Architektur. Ihre Zwillingstürme ragen elegant über den Fluss und erzeugen atemberaubende Spiegelungen in der Ill und der Aar. Erbaut während der deutschen Annexion für die Garnisonstruppen, bleibt sie einer der meistfotografierten und malerischsten Orte in Straßburg.',
                location: '1 Pl. du Général Eisenhower'
            },
            es: {
                name: 'Iglesia de San Pablo',
                shortDescription: 'Iglesia neogótica a la orilla del río.',
                description: 'Dominando el extremo sur de la isla Sainte-Hélène, la Iglesia Reformada de San Pablo es una obra maestra de la arquitectura neogótica. Sus torres gemelas se elevan elegantemente sobre el río, creando impresionantes reflejos en el Ill y el Aar. Construida durante la anexión alemana para las tropas de la guarnición, sigue siendo uno de los sitios más fotografiados y pintorescos de Estrasburgo.',
                location: '1 Pl. du Général Eisenhower'
            },
            it: {
                name: 'Chiesa di San Paolo',
                shortDescription: 'Chiesa neogotica sul fiume.',
                description: 'Dominando la punta meridionale dell\'isola di Sainte-Hélène, la Chiesa Riformata di San Paolo è un capolavoro dell\'architettura neogotica. Le sue guglie gemelle si ergono elegantemente sopra il fiume, creando splendidi riflessi nell\'Ill e nell\'Aar. Costruita durante l\'annessione tedesca per le truppe della guarnigione, rimane uno dei siti più fotografati e pittoreschi di Strasburgo.',
                location: '1 Pl. du Général Eisenhower'
            },
            ru: {
                name: 'Церковь Святого Павла',
                shortDescription: 'Неоготическая церковь на реке.',
                description: 'Возвышаясь на южной оконечности острова Сент-Элен, реформатская церковь Святого Павла является шедевром неоготической архитектуры. Ее башни-близнецы элегантно возвышаются над рекой, создавая потрясающие отражения в Иле и Ааре. Построенная во время немецкой аннексии для гарнизонных войск, она остается одним из самых фотографируемых и живописных мест в Страсбурге.',
                location: '1 Place du Général Eisenhower'
            },
            pt: {
                name: 'Igreja de São Paulo',
                shortDescription: 'Igreja neogótica à beira do rio.',
                description: 'Comandando a ponta sul da Ilha de Sainte-Hélène, a Igreja Reformada de São Paulo é uma obra-prima da arquitetura neogótica. As suas torres gémeas erguem-se elegantemente sobre o rio, criando reflexos deslumbrantes no Ill e no Aar. Construída durante a anexação alemã para as tropas da guarnição, continua a ser um dos locais mais fotografados e pitorescos de Estrasburgo.',
                location: '1 Place du Général Eisenhower'
            }
        }
    },
    {
        id: 'university',
        name: 'Université de Strasbourg',
        shortDescription: 'The historic Palais Universitaire.',
        description: 'The Palais Universitaire is a grand edifice designed in the Italian Renaissance style and completed in 1884. It served as the center of the new imperial university, reflecting the heavy investment in education during the German period. The building features a majestic aula and stands as the focal point of the expansive university campus in the Neustadt.',
        image: require('@/assets/images/sights/university.jpg'),
        category: 'sights',
        
        location: '9 Pl. de l\'Université',
        coordinates: { latitude: 48.58481135926765, longitude: 7.762476855622575 },
        translations: {
            tr: {
                name: 'Strazburg Üniversitesi (Palais Universitaire)',
                shortDescription: 'Tarihi Üniversite Sarayı.',
                description: 'Palais Universitaire, İtalyan Rönesans tarzında tasarlanan ve 1884\'te tamamlanan görkemli bir yapıdır. Alman döneminde eğitime yapılan büyük yatırımı yansıtan yeni imparatorluk üniversitesinin merkezi olarak hizmet vermiştir. Görkemli bir aulaya (büyük salon) sahip olan bina, Neustadt\'taki geniş üniversite kampüsünün odak noktasıdır.',
                location: '9 Place de l\'Université, Strazburg'
            },
            fr: {
                name: 'Palais Universitaire',
                shortDescription: 'Le Palais Universitaire historique.',
                description: "Le Palais Universitaire est un édifice grandiose de style néo-Renaissance italien, achevé en 1884. Centre de la nouvelle université impériale, il témoigne de l'importance accordée à l'enseignement durant la période allemande. Doté d'une aula majestueuse, il constitue le point central du vaste campus universitaire de la Neustadt.",
                location: '9 Pl. de l\'Université'
            },
            de: {
                name: 'Universitätspalast',
                shortDescription: 'Der historische Universitätspalast.',
                description: 'Der Universitätspalast ist ein grandioses Gebäude im Stil der italienischen Renaissance, das 1884 fertiggestellt wurde. Er diente als Zentrum der neuen kaiserlichen Universität und spiegelt die hohen Investitionen in die Bildung während der deutschen Zeit wider. Das Gebäude verfügt über eine majestätische Aula und ist der Mittelpunkt des weitläufigen Universitätscampus in der Neustadt.',
                location: '9 Pl. de l\'Université'
            },
            es: {
                name: 'Palacio Universitario',
                shortDescription: 'El histórico Palacio Universitario.',
                description: 'El Palacio Universitario es un grandioso edificio diseñado en estilo renacentista italiano y terminado en 1884. Sirvió como centro de la nueva universidad imperial, reflejando la fuerte inversión en educación durante el período alemán. El edificio cuenta con una majestuosa aula y se erige como el punto focal del extenso campus universitario en Neustadt.',
                location: '9 Pl. de l\'Université'
            },
            it: {
                name: 'Palazzo Universitario',
                shortDescription: 'Lo storico Palazzo Universitario.',
                description: 'Il Palazzo Universitario è un grandioso edificio progettato in stile rinascimentale italiano e completato nel 1884. Fungeva da centro della nuova università imperiale, riflettendo i forti investimenti nell\'istruzione durante il periodo tedesco. L\'edificio presenta una maestosa aula e si erge come punto focale del vasto campus universitario nella Neustadt.',
                location: '9 Pl. de l\'Université'
            },
            ru: {
                name: 'Университетский дворец',
                shortDescription: 'Исторический университетский дворец.',
                description: 'Университетский дворец — это грандиозное здание, спроектированное в стиле итальянского Возрождения и завершенное в 1884 году. Оно служило центром нового имперского университета, отражая крупные инвестиции в образование в немецкий период. В здании есть величественная аула, и оно является центральным элементом обширного университетского кампуса в Нойштадте.',
                location: '9 Place de l\'Université'
            },
            pt: {
                name: 'Palácio Universitário',
                shortDescription: 'O histórico Palácio Universitário.',
                description: 'O Palácio Universitário é um edifício grandioso projetado no estilo renascentista italiano e concluído em 1884. Serviu como centro da nova universidade imperial, refletindo o forte investimento na educação durante o período alemão. O edifício apresenta uma majestosa aula e destaca-se como o ponto focal do vasto campus universitário em Neustadt.',
                location: '9 Place de l\'Université'
            }
        },
    },
    {
        id: 'archives-de-la-ville-et-de-l-eurometropole',
        name: "Archives of the City and Eurometropolis",
        shortDescription: "Preserving the history of Strasbourg and its region from the Middle Ages to today.",
        description: "The City and Eurometropolis Archives of Strasbourg are dedicated to collecting and showcasing documents produced by the administration as well as private archives. The collections cover the city's history since the Middle Ages and are accessible to everyone in the reading room, a civic right inherited from the Revolution. The site also offers exhibitions, cultural activities, and numerous digital resources.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "32 Avenue du Rhin",
        coordinates: { latitude: 48.5724289717129, longitude: 7.7632171518673 },
        translations: {
            fr: {
                name: "Archives de la Ville et de l'Eurométropole",
                shortDescription: "Ces archives conservent l'histoire de Strasbourg et de son agglomération du Moyen Âge à nos jours.",
                description: "Les Archives de la Ville et de l'Eurométropole de Strasbourg ont pour mission la collecte et la valorisation des documents produits par l'administration ainsi que d'archives privées. Les fonds couvrent l'histoire de la ville depuis le Moyen Âge et sont accessibles à tous en salle de lecture, un droit citoyen héritier de la Révolution. Le site propose également des expositions, des activités culturelles et de nombreuses ressources numériques.",
                location: "32 avenue du Rhin"
            },
            de: {
                name: "Stadt- und Eurometropolearchiv",
                shortDescription: "Bewahrung der Geschichte Straßburgs und seiner Region vom Mittelalter bis heute.",
                description: "Das Archiv der Stadt und der Eurometropole Straßburg widmet sich der Sammlung und Präsentation von Dokumenten der Verwaltung sowie privater Archive. Die Bestände decken die Geschichte der Stadt seit dem Mittelalter ab und sind für jedermann im Lesesaal zugänglich, ein bürgerliches Recht, das aus der Revolution stammt. Der Ort bietet auch Ausstellungen, kulturelle Aktivitäten und zahlreiche digitale Ressourcen.",
                location: "32 Avenue du Rhin"
            },
            es: {
                name: "Archivos de la Ciudad y Eurometrópolis",
                shortDescription: "Preservando la historia de Estrasburgo y su región desde la Edad Media hasta hoy.",
                description: "Los Archivos de la Ciudad y Eurometrópolis de Estrasburgo se dedican a recopilar y mostrar documentos producidos por la administración, así como archivos privados. Las colecciones cubren la historia de la ciudad desde la Edad Media y son accesibles para todos en la sala de lectura, un derecho cívico heredado de la Revolución. El sitio también ofrece exposiciones, actividades culturales y numerosos recursos digitales.",
                location: "32 Avenue du Rhin"
            },
            it: {
                name: "Archivi della Città e dell'Eurometropoli",
                shortDescription: "Preservare la storia di Strasburgo e della sua regione dal Medioevo a oggi.",
                description: "Gli Archivi della Città e dell'Eurometropoli di Strasburgo sono dedicati alla raccolta e alla valorizzazione dei documenti prodotti dall'amministrazione e degli archivi privati. Le collezioni coprono la storia della città fin dal Medioevo e sono accessibili a tutti nella sala di lettura, un diritto civico ereditato dalla Rivoluzione. Il sito offre anche mostre, attività culturali e numerose risorse digitali.",
                location: "32 Avenue du Rhin"
            },
            ru: {
                name: "Архивы города и евромитрополии",
                shortDescription: "Сохранение истории Страсбурга и его региона со Средних веков до наших дней.",
                description: "Архивы города и евромитрополии Страсбурга посвящены сбору и демонстрации документов, созданных администрацией, а также частных архивов. Коллекции охватывают историю города со Средних веков и доступны для всех в читальном зале — гражданское право, унаследованное от Революции. Сайт также предлагает выставки, культурные мероприятия и многочисленные цифровые ресурсы.",
                location: "32 Avenue du Rhin"
            },
            pt: {
                name: "Arquivos da Cidade e Eurometrópole",
                shortDescription: "Preservando a história de Estrasburgo e sua região desde a Idade Média até hoje.",
                description: "Os Arquivos da Cidade e Eurometrópole de Estrasburgo dedicam-se a recolher e divulgar documentos produzidos pela administração, bem como arquivos privados. As coleções cobrem a história da cidade desde a Idade Média e são acessíveis a todos na sala de leitura, um direito cívico herdado da Revolução. O local também oferece exposições, atividades culturais e numerosos recursos digitais.",
                location: "32 Avenue du Rhin"
            },
            tr: {
                name: "Şehir ve Örometropol Arşivleri",
                shortDescription: "Orta Çağ'dan günümüze Strazburg ve bölgesinin tarihini koruyor.",
                description: "Strazburg Şehir ve Örometropol Arşivleri, idare tarafından üretilen belgelerin yanı sıra özel arşivlerin toplanmasına ve sergilenmesine adanmıştır. Koleksiyonlar, şehrin Orta Çağ'dan bu yana tarihini kapsar ve Devrim'den miras kalan bir yurttaşlık hakkı olarak okuma salonunda herkesin erişimine açıktır. Alan ayrıca sergiler, kültürel etkinlikler ve çok sayıda dijital kaynak sunmaktadır.",
                location: "32 Avenue du Rhin"
            }
        }
    },
    {
        id: 'bibliotheque-nationale-et-universitaire-bnu-',
        name: "National and University Library (BNU)",
        shortDescription: "A major library for humanities and Germanic culture in a Neo-Renaissance building.",
        description: "Founded in 1871, the BNU occupies an iconic Neo-Renaissance building in the Neustadt, recently renovated to meet modern standards. It holds over 3.7 million volumes and is a European reference for Germanic languages and civilizations as well as religious sciences. Besides its vast collections, it offers exhibitions, a museum space, and various cultural services open to all.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "6 Place de la République",
        coordinates: { latitude: 48.587253641730534, longitude: 7.755465382697849 },
        translations: {
            fr: {
                name: "Bibliothèque nationale et universitaire (BNU)",
                shortDescription: "Cette bibliothèque majeure, située dans un édifice néo-Renaissance, est un pôle d'excellence pour les sciences humaines et la culture germanique.",
                description: "Fondée en 1871, la BNU occupe un bâtiment néo-Renaissance emblématique de la Neustadt, récemment rénové pour répondre aux normes modernes. Elle conserve plus de 3,7 millions de volumes et constitue une référence européenne pour les langues et civilisations germaniques ainsi que les sciences religieuses. Outre ses vastes collections, elle propose des expositions, un espace muséographique et divers services culturels ouverts à tous.",
                location: "6 Place de la République"
            },
            de: {
                name: "National- und Universitätsbibliothek (BNU)",
                shortDescription: "Eine bedeutende Bibliothek für Geisteswissenschaften und germanische Kultur in einem Gebäude der Neorenaissance.",
                description: "Die 1871 gegründete BNU befindet sich in einem ikonischen Gebäude der Neorenaissance in der Neustadt, das kürzlich renoviert wurde, um modernen Standards zu entsprechen. Sie besitzt über 3,7 Millionen Bände und ist eine europäische Referenz für germanische Sprachen und Zivilisationen sowie Religionswissenschaften. Neben ihren umfangreichen Sammlungen bietet sie Ausstellungen, einen Museumsraum und verschiedene kulturelle Dienstleistungen, die allen offen stehen.",
                location: "6 Place de la République"
            },
            es: {
                name: "Biblioteca Nacional y Universitaria (BNU)",
                shortDescription: "Una biblioteca importante para las humanidades y la cultura germánica en un edificio neorrenacentista.",
                description: "Fundada en 1871, la BNU ocupa un emblemático edificio neorrenacentista en la Neustadt, recientemente renovado para cumplir con los estándares modernos. Alberga más de 3,7 millones de volúmenes y es una referencia europea para las lenguas y civilizaciones germánicas, así como para las ciencias religiosas. Además de sus vastas colecciones, ofrece exposiciones, un espacio museístico y diversos servicios culturales abiertos a todos.",
                location: "6 Place de la République"
            },
            it: {
                name: "Biblioteca Nazionale e Universitaria (BNU)",
                shortDescription: "Una grande biblioteca per le scienze umane e la cultura germanica in un edificio neo-rinascimentale.",
                description: "Fondata nel 1871, la BNU occupa un iconico edificio neo-rinascimentale nella Neustadt, recentemente ristrutturato per soddisfare gli standard moderni. Custodisce oltre 3,7 milioni di volumi ed è un riferimento europeo per le lingue e le civiltà germaniche, nonché per le scienze religiose. Oltre alle sue vaste collezioni, offre mostre, uno spazio museale e vari servizi culturali aperti a tutti.",
                location: "6 Place de la République"
            },
            ru: {
                name: "Nationale et Universitaire Bibliothèque (BNU)",
                shortDescription: "Крупная библиотека гуманитарных наук и германской культуры в здании неоренессанса.",
                description: "Основанная в 1871 году, BNU занимает знаковое здание в стиле неоренессанс в Нойштадте, недавно отремонтированное в соответствии с современными стандартами. В ней хранится более 3,7 миллиона томов, и она является европейским эталоном германских языков и цивилизаций, а также религиозных наук. Помимо обширных коллекций, она предлагает выставки, музейное пространство и различные культурные услуги, открытые для всех.",
                location: "6 Place de la République"
            },
            pt: {
                name: "Biblioteca Nacional e Universitária (BNU)",
                shortDescription: "Uma grande biblioteca de humanidades e cultura germânica num edifício neo-renascentista.",
                description: "Fundada em 1871, a BNU ocupa um edifício neo-renascentista icónico na Neustadt, recentemente renovado para cumprir os padrões modernos. Detém mais de 3,7 milhões de volumes e é uma referência europeia para as línguas e civilizações germânicas, bem como para as ciências religiosas. Além das suas vastas coleções, oferece exposições, um espaço museológico e vários serviços culturais abertos a todos.",
                location: "6 Place de la République"
            },
            tr: {
                name: "Ulusal ve Üniversite Kütüphanesi (BNU)",
                shortDescription: "Neo-Rönesans binasında beşeri bilimler ve Cermen kültüru için önemli bir kütüphane.",
                description: "1871 yılında kurulan BNU, Neustadt'ta yakın zamanda modern standartları karşılayacak şekilde yenilenmiş ikonik bir Neo-Rönesans binasında yer almaktadır. 3,7 milyondan fazla cildi barındırır ve Cermen dilleri ve medeniyetlerinin yanı sıra dini bilimler için de bir Avrupa referansıdır. Geniş koleksiyonlarının yanı sıra sergiler, bir müze alanı ve herkese açık çeşitli kültürel hizmetler sunmaktadır.",
                location: "6 Place de la République"
            }
        }
    },
    {
        id: 'theatre-alsacien-de-strasbourg',
        name: "Alsatian Theatre of Strasbourg",
        shortDescription: "A lively and popular theatre celebrating the Alsatian dialect through various plays.",
        description: "Founded in 1904, the Alsatian Theatre of Strasbourg highlights the richness of the regional dialect thanks to a troupe of enthusiasts. Its varied programming includes comedies, dramas, and Christmas tales, cultivating humor and open-mindedness. It is hosted within the Opéra National du Rhin.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "19 Place Broglie",
        coordinates: { latitude: 48.5857458417163, longitude: 7.75194904991187 },
        translations: {
            fr: {
                name: "Théâtre alsacien de Strasbourg",
                shortDescription: "Ce théâtre vivant et populaire célèbre le dialecte alsacien à travers des comédies et drames variés.",
                description: "Fondé en 1904, le Théâtre Alsacien de Strasbourg met en valeur la richesse du dialecte régional grâce à une troupe de passionnés. Sa programmation variée inclut comédies, drames et contes de Noël, cultivant l'humour et l'ouverture d'esprit. Il est accueilli au sein de l'Opéra National du Rhin.",
                location: "19 Place Broglie"
            },
            de: {
                name: "Elsässisches Theater Straßburg",
                shortDescription: "Ein lebendiges und beliebtes Theater, das den elsässischen Dialekt durch verschiedene Stücke feiert.",
                description: "Das 1904 gegründete Elsässische Theater Straßburg hebt dank einer Truppe von Enthusiasten den Reichtum des regionalen Dialekts hervor. Sein abwechslungsreiches Programm umfasst Komödien, Dramen und Weihnachtsmärchen und pflegt Humor und Aufgeschlossenheit. Es ist in der Opéra National du Rhin untergebracht.",
                location: "19 Place Broglie"
            },
            es: {
                name: "Teatro Alsaciano de Estrasburgo",
                shortDescription: "Un teatro animado y popular que celebra el dialecto alsaciano a través de diversas obras.",
                description: "Fundado en 1904, el Teatro Alsaciano de Estrasburgo destaca la riqueza del dialecto regional gracias a una compañía de entusiastas. Su variada programación incluye comedias, dramas y cuentos de Navidad, cultivando el humor y la apertura de mente. Tiene su sede en la Opéra National du Rhin.",
                location: "19 Place Broglie"
            },
            it: {
                name: "Teatro Alsaziano di Strasburgo",
                shortDescription: "Un teatro vivace e popolare che celebra il dialetto alsaziano attraverso varie opere teatrali.",
                description: "Fondato nel 1904, il Teatro Alsaziano di Strasburgo mette in risalto la ricchezza del dialetto regionale grazie a una compagnia di appassionati. La sua variegata programmazione include commedie, drammi e racconti di Natale, coltivando l'umorismo e l'apertura mentale. È ospitato all'interno dell'Opéra National du Rhin.",
                location: "19 Place Broglie"
            },
            ru: {
                name: "Эльзасский театр Страсбурга",
                shortDescription: "Живой и популярный театр, прославляющий эльзасский диалект через различные пьесы.",
                description: "Основанный в 1904 году, Эльзасский театр Страсбурга подчеркивает богатство регионального диалекта благодаря труппе энтузиастов. Его разнообразная программа включает комедии, драмы и рождественские сказки, культивируя юмор и непредвзятость. Он находится в Национальной опере Рейна.",
                location: "19 Place Broglie"
            },
            pt: {
                name: "Teatro Alsaciano de Estrasburgo",
                shortDescription: "Um teatro animado e popular que celebra o dialeto alsaciano através de várias peças.",
                description: "Fundado em 1904, o Teatro Alsaciano de Estrasburgo destaca a riqueza do dialeto regional graças a uma companhia de entusiastas. A sua programação variada inclui comédias, dramas e contos de Natal, cultivando o humor e a mente aberta. Está sediado na Opéra National du Rhin.",
                location: "19 Place Broglie"
            },
            tr: {
                name: "Strazburg Alsas Tiyatrosu",
                shortDescription: "Çeşitli oyunlarla Alsas lehçesini kutlayan canlı ve popüler bir tiyatro.",
                description: "1904 yılında kurulan Strazburg Alsas Tiyatrosu, meraklılardan oluşan bir topluluk sayesinde bölgesel lehçenin zenginliğini vurgulamaktadır. Çeşitli programları arasında komediler, dramalar ve Noel masalları yer alır; mizahı ve açık fikirliliği geliştirir. Ren Ulusal Operası bünyesinde yer almaktadır.",
                location: "19 Place Broglie"
            }
        }
    },
    {
        id: 'le-vaisseau',
        name: "Le Vaisseau",
        shortDescription: "A playful science center where children explore science interactively.",
        description: "Le Vaisseau is a science center designed for young people aged 2 to 15, fostering a playful discovery of science and technology. It offers numerous interactive activities for families and serves as an educational resource for teachers.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "1 bis Rue Philippe Dollinger",
        coordinates: { latitude: 48.5727180931458, longitude: 7.77172976454007 },
        translations: {
            fr: {
                name: "Le Vaisseau",
                shortDescription: "Un centre scientifique ludique où les enfants explorent les sciences de manière interactive.",
                description: "Le Vaisseau est un établissement scientifique destiné aux jeunes de 2 à 15 ans, favorisant la découverte ludique des sciences et techniques. Il offre de nombreuses activités interactives pour les familles et constitue une ressource pédagogique pour les enseignants.",
                location: "1 bis Rue Philippe Dollinger"
            },
            de: {
                name: "Le Vaisseau",
                shortDescription: "Ein spielerisches Wissenschaftszentrum, in dem Kinder Wissenschaft interaktiv erkunden.",
                description: "Le Vaisseau ist ein Wissenschaftszentrum für junge Menschen im Alter von 2 bis 15 Jahren, das eine spielerische Entdeckung von Wissenschaft und Technik fördert. Es bietet zahlreiche interaktive Aktivitäten für Familien und dient als pädagogische Ressource für Lehrer.",
                location: "1 bis Rue Philippe Dollinger"
            },
            es: {
                name: "Le Vaisseau",
                shortDescription: "Un centro de ciencias lúdico donde los niños exploran la ciencia de forma interactiva.",
                description: "Le Vaisseau es un centro de ciencias diseñado para jóvenes de 2 a 15 años, que fomenta el descubrimiento lúdico de la ciencia y la tecnología. Ofrece numerosas actividades interactivas para familias y sirve como recurso educativo para profesores.",
                location: "1 bis Rue Philippe Dollinger"
            },
            it: {
                name: "Le Vaisseau",
                shortDescription: "Un giocoso centro scientifico dove i bambini esplorano la scienza in modo interattivo.",
                description: "Le Vaisseau è un centro scientifico progettato per giovani dai 2 ai 15 anni, che favorisce una scoperta giocosa della scienza e della tecnologia. Offre numerose attività interattive per le famiglie e funge da risorsa educativa per gli insegnanti.",
                location: "1 bis Rue Philippe Dollinger"
            },
            ru: {
                name: "Le Vaisseau",
                shortDescription: "Игровой научный центр, где дети изучают науку интерактивно.",
                description: "Le Vaisseau — это научный центр, предназначенный для молодежи от 2 до 15 лет, способствующий игровому открытию науки и технологий. Он предлагает многочисленные интерактивные мероприятия для семей и служит образовательным ресурсом для учителей.",
                location: "1 bis Rue Philippe Dollinger"
            },
            pt: {
                name: "Le Vaisseau",
                shortDescription: "Um centro de ciência lúdico onde as crianças exploram a ciência de forma interativa.",
                description: "Le Vaisseau é um centro de ciência concebido para jovens dos 2 aos 15 anos, promovendo uma descoberta lúdica da ciência e tecnologia. Oferece numerosas atividades interativas para famílias e serve como recurso educativo para professores.",
                location: "1 bis Rue Philippe Dollinger"
            },
            tr: {
                name: "Le Vaisseau",
                shortDescription: "Çocukların bilimi interaktif olarak keşfettiği eğlenceli bir bilim merkezi.",
                description: "Le Vaisseau, 2 ila 15 yaş arası gençler için tasarlanmış, bilim ve teknolojinin eğlenceli bir şekilde keşfedilmesini teşvik eden bir bilim merkezidir. Aileler için sayısız interaktif aktivite sunar ve öğretmenler için eğitim kaynağı olarak hizmet eder.",
                location: "1 bis Rue Philippe Dollinger"
            }
        }
    },
    {
        id: 'zenith-de-strasbourg',
        name: "Zénith of Strasbourg",
        shortDescription: "The largest Zénith-type concert hall in France, hosting international stars and major events.",
        description: "Inaugurated in 2008, the Zénith of Strasbourg is the largest venue of its kind in France, with a capacity of 12,000 spectators. Designed by architect Massimiliano Fuksas as an 'Aladdin's lamp' with its translucent orange membrane, it hosts international concerts and major sporting events. Its sustainable and modular structure makes it a major cultural venue in the Grand Est.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "1 Allée du Zénith",
        coordinates: { latitude: 48.592529, longitude: 7.687376 },
        translations: {
            fr: {
                name: "Zénith de Strasbourg",
                shortDescription: "La plus grande salle de spectacle de type Zénith en France, accueillant stars internationales et grands événements.",
                description: "Inauguré en 2008, le Zénith de Strasbourg est la plus grande salle de ce type en France, avec une capacité de 12 000 spectateurs. Conçu par l'architecte Massimiliano Fuksas comme une 'lanterne d'Aladin' avec sa membrane orange translucide, il accueille concerts internationaux et grands événements sportifs. Sa structure durable et modulable en fait un lieu culturel majeur du Grand Est.",
                location: "1 Allée du Zénith"
            },
            de: {
                name: "Zénith de Strasbourg",
                shortDescription: "Die größte Konzerthalle vom Typ Zénith in Frankreich, in der internationale Stars und Großveranstaltungen stattfinden.",
                description: "Das 2008 eingeweihte Zénith de Strasbourg ist der größte Veranstaltungsort seiner Art in Frankreich mit einer Kapazität von 12.000 Zuschauern. Entworfen vom Architekten Massimiliano Fuksas als „Aladdins Wunderlampe“ mit seiner durchscheinenden orangefarbenen Membran, beherbergt es internationale Konzerte und große Sportveranstaltungen. Seine nachhaltige und modulare Struktur macht es zu einem wichtigen kulturellen Veranstaltungsort im Grand Est.",
                location: "1 Allée du Zénith"
            },
            es: {
                name: "Zénith de Estrasburgo",
                shortDescription: "La sala de conciertos tipo Zénith más grande de Francia, que acoge estrellas internacionales y grandes eventos.",
                description: "Inaugurado en 2008, el Zénith de Estrasburgo es el recinto de su tipo más grande de Francia, con capacidad para 12.000 espectadores. Diseñado por el arquitecto Massimiliano Fuksas como una 'lámpara de Aladino' con su membrana naranja translúcida, acoge conciertos internacionales y grandes eventos deportivos. Su estructura sostenible y modular lo convierte en un importante recinto cultural en el Gran Este.",
                location: "1 Allée du Zénith"
            },
            it: {
                name: "Zénith di Strasburgo",
                shortDescription: "La più grande sala da concerto di tipo Zénith in Francia, che ospita star internazionali e grandi eventi.",
                description: "Inaugurato nel 2008, lo Zénith di Strasburgo è la più grande sede del suo genere in Francia, con una capacità di 12.000 spettatori. Progettato dall'architetto Massimiliano Fuksas come una 'lampada di Aladino' con la sua membrana arancione traslucida, ospita concerti internazionali e grandi eventi sportivi. La sua struttura sostenibile e modulare lo rende un importante luogo culturale nel Grand Est.",
                location: "1 Allée du Zénith"
            },
            ru: {
                name: "Зенит Страсбурга",
                shortDescription: "Крупнейший концертный зал типа «Зенит» во Франции, принимающий мировых звезд и крупные мероприятия.",
                description: "Открытый в 2008 году, «Зенит Страсбурга» является крупнейшей площадкой такого рода во Франции вместимостью 12 000 зрителей. Спроектированный архитектором Массимилиано Фуксасом как «лампа Аладдина» с полупрозрачной оранжевой мембраной, он принимает международные концерты и крупные спортивные мероприятия. Его устойчивая и модульная структура делает его важным культурным объектом в Гранд-Эсте.",
                location: "1 Allée du Zénith"
            },
            pt: {
                name: "Zénith de Estrasburgo",
                shortDescription: "A maior sala de concertos do tipo Zénith em França, acolhendo estrelas internacionais e grandes eventos.",
                description: "Inaugurado em 2008, o Zénith de Estrasburgo é o maior local do seu género em França, com capacidade para 12.000 espetadores. Desenhado pelo arquiteto Massimiliano Fuksas como uma 'lâmpada de Aladino' com a sua membrana laranja translúcida, acolhe concertos internacionais e grandes eventos desportivos. A sua estrutura sustentável e modular torna-o um importante local cultural no Grand Est.",
                location: "1 Allée du Zénith"
            },
            tr: {
                name: "Strazburg Zénith",
                shortDescription: "Uluslararası yıldızlara ve büyük etkinliklere ev sahipliği yapan, Fransa'daki en büyük Zénith tipi konser salonu.",
                description: "2008 yılında açılışı yapılan Strazburg Zénith, 12.000 seyirci kapasitesiyle Fransa'da türünün en büyük mekanıdır. Mimar Massimiliano Fuksas tarafından yarı saydam turuncu zarıyla bir 'Alaaddin'in lambası' olarak tasarlanan mekan, uluslararası konserlere ve büyük spor etkinliklerine ev sahipliği yapıyor. Sürdürülebilir ve modüler yapısı onu Grand Est'te önemli bir kültürel mekan haline getiriyor.",
                location: "1 Allée du Zénith"
            }
        }
    },
    {
        id: 'parc-des-expositions',
        name: "Exhibition Center",
        shortDescription: "A modern events complex designed by Kengo Kuma, ideal for trade fairs and congresses.",
        description: "Opened in 2022 and designed by architect Kengo Kuma, the new Exhibition Center offers 24,000 m² of modern spaces. Its four spacious and interconnected halls allow for great modularity for all types of events, from trade fairs to gala evenings.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "Avenue Herrenschmidt",
        coordinates: { latitude: 48.596361, longitude: 7.754608 },
        translations: {
            fr: {
                name: "Parc des expositions",
                shortDescription: "Un complexe événementiel moderne signé Kengo Kuma, idéal pour salons et congrès.",
                description: "Ouvert en 2022 et conçu par l'architecte Kengo Kuma, le nouveau Parc des Expositions offre 24 000 m² d'espaces modernes. Ses quatre halls spacieux et interconnectés permettent une grande modularité pour tous types d'événements, des salons professionnels aux soirées de gala.",
                location: "Avenue Herrenschmidt"
            },
            de: {
                name: "Messegelände",
                shortDescription: "Ein moderner Veranstaltungskomplex, entworfen von Kengo Kuma, ideal für Messen und Kongresse.",
                description: "Das 2022 eröffnete und vom Architekten Kengo Kuma entworfene neue Messegelände bietet 24.000 m² moderne Flächen. Seine vier geräumigen und miteinander verbundenen Hallen ermöglichen eine große Modularität für alle Arten von Veranstaltungen, von Fachmessen bis hin zu Galaabenden.",
                location: "Avenue Herrenschmidt"
            },
            es: {
                name: "Parque de Exposiciones",
                shortDescription: "Un complejo de eventos moderno diseñado por Kengo Kuma, ideal para ferias y congresos.",
                description: "Inaugurado en 2022 y diseñado por el arquitecto Kengo Kuma, el nuevo Parque de Exposiciones ofrece 24.000 m² de espacios modernos. Sus cuatro salas espaciosas e interconectadas permiten una gran modularidad para todo tipo de eventos, desde ferias comerciales hasta noches de gala.",
                location: "Avenue Herrenschmidt"
            },
            it: {
                name: "Centro Espositivo",
                shortDescription: "Un moderno complesso per eventi progettato da Kengo Kuma, ideale per fiere e congressi.",
                description: "Inaugurato nel 2022 e progettato dall'architetto Kengo Kuma, il nuovo Centro Espositivo offre 24.000 m² di spazi moderni. Le sue quattro sale spaziose e interconnesse consentono una grande modularità per tutti i tipi di eventi, dalle fiere alle serate di gala.",
                location: "Avenue Herrenschmidt"
            },
            ru: {
                name: "Выставочный центр",
                shortDescription: "Современный комплекс для мероприятий, спроектированный Кенго Кума, идеально подходящий для выставок и конгрессов.",
                description: "Открытый в 2022 году и спроектированный архитектором Кенго Кума, новый Выставочный центр предлагает 24 000 м² современных пространств. Его четыре просторных и соединенных между собой зала обеспечивают большую модульность для всех типов мероприятий, от торговых ярмарок до гала-вечеров.",
                location: "Avenue Herrenschmidt"
            },
            pt: {
                name: "Parque de Exposições",
                shortDescription: "Um complexo de eventos moderno desenhado por Kengo Kuma, ideal para feiras e congressos.",
                description: "Inaugurado em 2022 e desenhado pelo arquiteto Kengo Kuma, o novo Parque de Exposições oferece 24.000 m² de espaços modernos. Os seus quatro pavilhões espaçosos e interligados permitem uma grande modularidade para todos os tipos de eventos, desde feiras a noites de gala.",
                location: "Avenue Herrenschmidt"
            },
            tr: {
                name: "Fuar Merkezi",
                shortDescription: "Kengo Kuma tarafından tasarlanan, ticaret fuarları ve kongreler için ideal modern bir etkinlik kompleksi.",
                description: "2022'de açılan ve mimar Kengo Kuma tarafından tasarlanan yeni Fuar Merkezi, 24.000 m² modern alan sunuyor. Dört geniş ve birbirine bağlı salonu, ticaret fuarlarından gala gecelerine kadar her türlü etkinlik için büyük bir modülerlik sağlıyor.",
                location: "Avenue Herrenschmidt"
            }
        }
    },
    {
        id: 'orchestre-philharmonique-de-strasbourg',
        name: "Strasbourg Philharmonic Orchestra",
        shortDescription: "A nationally and internationally renowned orchestra, founded in 1855, with a rich symphonic and lyrical season.",
        description: "Founded in 1855, the Strasbourg Philharmonic Orchestra is one of the oldest and most prestigious orchestras in France, labeled a National Orchestra in 1994. It performs over 30 concerts a year, participates in the Opéra national du Rhin season, and shines internationally through its tours and award-winning recordings. It regularly hosts world-renowned conductors and soloists.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "Place de Bordeaux",
        coordinates: { latitude: 48.5979092919141, longitude: 7.75702064808858 },
        translations: {
            fr: {
                name: "Orchestre philharmonique de Strasbourg",
                shortDescription: "Un orchestre de renommée nationale et internationale, fondé en 1855, proposant une riche saison symphonique et lyrique.",
                description: "Fondé en 1855, l'Orchestre philharmonique de Strasbourg est l'une des formations les plus anciennes et prestigieuses de France, labellisée Orchestre national en 1994. Il propose plus de 30 concerts par an, participe à la saison de l'Opéra national du Rhin et rayonne à l'international grâce à ses tournées et enregistrements primés. Il accueille régulièrement des chefs et solistes de renommée mondiale.",
                location: "Place de Bordeaux"
            },
            de: {
                name: "Philharmonisches Orchester Straßburg",
                shortDescription: "Ein national und international bekanntes Orchester, gegründet 1855, mit einer reichen symphonischen und lyrischen Saison.",
                description: "Das 1855 gegründete Philharmonische Orchester Straßburg ist eines der ältesten und renommiertesten Orchester Frankreichs und wurde 1994 als Nationalorchester ausgezeichnet. Es gibt über 30 Konzerte pro Jahr, nimmt an der Saison der Opéra national du Rhin teil und glänzt international durch seine Tourneen und preisgekrönten Aufnahmen. Es empfängt regelmäßig weltbekannte Dirigenten und Solisten.",
                location: "Place de Bordeaux"
            },
            es: {
                name: "Orquesta Filarmónica de Estrasburgo",
                shortDescription: "Una orquesta de renombre nacional e internacional, fundada en 1855, con una rica temporada sinfónica y lírica.",
                description: "Fundada en 1855, la Orquesta Filarmónica de Estrasburgo es una de las orquestas más antiguas y prestigiosas de Francia, etiquetada como Orquesta Nacional en 1994. Realiza más de 30 conciertos al año, participa en la temporada de la Opéra national du Rhin y brilla internacionalmente a través de sus giras y grabaciones premiadas. Acoge regularmente a directores y solistas de renombre mundial.",
                location: "Place de Bordeaux"
            },
            it: {
                name: "Orchestra Filarmonica di Strasburgo",
                shortDescription: "Un'orchestra di fama nazionale e internazionale, fondata nel 1855, con una ricca stagione sinfonica e lirica.",
                description: "Fondata nel 1855, l'Orchestra Filarmonica di Strasburgo è una delle orchestre più antiche e prestigiose di Francia, etichettata come Orchestra Nazionale nel 1994. Esegue oltre 30 concerti all'anno, partecipa alla stagione dell'Opéra national du Rhin e brilla a livello internazionale attraverso le sue tournée e registrazioni premiate. Ospita regolarmente direttori e solisti di fama mondiale.",
                location: "Place de Bordeaux"
            },
            ru: {
                name: "Страсбургский филармонический оркестр",
                shortDescription: "Национально и международно известный оркестр, основанный в 1855 году, с богатым симфоническим и лирическим сезоном.",
                description: "Основанный в 1855 году, Страсбургский филармонический оркестр является одним из старейших и наиболее престижных оркестров Франции, получившим звание Национального оркестра в 1994 году. Он дает более 30 концертов в год, участвует в сезоне Национальной оперы Рейна и блистает на международной арене благодаря своим гастролям и отмеченным наградами записям. Он регулярно принимает всемирно известных дирижеров и солистов.",
                location: "Place de Bordeaux"
            },
            pt: {
                name: "Orquestra Filarmónica de Estrasburgo",
                shortDescription: "Uma orquestra de renome nacional e internacional, fundada em 1855, com uma rica temporada sinfónica e lírica.",
                description: "Fundada em 1855, a Orquestra Filarmónica de Estrasburgo é uma das orquestras mais antigas e prestigiadas de França, rotulada como Orquestra Nacional em 1994. Realiza mais de 30 concertos por ano, participa na temporada da Opéra national du Rhin e brilha internacionalmente através das suas digressões e gravações premiadas. Acolhe regularmente maestros e solistas de renome mundial.",
                location: "Place de Bordeaux"
            },
            tr: {
                name: "Strazburg Filarmoni Orkestrası",
                shortDescription: "1855'te kurulan, zengin bir senfonik ve lirik sezona sahip, ulusal ve uluslararası üne sahip bir orkestra.",
                description: "1855 yılında kurulan Strazburg Filarmoni Orkestrası, Fransa'nın en eski ve en prestijli orkestralarından biridir ve 1994 yılında Ulusal Orkestra unvanını almıştır. Yılda 30'dan fazla konser vermekte, Ren Ulusal Operası sezonuna katılmakta, turneleri ve ödüllü kayıtları ile uluslararası alanda parlamaktadır. Düzenli olarak dünyaca ünlü şefleri ve solistleri ağırlar.",
                location: "Place de Bordeaux"
            }
        }
    },
    {
        id: 'mediatheque-andre-malraux',
        name: "André Malraux Media Library",
        shortDescription: "An iconic media library housed in a rehabilitated former port warehouse.",
        description: "Located on the Seegmuller mole, this media library occupies a boldy rehabilitated former 1930s industrial building. It houses an exceptional heritage collection, a center dedicated to illustration, and collections focused on European literatures. It is a lively cultural venue at the heart of the new Deux Rives district.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "1 Presqu'île André Malraux",
        coordinates: { latitude: 48.5743644803286, longitude: 7.76031988603803 },
        translations: {
            fr: {
                name: "Médiathèque André Malraux",
                shortDescription: "Une médiathèque emblématique installée dans un ancien entrepôt portuaire réhabilité.",
                description: "Située sur le môle Seegmuller, cette médiathèque occupe un ancien bâtiment industriel des années 1930 réhabilité avec audace. Elle abrite un fonds patrimonial exceptionnel, un centre dédié à l'illustration et des collections tournées vers les littératures européennes. C'est un lieu culturel vivant au cœur du nouveau quartier des Deux Rives.",
                location: "1 Presqu'île André Malraux (Médiathèque André Malraux)"
            },
            de: {
                name: "Mediathek André Malraux",
                shortDescription: "Eine ikonische Mediathek in einem sanierten ehemaligen Hafenlagerhaus.",
                description: "Diese Mediathek auf der Seegmuller-Mole befindet sich in einem kühn sanierten ehemaligen Industriegebäude aus den 1930er Jahren. Sie beherbergt eine außergewöhnliche Kulturerbesammlung, ein Zentrum für Illustration und Sammlungen europäischer Literatur. Sie ist ein lebendiger kultureller Ort im Herzen des neuen Stadtteils Deux Rives.",
                location: "1 Presqu'île André Malraux (Bibliothek)"
            },
            es: {
                name: "Mediateca André Malraux",
                shortDescription: "Una mediateca icónica ubicada en un antiguo almacén portuario rehabilitado.",
                description: "Ubicada en el muelle Seegmuller, esta mediateca ocupa un antiguo edificio industrial de la década de 1930 audazmente rehabilitado. Alberga una colección patrimonial excepcional, un centro dedicado a la ilustración y colecciones centradas en las literaturas europeas. Es un lugar cultural animado en el corazón del nuevo barrio Deux Rives.",
                location: "1 Presqu'île André Malraux (Biblioteca)"
            },
            it: {
                name: "Mediateca André Malraux",
                shortDescription: "Un'iconica mediateca ospitata in un ex magazzino portuale riqualificato.",
                description: "Situata sul molo Seegmuller, questa mediateca occupa un ex edificio industriale degli anni '30 audacemente riqualificato. Ospita un'eccezionale collezione del patrimonio, un centro dedicato all'illustrazione e collezioni incentrate sulle letterature europee. È un vivace luogo culturale nel cuore del nuovo quartiere Deux Rives.",
                location: "1 Presqu'île André Malraux (Biblioteca)"
            },
            ru: {
                name: "Медиатека Андре Мальро",
                shortDescription: "Знаковая медиатека, расположенная в отреставрированном бывшем портовом складе.",
                description: "Расположенная на моле Зегмюллер, эта медиатека занимает смело отреставрированное бывшее промышленное здание 1930-х годов. В ней хранится исключительная коллекция наследия, центр, посвященный иллюстрации, и коллекции, ориентированные на европейскую литературу. Это оживленное культурное место в самом сердце нового района Двух Берегов.",
                location: "1 Presqu'île André Malraux (Библиотека)"
            },
            pt: {
                name: "Mediateca André Malraux",
                shortDescription: "Uma mediateca icónica alojada num antigo armazém portuário reabilitado.",
                description: "Localizada no molhe Seegmuller, esta mediateca ocupa um antigo edifício industrial da década de 1930 audaciosamente reabilitado. Alberga uma coleção patrimonial excecional, um centro dedicado à ilustração e coleções focadas nas literaturas europeias. É um local cultural animado no coração do novo bairro Deux Rives.",
                location: "1 Presqu'île André Malraux (Biblioteca)"
            },
            tr: {
                name: "André Malraux Medya Kütüphanesi",
                shortDescription: "Restore edilmiş eski bir liman deposunda yer alan ikonik bir medya kütüphanesi.",
                description: "Seegmuller rıhtımında bulunan bu medya kütüphanesi, 1930'lardan kalma cesurca restore edilmiş eski bir endüstriyel binada yer almaktadır. Olağanüstü bir miras koleksiyonuna, illüstrasyona adanmış bir merkeze ve Avrupa edebiyatlarına odaklanan koleksiyonlara ev sahipliği yapmaktadır. Yeni Deux Rives bölgesinin kalbinde canlı bir kültürel mekandır.",
                location: "1 Presqu'île André Malraux (Kütüphane)"
            }
        }
    },
    {
        id: 'cabinet-des-estampes-et-des-dessins',
        name: "Print and Drawing Room",
        shortDescription: "A rich collection of graphic art from the 15th to the 20th century located in the Palais Rohan.",
        description: "Housed in a wing of the Palais Rohan, the Print and Drawing Room preserves over 200,000 graphic works. Its collections cover the period from the 15th to the 20th century and include masterpieces by Dürer, Baldung Grien, and Gustave Doré. It regularly offers exhibitions highlighting the richness of its holdings.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "5 Place du Château",
        coordinates: { latitude: 48.5810929189577, longitude: 7.75083279997787 },
        translations: {
            fr: {
                name: "Cabinet des Estampes et des Dessins",
                shortDescription: "Une riche collection d'art graphique du XVe au XXe siècle située au Palais Rohan.",
                description: "Installé dans une aile du Palais Rohan, le Cabinet des Estampes et des Dessins conserve plus de 200 000 œuvres graphiques. Ses collections couvrent la période du XVe au XXe siècle et incluent des chefs-d'œuvre de Dürer, Baldung Grien ou Gustave Doré. Il propose régulièrement des expositions mettant en valeur la richesse de ses fonds.",
                location: "5 Place du Château"
            },
            de: {
                name: "Kupferstichkabinett",
                shortDescription: "Eine reiche Sammlung grafischer Kunst vom 15. bis zum 20. Jahrhundert im Palais Rohan.",
                description: "Untergebracht in einem Flügel des Palais Rohan, bewahrt das Kupferstichkabinett über 200.000 grafische Werke. Seine Sammlungen decken den Zeitraum vom 15. bis zum 20. Jahrhundert ab und umfassen Meisterwerke von Dürer, Baldung Grien und Gustave Doré. Es bietet regelmäßig Ausstellungen an, die den Reichtum seiner Bestände hervorheben.",
                location: "5 Place du Château"
            },
            es: {
                name: "Gabinete de Estampas y Dibujos",
                shortDescription: "Una rica colección de arte gráfico del siglo XV al XX ubicada en el Palacio Rohan.",
                description: "Ubicado en un ala del Palacio Rohan, el Gabinete de Estampas y Dibujos conserva más de 200.000 obras gráficas. Sus colecciones cubren el período del siglo XV al XX e incluyen obras maestras de Durero, Baldung Grien y Gustave Doré. Ofrece regularmente exposiciones que destacan la riqueza de sus fondos.",
                location: "5 Place du Château"
            },
            it: {
                name: "Gabinetto delle Stampe e dei Disegni",
                shortDescription: "Una ricca collezione di arte grafica dal XV al XX secolo situata nel Palais Rohan.",
                description: "Ospitato in un'ala del Palais Rohan, il Gabinetto delle Stampe e dei Disegni conserva oltre 200.000 opere grafiche. Le sue collezioni coprono il periodo dal XV al XX secolo e includono capolavori di Dürer, Baldung Grien e Gustave Doré. Offre regolarmente mostre che mettono in risalto la ricchezza dei suoi fondi.",
                location: "5 Place du Château"
            },
            ru: {
                name: "Кабинет эстампов и рисунков",
                shortDescription: "Богатая коллекция графического искусства с XV по XX век, расположенная во дворце Рогана.",
                description: "Размещенный в крыле дворца Рогана, Кабинет эстампов и рисунков хранит более 200 000 графических работ. Его коллекции охватывают период с XV по XX век и включают шедевры Дюрера, Бальдунга Грина и Гюстава Доре. Он регулярно предлагает выставки, подчеркивающие богатство его фондов.",
                location: "5 Place du Château"
            },
            pt: {
                name: "Gabinete de Estampas e Desenhos",
                shortDescription: "Uma rica coleção de arte gráfica do século XV ao XX localizada no Palácio Rohan.",
                description: "Alojado numa ala do Palácio Rohan, o Gabinete de Estampas e Desenhos preserva mais de 200.000 obras gráficas. As suas coleções cobrem o período do século XV ao XX e incluem obras-primas de Dürer, Baldung Grien e Gustave Doré. Oferece regularmente exposições destacando a riqueza dos seus fundos.",
                location: "5 Place du Château"
            },
            tr: {
                name: "Baskı ve Çizim Odası",
                shortDescription: "Palais Rohan'da bulunan 15. yüzyıldan 20. yüzyıla kadar uzanan zengin bir grafik sanat koleksiyonu.",
                description: "Palais Rohan'ın bir kanadında yer alan Baskı ve Çizim Odası, 200.000'den fazla grafik eserini korumaktadır. Koleksiyonları 15. yüzyıldan 20. yüzyıla kadar olan dönemi kapsar ve Dürer, Baldung Grien ve Gustave Doré'nin başyapıtlarını içerir. Varlıklarının zenginliğini vurgulayan sergiler düzenli olarak sunmaktadır.",
                location: "5 Place du Château"
            }
        }
    },
    {
        id: 'l-aubette-1928',
        name: "L'Aubette 1928",
        shortDescription: "A masterpiece of the artistic avant-garde integrating man into painting.",
        description: "L'Aubette 1928 is a leisure complex decorated by Theo van Doesburg, Jean Arp, and Sophie Taeuber-Arp, listed as a Historical Monument. A true manifesto of the De Stijl movement nicknamed the 'Sistine Chapel of abstract art', it aims to place the visitor at the heart of the painting.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "Place Kléber",
        coordinates: { latitude: 48.5838647689204, longitude: 7.74580678790479 },
        translations: {
            fr: {
                name: "L'Aubette 1928",
                shortDescription: "Un chef-d'œuvre de l'avant-garde artistique intégrant l'homme dans la peinture.",
                description: "L'Aubette 1928 est un complexe de loisirs décoré par Theo van Doesburg, Jean Arp et Sophie Taeuber-Arp, classé Monument historique. Véritable manifeste du mouvement De Stijl surnommé la 'Chapelle Sixtine de l'art abstrait', il vise à placer le visiteur au cœur de la peinture.",
                location: "Place Kléber"
            },
            de: {
                name: "L'Aubette 1928",
                shortDescription: "Ein Meisterwerk der künstlerischen Avantgarde, das den Menschen in die Malerei integriert.",
                description: "L'Aubette 1928 ist ein von Theo van Doesburg, Jean Arp und Sophie Taeuber-Arp dekorierter Freizeitkomplex, der unter Denkmalschutz steht. Als wahres Manifest der De-Stijl-Bewegung, das den Spitznamen „Sixtinische Kapelle der abstrakten Kunst“ trägt, zielt es darauf ab, den Besucher in den Mittelpunkt der Malerei zu stellen.",
                location: "Place Kléber"
            },
            es: {
                name: "L'Aubette 1928",
                shortDescription: "Una obra maestra de la vanguardia artística que integra al hombre en la pintura.",
                description: "L'Aubette 1928 es un complejo de ocio decorado por Theo van Doesburg, Jean Arp y Sophie Taeuber-Arp, catalogado como Monumento Histórico. Un verdadero manifiesto del movimiento De Stijl apodado la 'Capilla Sixtina del arte abstracto', tiene como objetivo situar al visitante en el corazón de la pintura.",
                location: "Place Kléber"
            },
            it: {
                name: "L'Aubette 1928",
                shortDescription: "Un capolavoro dell'avanguardia artistica che integra l'uomo nella pittura.",
                description: "L'Aubette 1928 è un complesso ricreativo decorato da Theo van Doesburg, Jean Arp e Sophie Taeuber-Arp, classificato come Monumento Storico. Un vero manifesto del movimento De Stijl soprannominato la 'Cappella Sistina dell'arte astratta', mira a porre il visitatore al centro della pittura.",
                location: "Place Kléber"
            },
            ru: {
                name: "Обетт 1928",
                shortDescription: "Шедевр художественного авангарда, интегрирующий человека в живопись.",
                description: "«Обетт 1928» — это развлекательный комплекс, украшенный Тео ван Дусбургом, Жаном Арпом и Софи Тойбер-Арп, внесенный в список исторических памятников. Настоящий манифест движения Де Стейл, прозванный «Сикстинской капеллой абстрактного искусства», он стремится поместить посетителя в самое сердце живописи.",
                location: "Place Kléber"
            },
            pt: {
                name: "L'Aubette 1928",
                shortDescription: "Uma obra-prima da vanguarda artística que integra o homem na pintura.",
                description: "L'Aubette 1928 é um complexo de lazer decorado por Theo van Doesburg, Jean Arp e Sophie Taeuber-Arp, classificado como Monumento Histórico. Um verdadeiro manifesto do movimento De Stijl apelidado de 'Capela Sistina da arte abstrata', visa colocar o visitante no coração da pintura.",
                location: "Place Kléber"
            },
            tr: {
                name: "L'Aubette 1928",
                shortDescription: "İnsanı resimle bütünleştiren sanatsal avangardın bir şaheseri.",
                description: "L'Aubette 1928, Theo van Doesburg, Jean Arp ve Sophie Taeuber-Arp tarafından dekore edilmiş, Tarihi Anıt olarak listelenmiş bir eğlence kompleksidir. 'Soyut sanatın Sistine Şapeli' lakaplı De Stijl hareketinin gerçek bir manifestosu olup, ziyaretçiyi resmin kalbine yerleştirmeyi amaçlar.",
                location: "Place Kléber"
            }
        }
    },
    {
        id: 'observatoire',
        name: "Observatory",
        shortDescription: "A historic 19th-century observatory featuring a large dome and a planetarium.",
        description: "Built in 1881 in the Botanical Garden, the Strasbourg Observatory is topped by an impressive 34-ton dome housing a large refracting telescope. Its architecture bears witness to the Reichsland period with its allegorical pediments. The site also includes a planetarium and a collection of antique instruments, managed by the University of Strasbourg.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "11 Rue de l'Université",
        coordinates: { latitude: 48.5824516361666, longitude: 7.76766676306167 },
        translations: {
            fr: {
                name: "Observatoire",
                shortDescription: "Un observatoire historique du XIXe siècle doté d'une grande coupole et d'un planétarium.",
                description: "Édifié en 1881 dans le Jardin Botanique, l'Observatoire de Strasbourg est coiffé d'une impressionnante coupole de 34 tonnes abritant une grande lunette astronomique. Son architecture témoigne de la période du Reichsland avec ses frontons allégoriques. Le site comprend également un planétarium et une collection d'instruments anciens, gérés par l'Université de Strasbourg.",
                location: "11 Rue de l'Université"
            },
            de: {
                name: "Sternwarte",
                shortDescription: "Eine historische Sternwarte aus dem 19. Jahrhundert mit einer großen Kuppel und einem Planetarium.",
                description: "Die 1881 im Botanischen Garten erbaute Sternwarte von Straßburg wird von einer beeindruckenden 34 Tonnen schweren Kuppel gekrönt, die ein großes Linsenfernrohr beherbergt. Ihre Architektur zeugt mit ihren allegorischen Giebeln von der Zeit des Reichslandes. Das Gelände umfasst auch ein Planetarium und eine Sammlung antiker Instrumente, die von der Universität Straßburg verwaltet werden.",
                location: "11 Rue de l'Université"
            },
            es: {
                name: "Observatorio",
                shortDescription: "Un observatorio histórico del siglo XIX con una gran cúpula y un planetario.",
                description: "Construido en 1881 en el Jardín Botánico, el Observatorio de Estrasburgo está coronado por una impresionante cúpula de 34 toneladas que alberga un gran telescopio refractor. Su arquitectura da testimonio del período del Reichsland con sus frontones alegóricos. El sitio también incluye un planetario y una colección de instrumentos antiguos, gestionados por la Universidad de Estrasburgo.",
                location: "11 Rue de l'Université"
            },
            it: {
                name: "Osservatorio",
                shortDescription: "Uno storico osservatorio del XIX secolo con una grande cupola e un planetario.",
                description: "Costruito nel 1881 nel Giardino Botanico, l'Osservatorio di Strasburgo è sormontato da un'imponente cupola di 34 tonnellate che ospita un grande telescopio rifrattore. La sua architettura testimonia il periodo del Reichsland con i suoi frontoni allegorici. Il sito comprende anche un planetario e una collezione di strumenti antichi, gestiti dall'Università di Strasburgo.",
                location: "11 Rue de l'Université"
            },
            ru: {
                name: "Обсерватория",
                shortDescription: "Историческая обсерватория XIX века с большим куполом и планетарием.",
                description: "Построенная в 1881 году в Ботаническом саду, Страсбургская обсерватория увенчана впечатляющим 34-тонным куполом, в котором находится большой телескоп-рефрактор. Ее архитектура свидетельствует о периоде Рейхсланда своими аллегорическими фронтонами. На территории также есть планетарий и коллекция старинных инструментов, которыми управляет Страсбургский университет.",
                location: "11 Rue de l'Université"
            },
            pt: {
                name: "Observatório",
                shortDescription: "Um observatório histórico do século XIX com uma grande cúpula e um planetário.",
                description: "Construído em 1881 no Jardim Botânico, o Observatório de Estrasburgo é encimado por uma impressionante cúpula de 34 toneladas que alberga um grande telescópio refrator. A sua arquitetura testemunha o período do Reichsland com os seus frontões alegóricos. O local inclui também um planetário e uma coleção de instrumentos antigos, geridos pela Universidade de Estrasburgo.",
                location: "11 Rue de l'Université"
            },
            tr: {
                name: "Gözlemevi",
                shortDescription: "Büyük bir kubbe ve planetaryuma sahip tarihi 19. yüzyıl gözlemevi.",
                description: "1881'de Botanik Bahçesi'nde inşa edilen Strazburg Gözlemevi, büyük bir mercekli teleskobu barındıran etkileyici 34 tonluk bir kubbe ile örtülüdür. Mimarisi, alegorik alınlıklarıyla Reichsland dönemine tanıklık eder. Alan ayrıca Strazburg Üniversitesi tarafından yönetilen bir planetaryum ve antika aletler koleksiyonu içerir.",
                location: "11 Rue de l'Université"
            }
        }
    },
    {
        id: 'l-hotel-du-departement',
        name: "Departmental Hotel",
        shortDescription: "A modern, ship-shaped building, seat of the Departmental Council on the banks of the Ill.",
        description: "Completed in 1989, this imposing building designed by Claude Vasconi evokes a ship moored along the Ill, opposite the Vauban Dam. Seat of the Departmental Council (now European Collectivity of Alsace), its blend of stone and metal marks the entrance to the historic center.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "Place du Quartier Blanc",
        coordinates: { latitude: 48.5785986852625, longitude: 7.7381028268543 },
        translations: {
            fr: {
                name: "L'hôtel du Département",
                shortDescription: "Un bâtiment moderne en forme de vaisseau, siège du Conseil départemental au bord de l'Ill.",
                description: "Achevé en 1989, ce bâtiment imposant conçu par Claude Vasconi évoque un vaisseau amarré le long de l'Ill, face au Barrage Vauban. Siège du Conseil départemental (maintenant Collectivité européenne d'Alsace), son mélange de pierre et de métal marque l'entrée du centre historique.",
                location: "Place du Quartier Blanc"
            },
            de: {
                name: "Hôtel du Département",
                shortDescription: "Ein modernes Gebäude in Schiffsform, Sitz des Generalrats am Ufer der Ill.",
                description: "Dieses 1989 fertiggestellte imposante Gebäude, entworfen von Claude Vasconi, erinnert an ein Schiff, das an der Ill vor dem Vauban-Wehr vor Anker liegt. Als Sitz des Generalrats (heute Europäische Gebietskörperschaft Elsass) markiert seine Mischung aus Stein und Metall den Eingang zum historischen Zentrum.",
                location: "Place du Quartier Blanc"
            },
            es: {
                name: "Hôtel du Département",
                shortDescription: "Un edificio moderno en forma de barco, sede del Consejo Departamental a orillas del Ill.",
                description: "Terminado en 1989, este imponente edificio diseñado por Claude Vasconi evoca un barco amarrado a lo largo del Ill, frente a la Presa Vauban. Sede del Consejo Departamental (ahora Colectividad Europea de Alsacia), su mezcla de piedra y metal marca la entrada al centro histórico.",
                location: "Place du Quartier Blanc"
            },
            it: {
                name: "Hôtel du Département",
                shortDescription: "Un moderno edificio a forma di nave, sede del Consiglio Dipartimentale sulle rive dell'Ill.",
                description: "Completato nel 1989, questo imponente edificio progettato da Claude Vasconi evoca una nave ormeggiata lungo l'Ill, di fronte alla Diga Vauban. Sede del Consiglio Dipartimentale (ora Collettività Europea d'Alsazia), la sua miscela di pietra e metallo segna l'ingresso al centro storico.",
                location: "Place du Quartier Blanc"
            },
            ru: {
                name: "Отель дю Департеман",
                shortDescription: "Современное здание в форме корабля, резиденция Совета департамента на берегу Иля.",
                description: "Завершенное в 1989 году, это внушительное здание, спроектированное Клодом Васкони, напоминает корабль, пришвартованный вдоль Иля, напротив плотины Вобана. Являясь резиденцией Совета департамента (ныне Европейское сообщество Эльзаса), его сочетание камня и металла знаменует вход в исторический центр.",
                location: "Place du Quartier Blanc"
            },
            pt: {
                name: "Hôtel du Département",
                shortDescription: "Um edifício moderno em forma de navio, sede do Conselho Departamental nas margens do Ill.",
                description: "Concluído em 1989, este imponente edifício desenhado por Claude Vasconi evoca um navio atracado ao longo do Ill, em frente à Barragem Vauban. Sede do Conselho Departamental (agora Coletividade Europeia da Alsácia), a sua mistura de pedra e metal marca a entrada no centro histórico.",
                location: "Place du Quartier Blanc"
            },
            tr: {
                name: "Departman Binası (Hôtel du Département)",
                shortDescription: "Ill Nehri kıyısında, Departman Konseyi'nin merkezi olan gemi şeklinde modern bir bina.",
                description: "1989 yılında tamamlanan ve Claude Vasconi tarafından tasarlanan bu heybetli bina, Vauban Barajı'nın karşısında, Ill nehri boyunca demirlemiş bir gemiyi andırır. Departman Konseyi'nin (şimdiki Alsas Avrupa Kolektivitesi) merkezi olan taş ve metal karışımı yapısı, tarihi merkeze girişi işaret eder.",
                location: "Place du Quartier Blanc"
            }
        }
    },
    {
        id: 'palais-de-justice',
        name: "Courthouse",
        shortDescription: "A majestic 19th-century Neo-Greek palace, symbolizing the independence of justice.",
        description: "Built at the end of the 19th century by Skjold Neckelmann, the Courthouse is distinguished by its Neo-Greek facade adorned with a portico and sphinxes. Its interior spaces, including an impressive Salle des Pas Perdus under a glass roof, are listed historical monuments. Recently renovated, it combines architectural heritage and modern functionality.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "1 Quai Finkmatt",
        coordinates: { latitude: 48.5871379101465, longitude: 7.74677298185002 },
        translations: {
            fr: {
                name: "Palais de Justice",
                shortDescription: "Un majestueux palais néo-grec du XIXe siècle, symbole de l'indépendance de la justice.",
                description: "Construit à la fin du XIXe siècle par Skjold Neckelmann, le Palais de Justice se distingue par sa façade néo-grecque ornée d'un portique et de sphinx. Ses espaces intérieurs, dont une impressionnante salle des pas perdus sous verrière, sont classés monuments historiques. Récemment rénové, il allie patrimoine architectural et fonctionnalité moderne.",
                location: "1 Quai Finkmatt"
            },
            de: {
                name: "Justizpalast",
                shortDescription: "Ein majestätischer neugriechischer Palast aus dem 19. Jahrhundert, Symbol für die Unabhängigkeit der Justiz.",
                description: "Der Ende des 19. Jahrhunderts von Skjold Neckelmann erbaute Justizpalast zeichnet sich durch seine neugriechische Fassade aus, die mit einem Portikus und Sphinxen geschmückt ist. Seine Innenräume, darunter eine beeindruckende Salle des Pas Perdus unter einem Glasdach, stehen unter Denkmalschutz. Kürzlich renoviert, verbindet er architektonisches Erbe und moderne Funktionalität.",
                location: "1 Quai Finkmatt"
            },
            es: {
                name: "Palacio de Justicia",
                shortDescription: "Un majestuoso palacio neogriego del siglo XIX, símbolo de la independencia de la justicia.",
                description: "Construido a finales del siglo XIX por Skjold Neckelmann, el Palacio de Justicia se distingue por su fachada neogriega adornada con un pórtico y esfinges. Sus espacios interiores, incluida una impresionante Salle des Pas Perdus bajo un techo de cristal, están catalogados como monumentos históricos. Recientemente renovado, combina patrimonio arquitectónico y funcionalidad moderna.",
                location: "1 Quai Finkmatt"
            },
            it: {
                name: "Palazzo di Giustizia",
                shortDescription: "Un maestoso palazzo neo-greco del XIX secolo, simbolo dell'indipendenza della giustizia.",
                description: "Costruito alla fine del XIX secolo da Skjold Neckelmann, il Palazzo di Giustizia si distingue per la sua facciata neo-greca ornata da un portico e sfingi. I suoi spazi interni, tra cui un'impressionante Salle des Pas Perdus sotto un tetto di vetro, sono classificati come monumenti storici. Recentemente ristrutturato, unisce patrimonio architettonico e funzionalità moderna.",
                location: "1 Quai Finkmatt"
            },
            ru: {
                name: "Дворец правосудия",
                shortDescription: "Величественный неогреческий дворец XIX века, символизирующий независимость правосудия.",
                description: "Построенный в конце XIX века Скьольдом Неккельманом, Дворец правосудия отличается своим неогреческим фасадом, украшенным портиком и сфинксами. Его внутренние пространства, в том числе впечатляющий Зал потерянных шагов под стеклянной крышей, внесены в список исторических памятников. Недавно отремонтированный, он сочетает в себе архитектурное наследие и современную функциональность.",
                location: "1 Quai Finkmatt"
            },
            pt: {
                name: "Palácio da Justiça",
                shortDescription: "Um majestoso palácio neo-grego do século XIX, símbolo da independência da justiça.",
                description: "Construído no final do século XIX por Skjold Neckelmann, o Palácio da Justiça distingue-se pela sua fachada neo-grega adornada com um pórtico e esfinges. Os seus espaços interiores, incluindo uma impressionante Salle des Pas Perdus sob um telhado de vidro, estão classificados como monumentos históricos. Recentemente renovado, combina património arquitetónico e funcionalidade moderna.",
                location: "1 Quai Finkmatt"
            },
            tr: {
                name: "Adalet Sarayı (Palais de Justice)",
                shortDescription: "Yargı bağımsızlığını simgeleyen, 19. yüzyıldan kalma görkemli bir Neo-Yunan sarayı.",
                description: "19. yüzyılın sonlarında Skjold Neckelmann tarafından inşa edilen Adalet Sarayı, revak ve sfenkslerle süslenmiş Neo-Yunan cephesiyle dikkat çeker. Cam çatılı etkileyici Salle des Pas Perdus dahil olmak üzere iç mekanları tarihi anıtlar olarak listelenmiştir. Yakın zamanda yenilenmiş olup, mimari mirası ve modern işlevselliği birleştirir.",
                location: "1 Quai Finkmatt"
            }
        }
    },
    {
        id: 'la-manufacture-des-tabacs',
        name: "Tobacco Manufactory",
        shortDescription: "A former 19th-century factory converted into a dynamic hub of life, culture, and innovation.",
        description: "A witness to 19th-century industrial architecture, this former factory has been rehabilitated into a dynamic living space in the heart of Krutenau. It now hosts start-ups, the Rhine High School of Arts, a youth hostel, and conviviality spaces, all around a courtyard open to the district.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "7 Rue de la Krutenau",
        coordinates: { latitude: 48.5812435590203, longitude: 7.75730345193515 },
        translations: {
            fr: {
                name: "La Manufacture des Tabacs",
                shortDescription: "Une ancienne manufacture du XIXe siècle reconvertie en un pôle dynamique de vie, de culture et d'innovation.",
                description: "Témoin de l'architecture industrielle du XIXe siècle, cette ancienne manufacture a été réhabilitée en un lieu de vie dynamique au cœur de la Krutenau. Elle accueille désormais des start-ups, la Haute École des Arts du Rhin, une auberge de jeunesse et des espaces de convivialité, le tout autour d'une cour ouverte sur le quartier.",
                location: "7 Rue de la Krutenau"
            },
            de: {
                name: "Tabakmanufaktur",
                shortDescription: "Eine ehemalige Fabrik aus dem 19. Jahrhundert, die in ein dynamisches Zentrum für Leben, Kultur und Innovation umgewandelt wurde.",
                description: "Als Zeuge der Industriearchitektur des 19. Jahrhunderts wurde diese ehemalige Fabrik zu einem dynamischen Lebensraum im Herzen der Krutenau saniert. Sie beherbergt heute Start-ups, die Hochschule der Künste Rhein, eine Jugendherberge und Geselligkeitsräume, alles um einen zum Viertel offenen Innenhof.",
                location: "7 Rue de la Krutenau"
            },
            es: {
                name: "Manufactura de Tabacos",
                shortDescription: "Una antigua fábrica del siglo XIX convertida en un centro dinámico de vida, cultura e innovación.",
                description: "Testigo de la arquitectura industrial del siglo XIX, esta antigua fábrica ha sido rehabilitada en un espacio de vida dinámico en el corazón de Krutenau. Ahora alberga nuevas empresas, la Escuela Superior de Artes del Rin, un albergue juvenil y espacios de convivencia, todo alrededor de un patio abierto al barrio.",
                location: "7 Rue de la Krutenau"
            },
            it: {
                name: "Manifattura Tabacchi",
                shortDescription: "Un'ex fabbrica del XIX secolo trasformata in un vivace centro di vita, cultura e innovazione.",
                description: "Testimone dell'architettura industriale del XIX secolo, questa ex fabbrica è stata riqualificata in uno spazio abitativo dinamico nel cuore di Krutenau. Ora ospita start-up, la Scuola Superiore delle Arti del Reno, un ostello della gioventù e spazi di convivialità, il tutto attorno a un cortile aperto al quartiere.",
                location: "7 Rue de la Krutenau"
            },
            ru: {
                name: "Табачная мануфактура",
                shortDescription: "Бывшая фабрика XIX века, превращенная в динамичный центр жизни, культуры и инноваций.",
                description: "Свидетель промышленной архитектуры XIX века, эта бывшая фабрика была преобразована в динамичное жилое пространство в самом сердце Крутено. Теперь здесь размещаются стартапы, Рейнская высшая школа искусств, молодежный хостел и места для общения, и все это вокруг двора, открытого для района.",
                location: "7 Rue de la Krutenau"
            },
            pt: {
                name: "A Manufatura de Tabacos",
                shortDescription: "Uma antiga fábrica do século XIX convertida num pólo dinâmico de vida, cultura e inovação.",
                description: "Testemunha da arquitetura industrial do século XIX, esta antiga fábrica foi reabilitada num espaço de vida dinâmico no coração de Krutenau. Agora acolhe start-ups, a Escola Superior de Artes do Reno, uma pousada da juventude e espaços de convívio, tudo em redor de um pátio aberto ao bairro.",
                location: "7 Rue de la Krutenau"
            },
            tr: {
                name: "Tütün Fabrikası (La Manufacture des Tabacs)",
                shortDescription: "Yaşam, kültür ve inovasyonun dinamik bir merkezine dönüştürülmüş 19. yüzyıldan kalma eski bir fabrika.",
                description: "19. yüzyıl endüstriyel mimarisinin bir tanığı olan bu eski fabrika, Krutenau'nun kalbinde dinamik bir yaşam alanına dönüştürülmüştür. Artık start-up'lara, Ren Yüksek Sanat Okulu'na, bir gençlik yurduna ve sosyalleşme alanlarına ev sahipliği yapmaktadır ve tüm bunlar mahalleye açık bir avlu etrafında toplanmıştır.",
                location: "7 Rue de la Krutenau"
            }
        }
    },
    {
        id: 'palais-de-l-europe',
        name: "Palace of Europe",
        shortDescription: "The historic seat of the Council of Europe, a symbol of European unity and cooperation.",
        description: "Inaugurated in 1977, the Palace of Europe is the main seat of the Council of Europe, designed to embody the strength of the union. Its massive exterior architecture contrasts with a curved interior. The forecourt houses symbolic works such as the Auschwitz Memorial and a sculpture dedicated to Human Rights.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "Avenue de l'Europe",
        coordinates: { latitude: 48.5947321452897, longitude: 7.77178965450865 },
        translations: {
            fr: {
                name: "Palais de l'Europe",
                shortDescription: "Le siège historique du Conseil de l'Europe, un symbole de l'unité et de la coopération européennes.",
                description: "Inauguré en 1977, le Palais de l'Europe est le siège principal du Conseil de l'Europe, conçu pour incarner la force de l'union. Son architecture extérieure massive contraste avec un intérieur tout en courbes. Le parvis abrite des œuvres symboliques comme le Mémorial d'Auschwitz et une sculpture dédiée aux Droits de l'Homme.",
                location: "Avenue de l'Europe"
            },
            de: {
                name: "Europapalast",
                shortDescription: "Der historische Sitz des Europarats, ein Symbol für die europäische Einheit und Zusammenarbeit.",
                description: "Der 1977 eingeweihte Europapalast ist der Hauptsitz des Europarats und wurde entworfen, um die Stärke der Union zu verkörpern. Seine massive Außenarchitektur steht im Kontrast zu einem geschwungenen Inneren. Der Vorplatz beherbergt symbolische Werke wie das Auschwitz-Mahnmal und eine Skulptur, die den Menschenrechten gewidmet ist.",
                location: "Avenue de l'Europe"
            },
            es: {
                name: "Palacio de Europa",
                shortDescription: "La sede histórica del Consejo de Europa, un símbolo de la unidad y la cooperación europeas.",
                description: "Inaugurado en 1977, el Palacio de Europa es la sede principal del Consejo de Europa, diseñado para encarnar la fuerza de la unión. Su arquitectura exterior masiva contrasta con un interior curvo. La explanada alberga obras simbólicas como el Memorial de Auschwitz y una escultura dedicada a los Derechos Humanos.",
                location: "Avenue de l'Europe"
            },
            it: {
                name: "Palazzo d'Europa",
                shortDescription: "La storica sede del Consiglio d'Europa, simbolo dell'unità e della cooperazione europea.",
                description: "Inaugurato nel 1977, il Palazzo d'Europa è la sede principale del Consiglio d'Europa, progettato per incarnare la forza dell'unione. La sua massiccia architettura esterna contrasta con un interno curvo. Il piazzale ospita opere simboliche come il Memoriale di Auschwitz e una scultura dedicata ai Diritti Umani.",
                location: "Avenue de l'Europe"
            },
            ru: {
                name: "Дворец Европы",
                shortDescription: "Историческая резиденция Совета Европы, символ европейского единства и сотрудничества.",
                description: "Открытый в 1977 году, Дворец Европы является главной резиденцией Совета Европы, призванной олицетворять силу союза. Его массивная внешняя архитектура контрастирует с изогнутым интерьером. На переднем дворе находятся символические произведения, такие как Мемориал Освенцима и скульптура, посвященная правам человека.",
                location: "Avenue de l'Europe"
            },
            pt: {
                name: "Palácio da Europa",
                shortDescription: "A sede histórica do Conselho da Europa, um símbolo da unidade e cooperação europeias.",
                description: "Inaugurado em 1977, o Palácio da Europa é a sede principal do Conselho da Europa, concebido para encarnar a força da união. A sua arquitetura exterior maciça contrasta com um interior curvo. O adro alberga obras simbólicas como o Memorial de Auschwitz e uma escultura dedicada aos Direitos Humanos.",
                location: "Avenue de l'Europe"
            },
            tr: {
                name: "Avrupa Sarayı (Palais de l'Europe)",
                shortDescription: "Avrupa Konseyi'nin tarihi merkezi, Avrupa birliği ve işbirliğinin sembolü.",
                description: "1977 yılında açılan Avrupa Sarayı, birliğin gücünü somutlaştırmak için tasarlanmış Avrupa Konseyi'nin ana merkezidir. Masif dış mimarisi, kavisli iç mekanıyla tezat oluşturur. Ön avlu, Auschwitz Anıtı ve İnsan Haklarına adanmış bir heykel gibi sembolik eserlere ev sahipliği yapmaktadır.",
                location: "Avenue de l'Europe"
            }
        }
    },
    {
        id: 'hotel-de-ville',
        name: "City Hall (Hôtel de Ville)",
        shortDescription: "An elegant 18th-century building, former counts' residence turned into the heart of municipal representation.",
        description: "This elegant Regency-style building, built in the 18th century for the Counts of Hanau-Lichtenberg, became the City Hall in 1806. Its austere facade on the square side contrasts with the inner courtyard decorated with mythological trophies. The interior salons have preserved their rich period decorations, testifying to the splendor of the noble residences of yesteryear.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "9 Rue Brulée",
        coordinates: { latitude: 48.5847391762622, longitude: 7.75056246923311 },
        translations: {
            fr: {
                name: "Hôtel de Ville",
                shortDescription: "Un élégant bâtiment du XVIIIe siècle, ancienne résidence comtale devenue le cœur de la représentation municipale.",
                description: "Cet élégant édifice de style Régence, construit au XVIIIe siècle pour les comtes de Hanau-Lichtenberg, est devenu l'Hôtel de Ville en 1806. Sa façade austère côté place contraste avec la cour intérieure décorée de trophées mythologiques. Les salons intérieurs ont conservé leurs riches décors d'époque, témoignant du faste des résidences nobles d'antan.",
                location: "9 Rue Brulée"
            },
            de: {
                name: "Rathaus",
                shortDescription: "Ein elegantes Gebäude aus dem 18. Jahrhundert, ehemalige Grafenresidenz, die zum Herzen der städtischen Repräsentation wurde.",
                description: "Dieses elegante Gebäude im Régence-Stil, das im 18. Jahrhundert für die Grafen von Hanau-Lichtenberg erbaut wurde, wurde 1806 zum Rathaus. Seine strenge Fassade zur Platzseite steht im Kontrast zum mit mythologischen Trophäen geschmückten Innenhof. Die inneren Salons haben ihre reichen zeitgenössischen Dekorationen bewahrt und zeugen vom Glanz der Adelssitze vergangener Zeiten.",
                location: "9 Rue Brulée"
            },
            es: {
                name: "Ayuntamiento",
                shortDescription: "Un elegante edificio del siglo XVIII, antigua residencia condal convertida en el corazón de la representación municipal.",
                description: "Este elegante edificio de estilo Regencia, construido en el siglo XVIII para los condes de Hanau-Lichtenberg, se convirtió en el Ayuntamiento en 1806. Su fachada austera en el lado de la plaza contrasta con el patio interior decorado con trofeos mitológicos. Los salones interiores han conservado sus ricas decoraciones de época, que atestiguan el esplendor de las residencias nobles de antaño.",
                location: "9 Rue Brulée"
            },
            it: {
                name: "Municipio",
                shortDescription: "Un elegante edificio del XVIII secolo, ex residenza dei conti trasformata nel cuore della rappresentanza municipale.",
                description: "Questo elegante edificio in stile Reggenza, costruito nel XVIII secolo per i conti di Hanau-Lichtenberg, divenne il Municipio nel 1806. La sua facciata austera sul lato della piazza contrasta con il cortile interno decorato con trofei mitologici. I saloni interni hanno conservato le loro ricche decorazioni d'epoca, testimoniando lo splendore delle nobili residenze di un tempo.",
                location: "9 Rue Brulée"
            },
            ru: {
                name: "Ратуша (Отель де Виль)",
                shortDescription: "Элегантное здание XVIII века, бывшая резиденция графов, превращенная в сердце муниципального представительства.",
                description: "Это элегантное здание в стиле Регентства, построенное в XVIII веке для графов Ханау-Лихтенберг, стало Ратушей в 1806 году. Его строгий фасад со стороны площади контрастирует с внутренним двором, украшенным мифологическими трофеями. Внутренние салоны сохранили свои богатые исторические украшения, свидетельствующие о великолепии дворянских резиденций прошлых лет.",
                location: "9 Rue Brulée"
            },
            pt: {
                name: "Câmara Municipal",
                shortDescription: "Um elegante edifício do século XVIII, antiga residência condal transformada no coração da representação municipal.",
                description: "Este elegante edifício de estilo Regência, construído no século XVIII para os condes de Hanau-Lichtenberg, tornou-se a Câmara Municipal em 1806. A sua fachada austera no lado da praça contrasta com o pátio interior decorado com troféus mitológicos. Os salões interiores preservaram as suas ricas decorações de época, testemunhando o esplendor das residências nobres de outrora.",
                location: "9 Rue Brulée"
            },
            tr: {
                name: "Belediye Binası (Hôtel de Ville)",
                shortDescription: "Eski bir kont konutu olan ve belediye temsilinin kalbine dönüşen 18. yüzyıldan kalma zarif bina.",
                description: "Hanau-Lichtenberg Kontları için 18. yüzyılda inşa edilen bu zarif Regency tarzı bina, 1806'da Belediye Binası oldu. Meydan tarafındaki sade cephesi, mitolojik ganimetlerle süslü iç avlu ile tezat oluşturur. İç salonlar, geçmişin soylu konutlarının ihtişamına tanıklık eden zengin dönem dekorasyonlarını korumuştur.",
                location: "9 Rue Brulée"
            }
        }
    },
    {
        id: 'opera-national-du-rhin',
        name: "Rhine National Opera",
        shortDescription: "A prestigious lyrical institution located in a historic neoclassical theater.",
        description: "The Rhine National Opera is a major institution uniting the artistic forces of Strasbourg, Mulhouse, and Colmar. Its Strasbourg headquarters occupies a 19th-century neoclassical theater, recognizable by its columned portico and rounded rear facade. It offers a rich season of operas, ballets, and recitals.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "19 Place Broglie",
        coordinates: { latitude: 48.5857458417163, longitude: 7.75194904991187 },
        translations: {
            fr: {
                name: "Opéra national du Rhin",
                shortDescription: "Une institution lyrique prestigieuse située dans un théâtre néoclassique historique.",
                description: "L'Opéra national du Rhin est une institution majeure réunissant les forces artistiques de Strasbourg, Mulhouse et Colmar. Son siège strasbourgeois occupe un théâtre néoclassique du XIXe siècle, reconnaissable à son portique à colonnes et sa façade arrière arrondie. Il propose une riche saison d'opéras, ballets et récitals.",
                location: "19 Place Broglie"
            },
            de: {
                name: "Opéra national du Rhin",
                shortDescription: "Eine prestigeträchtige lyrische Institution in einem historischen neoklassizistischen Theater.",
                description: "Die Opéra national du Rhin ist eine bedeutende Institution, die die künstlerischen Kräfte von Straßburg, Mülhausen und Colmar vereint. Ihr Straßburger Hauptsitz befindet sich in einem neoklassizistischen Theater aus dem 19. Jahrhundert, das an seinem Säulenportikus und seiner abgerundeten Rückfassade erkennbar ist. Sie bietet eine reiche Saison an Opern, Balletten und Liederabenden.",
                location: "19 Place Broglie"
            },
            es: {
                name: "Ópera Nacional del Rin",
                shortDescription: "Una prestigiosa institución lírica ubicada en un histórico teatro neoclásico.",
                description: "La Ópera Nacional del Rin es una institución importante que une las fuerzas artísticas de Estrasburgo, Mulhouse y Colmar. Su sede de Estrasburgo ocupa un teatro neoclásico del siglo XIX, reconocible por su pórtico con columnas y su fachada trasera redondeada. Ofrece una rica temporada de óperas, ballets y recitales.",
                location: "19 Place Broglie"
            },
            it: {
                name: "Opéra national du Rhin",
                shortDescription: "Una prestigiosa istituzione lirica situata in uno storico teatro neoclassico.",
                description: "L'Opéra national du Rhin è un'importante istituzione che unisce le forze artistiche di Strasburgo, Mulhouse e Colmar. La sua sede di Strasburgo occupa un teatro neoclassico del XIX secolo, riconoscibile dal suo portico a colonne e dalla facciata posteriore arrotondata. Offre una ricca stagione di opere, balletti e recital.",
                location: "19 Place Broglie"
            },
            ru: {
                name: "Национальная опера Рейна",
                shortDescription: "Престижное лирическое учреждение, расположенное в историческом неоклассическом театре.",
                description: "Национальная опера Рейна — это крупное учреждение, объединяющее творческие силы Страсбурга, Мюлуза и Кольмара. Ее штаб-квартира в Страсбурге занимает неоклассический театр XIX века, узнаваемый по портику с колоннами и закругленному заднему фасаду. Она предлагает богатый сезон опер, балетов и сольных концертов.",
                location: "19 Place Broglie"
            },
            pt: {
                name: "Ópera Nacional do Reno",
                shortDescription: "Uma instituição lírica de prestígio localizada num teatro neoclássico histórico.",
                description: "A Ópera Nacional do Reno é uma grande instituição que une as forças artísticas de Estrasburgo, Mulhouse e Colmar. A sua sede em Estrasburgo ocupa um teatro neoclássico do século XIX, reconhecível pelo seu pórtico com colunas e fachada traseira arredondada. Oferece uma rica temporada de óperas, bailados e recitais.",
                location: "19 Place Broglie"
            },
            tr: {
                name: "Ren Ulusal Operası",
                shortDescription: "Tarihi neoklasik bir tiyatroda bulunan prestijli bir lirik kurum.",
                description: "Ren Ulusal Operası, Strazburg, Mulhouse ve Colmar'ın sanatsal güçlerini birleştiren büyük bir kurumdur. Strazburg merkezi, sütunlu girişi ve yuvarlak arka cephesiyle tanınan 19. yüzyıldan kalma neoklasik bir tiyatroda yer almaktadır. Zengin bir opera, bale ve resital sezonu sunmaktadır.",
                location: "19 Place Broglie"
            }
        }
    },
    {
        id: 'eglise-saint-guillaume',
        name: "Church of Saint William",
        shortDescription: "A picturesque church on the waterfront, remarkable for its asymmetrical architecture and interior treasures.",
        description: "Located on the banks of the Ill, this Gothic church strikes with its asymmetrical appearance due to its later added bell tower. It houses a Silbermann organ, a rich decor blending Gothic and Baroque, as well as magnificent 14th-century tombs. Its exceptional acoustics make it a popular venue for concerts.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "1 Rue Munch",
        coordinates: { latitude: 48.58208913036921, longitude: 7.757266051561016 },
        translations: {
            fr: {
                name: "Église Saint-Guillaume",
                shortDescription: "Une église pittoresque au bord de l'eau, remarquable par son architecture asymétrique et ses trésors intérieurs.",
                description: "Située au bord de l'Ill, cette église gothique frappe par son aspect asymétrique dû à son clocher ajouté ultérieurement. Elle abrite un orgue Silbermann, un riche décor mêlant gothique et baroque, ainsi que de magnifiques tombeaux du XIVe siècle. Son acoustique exceptionnelle en fait un lieu prisé pour les concerts.",
                location: "1 Rue Munch"
            },
            de: {
                name: "Wilhelmskirche",
                shortDescription: "Eine malerische Kirche am Wasser, bemerkenswert für ihre asymmetrische Architektur und ihre inneren Schätze.",
                description: "Diese gotische Kirche am Ufer der Ill besticht durch ihr asymmetrisches Aussehen aufgrund ihres später hinzugefügten Glockenturms. Sie beherbergt eine Silbermann-Orgel, ein reiches Dekor, das Gotik und Barock verbindet, sowie prächtige Grabmäler aus dem 14. Jahrhundert. Ihre außergewöhnliche Akustik macht sie zu einem beliebten Ort für Konzerte.",
                location: "1 Rue Munch"
            },
            es: {
                name: "Iglesia de San Guillermo",
                shortDescription: "Una pintoresca iglesia frente al mar, notable por su arquitectura asimétrica y sus tesoros interiores.",
                description: "Ubicada a orillas del Ill, esta iglesia gótica llama la atención por su aspecto asimétrico debido a su campanario añadido posteriormente. Alberga un órgano Silbermann, una rica decoración que mezcla gótico y barroco, así como magníficas tumbas del siglo XIV. Su acústica excepcional la convierte en un lugar popular para conciertos.",
                location: "1 Rue Munch"
            },
            it: {
                name: "Chiesa di San Guglielmo",
                shortDescription: "Una pittoresca chiesa sul lungomare, notevole per la sua architettura asimmetrica e i suoi tesori interni.",
                description: "Situata sulle rive dell'Ill, questa chiesa gotica colpisce per il suo aspetto asimmetrico dovuto al campanile aggiunto in seguito. Ospita un organo Silbermann, un ricco arredamento che mescola gotico e barocco, così come magnifiche tombe del XIV secolo. La sua acustica eccezionale ne fa un luogo popolare per i concerti.",
                location: "1 Rue Munch"
            },
            ru: {
                name: "Церковь Святого Вильгельма",
                shortDescription: "Живописная церковь на набережной, примечательная своей асимметричной архитектурой и внутренними сокровищами.",
                description: "Расположенная на берегу Иля, эта готическая церковь поражает своим асимметричным видом из-за добавленной позже колокольни. В ней находится орган Зильбермана, богатый декор, сочетающий готику и барокко, а также великолепные гробницы XIV века. Ее исключительная акустика делает ее популярным местом для концертов.",
                location: "1 Rue Munch"
            },
            pt: {
                name: "Igreja de São Guilherme",
                shortDescription: "Uma igreja pitoresca à beira-mar, notável pela sua arquitetura assimétrica e tesouros interiores.",
                description: "Localizada nas margens do Ill, esta igreja gótica impressiona pelo seu aspeto assimétrico devido à sua torre sineira adicionada posteriormente. Alberga um órgão Silbermann, uma decoração rica que mistura gótico e barroco, bem como magníficos túmulos do século XIV. A sua acústica excecional torna-a um local popular para concertos.",
                location: "1 Rue Munch"
            },
            tr: {
                name: "Aziz William Kilisesi",
                shortDescription: "Asimetrik mimarisi ve iç hazineleriyle dikkat çeken, rıhtımda pitoresk bir kilise.",
                description: "Ill Nehri kıyısında yer alan bu Gotik kilise, sonradan eklenen çan kulesi nedeniyle asimetrik görünümüyle dikkat çeker. Bir Silbermann orguna, Gotik ve Barok karışımı zengin bir dekora ve ayrıca 14. yüzyıldan kalma muhteşem mezarlara ev sahipliği yapmaktadır. Olağanüstü akustiği, onu konserler için popüler bir mekan haline getirir.",
                location: "1 Rue Munch"
            }
        }
    },
    {
        id: 'theatre-national-de-strasbourg',
        name: "National Theatre of Strasbourg",
        shortDescription: "The only national theater in the regions, housed in the former Palace of the Diet.",
        description: "The only French national theater located outside Paris, the TNS is housed in the former Palace of the Diet of Alsace-Lorraine, a Neo-Renaissance building. It houses a permanent troupe and a higher school of dramatic art, offering an ambitious and European program. The site has several modern performance halls.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "1 Avenue de la Marseillaise",
        coordinates: { latitude: 48.5860847253208, longitude: 7.75542392122826 },
        translations: {
            fr: {
                name: "Théâtre national de Strasbourg",
                shortDescription: "Le seul théâtre national en région, installé dans l'ancien palais de la Diète.",
                description: "Seul théâtre national français situé hors de Paris, le TNS est installé dans l'ancien palais de la Diète d'Alsace-Lorraine, un bâtiment néo-Renaissance. Il abrite une troupe permanente et une école supérieure d'art dramatique, proposant une programmation ambitieuse et européenne. Le site dispose de plusieurs salles de spectacle modernes.",
                location: "1 Avenue de la Marseillaise"
            },
            de: {
                name: "Nationaltheater Straßburg",
                shortDescription: "Das einzige Nationaltheater in den Regionen, untergebracht im ehemaligen Landtagsgebäude.",
                description: "Das TNS, das einzige französische Nationaltheater außerhalb von Paris, ist im ehemaligen Landtagsgebäude von Elsass-Lothringen, einem Gebäude der Neorenaissance, untergebracht. Es beherbergt ein festes Ensemble und eine Hochschule für Schauspielkunst und bietet ein ehrgeiziges und europäisches Programm. Das Gelände verfügt über mehrere moderne Aufführungssäle.",
                location: "1 Avenue de la Marseillaise"
            },
            es: {
                name: "Teatro Nacional de Estrasburgo",
                shortDescription: "El único teatro nacional en las regiones, ubicado en el antiguo Palacio de la Dieta.",
                description: "El único teatro nacional francés situado fuera de París, el TNS se encuentra en el antiguo Palacio de la Dieta de Alsacia-Lorena, un edificio neorrenacentista. Alberga una compañía permanente y una escuela superior de arte dramático, ofreciendo una programación ambiciosa y europea. El sitio cuenta con varias salas de espectáculos modernas.",
                location: "1 Avenue de la Marseillaise"
            },
            it: {
                name: "Teatro Nazionale di Strasburgo",
                shortDescription: "L'unico teatro nazionale nelle regioni, ospitato nell'ex Palazzo della Dieta.",
                description: "L'unico teatro nazionale francese situato fuori Parigi, il TNS è ospitato nell'ex Palazzo della Dieta dell'Alsazia-Lorena, un edificio neo-rinascimentale. Ospita una compagnia permanente e una scuola superiore di arte drammatica, offrendo un programma ambizioso ed europeo. Il sito dispone di diverse moderne sale per spettacoli.",
                location: "1 Avenue de la Marseillaise"
            },
            ru: {
                name: "Национальный театр Страсбурга",
                shortDescription: "Единственный национальный театр в регионах, расположенный в бывшем Дворце диеты.",
                description: "Единственный французский национальный театр, расположенный за пределами Парижа, TNS размещается в бывшем Дворце диеты Эльзас-Лотарингии, здании в стиле неоренессанс. В нем работают постоянная труппа и высшая школа драматического искусства, предлагающие амбициозную и европейскую программу. На территории есть несколько современных концертных залов.",
                location: "1 Avenue de la Marseillaise"
            },
            pt: {
                name: "Teatro Nacional de Estrasburgo",
                shortDescription: "O único teatro nacional nas regiões, alojado no antigo Palácio da Dieta.",
                description: "O único teatro nacional francês localizado fora de Paris, o TNS está alojado no antigo Palácio da Dieta da Alsácia-Lorena, um edifício neo-renascentista. Alberga uma companhia permanente e uma escola superior de arte dramática, oferecendo uma programação ambiciosa e europeia. O local possui várias salas de espetáculos modernas.",
                location: "1 Avenue de la Marseillaise"
            },
            tr: {
                name: "Strazburg Ulusal Tiyatrosu",
                shortDescription: "Bölgelerdeki tek ulusal tiyatro, eski Diyet Sarayı'nda yer almaktadır.",
                description: "Paris dışındaki tek Fransız ulusal tiyatrosu olan TNS, Neo-Rönesans tarzı bir bina olan eski Alsas-Loren Diyet Sarayı'nda yer almaktadır. Kalıcı bir topluluğa ve bir yüksek tiyatro sanatları okuluna ev sahipliği yapmakta, iddialı ve Avrupalı bir program sunmaktadır. Alanda birkaç modern gösteri salonu bulunmaktadır.",
                location: "1 Avenue de la Marseillaise"
            }
        }
    },
    {
        id: 'eglise-saint-pierre-le-vieux-catholique-',
        name: "Church of Saint-Pierre-le-Vieux (Catholic)",
        shortDescription: "A unique double church in Strasbourg, housing precious works of sacred art.",
        description: "A Strasbourgeois peculiarity, this church is composed of two interlocked buildings, one medieval and the other from the 19th century. It preserves a rare Alsatian rood screen, a Silbermann organ, and important carved and painted panels from the late Middle Ages, including works influenced by Martin Schongauer.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'sights',
        location: "Place Saint-Pierre-le-Vieux",
        coordinates: { latitude: 48.5830074301819, longitude: 7.73999310418156 },
        translations: {
            fr: {
                name: "Église Saint-Pierre-le-vieux (Catholique)",
                shortDescription: "Une église double unique à Strasbourg, abritant de précieuses œuvres d'art sacré.",
                description: "Particularité strasbourgeoise, cette église est composée de deux édifices imbriqués, l'un médiéval et l'autre du XIXe siècle. Elle conserve un rare jubé alsacien, un orgue Silbermann et d'importants panneaux sculptés et peints de la fin du Moyen Âge, dont des œuvres influencées par Martin Schongauer.",
                location: "Place Saint-Pierre-le-Vieux"
            },
            de: {
                name: "Kirche Saint-Pierre-le-Vieux (Katholisch)",
                shortDescription: "Eine einzigartige Doppelkirche in Straßburg, die kostbare Werke sakraler Kunst beherbergt.",
                description: "Eine Straßburger Besonderheit: Diese Kirche besteht aus zwei ineinander verschachtelten Gebäuden, eines aus dem Mittelalter und das andere aus dem 19. Jahrhundert. Sie bewahrt einen seltenen elsässischen Lettner, eine Silbermann-Orgel und bedeutende geschnitzte und bemalte Tafeln aus dem Spätmittelalter, darunter Werke, die von Martin Schongauer beeinflusst wurden.",
                location: "Place Saint-Pierre-le-Vieux"
            },
            es: {
                name: "Iglesia de San Pedro el Viejo (Católica)",
                shortDescription: "Una iglesia doble única en Estrasburgo, que alberga preciosas obras de arte sacro.",
                description: "Una peculiaridad estrasburguesa, esta iglesia se compone de dos edificios entrelazados, uno medieval y el otro del siglo XIX. Conserva un raro coro alto alsaciano, un órgano Silbermann e importantes paneles tallados y pintados de finales de la Edad Media, incluidas obras influenciadas por Martin Schongauer.",
                location: "Place Saint-Pierre-le-Vieux"
            },
            it: {
                name: "Chiesa di Saint-Pierre-le-Vieux (Cattolica)",
                shortDescription: "Una chiesa doppia unica a Strasburgo, che ospita preziose opere d'arte sacra.",
                description: "Peculiarità di Strasburgo, questa chiesa è composta da due edifici incastrati, uno medievale e l'altro del XIX secolo. Conserva un raro tramezzo alsaziano, un organo Silbermann e importanti pannelli scolpiti e dipinti del tardo Medioevo, tra cui opere influenzate da Martin Schongauer.",
                location: "Place Saint-Pierre-le-Vieux"
            },
            ru: {
                name: "Церковь Сен-Пьер-ле-Вьё (Католическая)",
                shortDescription: "Уникальная двойная церковь в Страсбурге, в которой хранятся драгоценные произведения сакрального искусства.",
                description: "Страсбургская особенность, эта церковь состоит из двух соединенных зданий: одно средневековое, а другое XIX века. В ней сохранились редкая эльзасская алтарная преграда, орган Зильбермана и важные резные и расписные панели позднего Средневековья, в том числе работы, созданные под влиянием Мартина Шонгауэра.",
                location: "Place Saint-Pierre-le-Vieux"
            },
            pt: {
                name: "Igreja de Saint-Pierre-le-Vieux (Católica)",
                shortDescription: "Uma igreja dupla única em Estrasburgo, que alberga preciosas obras de arte sacra.",
                description: "Uma peculiaridade de Estrasburgo, esta igreja é composta por dois edifícios interligados, um medieval e outro do século XIX. Preserva um raro jubé alsaciano, um órgão Silbermann e importantes painéis esculpidos e pintados do final da Idade Média, incluindo obras influenciadas por Martin Schongauer.",
                location: "Place Saint-Pierre-le-Vieux"
            },
            tr: {
                name: "Saint-Pierre-le-Vieux Kilisesi (Katolik)",
                shortDescription: "Kutsal sanatın değerli eserlerini barındıran Strazburg'da eşsiz bir çift kilise.",
                description: "Strazburg'a özgü bir özellik olan bu kilise, biri orta çağdan diğeri 19. yüzyıldan kalma birbirine kenetlenmiş iki binadan oluşur. Nadir bir Alsas koro perdesini, bir Silbermann orgunu ve Martin Schongauer'den etkilenen eserler de dahil olmak üzere geç Orta Çağ'dan kalma önemli oyma ve boyalı panelleri korumaktadır.",
                location: "Place Saint-Pierre-le-Vieux"
            }
        }
    },];
