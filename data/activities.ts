export const ACTIVITIES = [
    {
        id: 'batorama',
        name: 'Batorama Boat Tour',
        shortDescription: 'The city from the perspective of the Ill river.',
        image: require('@/assets/images/activities/batorama.png'),
        location: 'Place du Marché aux Poissons',
        coordinates: { latitude: 48.5806, longitude: 7.7516 },
        category: 'activities',
        translations: {
            tr: {
                name: 'Batorama Tekne Turu',
                shortDescription: 'Şehri Ill nehri perspektifinden keşfedin.',
                location: 'Balık Pazarı Meydanı, Strazburg'
            },
            fr: {
                name: 'Batorama',
                shortDescription: 'La ville vue depuis l\'Ill.',
                location: 'Place du Marché aux Poissons'
            },
            de: {
                name: 'Batorama Bootstour',
                shortDescription: 'Die Stadt aus der Perspektive der Ill.',
                location: 'Place du Marché aux Poissons'
            },
            es: {
                name: 'Paseo en barco Batorama',
                shortDescription: 'La ciudad desde la perspectiva del río Ill.',
                location: 'Place du Marché aux Poissons'
            },
            it: {
                name: 'Batorama Boat Tour',
                shortDescription: 'La città vista dal fiume Ill.',
                location: 'Place du Marché aux Poissons'
            },
            ru: {
                name: 'Прогулка на катере Batorama',
                shortDescription: 'Город с ракурса реки Иль.',
                location: 'Place du Marché aux Poissons'
            },
            pt: {
                name: 'Batorama Passeio de Barco',
                shortDescription: 'A cidade vista do rio Ill.',
                location: 'Place du Marché aux Poissons'
            }
        }
    },
    {
        id: 'climb-cathedral',
        name: 'Cathedral Platform',
        shortDescription: 'Panoramic views from 66 meters high.',
        image: require('@/assets/images/sights/cathedral.jpg'),
        location: 'Place de la Cathédrale',
        coordinates: { latitude: 48.5818, longitude: 7.7509 },
        category: 'activities',
        translations: {
            tr: {
                name: 'Katedral Platformu',
                shortDescription: '66 metre yükseklikten panoramik manzaralar.',
                location: 'Katedral Meydanı, Strazburg'
            },
            fr: {
                name: 'Plateforme de la Cathédrale',
                shortDescription: 'Vues panoramiques à 66 mètres de hauteur.',
                location: 'Place de la Cathédrale'
            },
            de: {
                name: 'Münsterplattform',
                shortDescription: 'Panoramablick aus 66 Metern Höhe.',
                location: 'Münsterplatz'
            },
            es: {
                name: 'Plataforma de la Catedral',
                shortDescription: 'Vistas panorámicas desde 66 metros de altura.',
                location: 'Plaza de la Catedral'
            },
            it: {
                name: 'Piattaforma della Cattedrale',
                shortDescription: 'Viste panoramiche da 66 metri di altezza.',
                location: 'Piazza della Cattedrale'
            },
            ru: {
                name: 'Платформа собора',
                shortDescription: 'Панорамный вид с высоты 66 метров.',
                location: 'Pl. de la Cathédrale'
            },
            pt: {
                name: 'Plataforma da Catedral',
                shortDescription: 'Vistas panorâmicas de 66 metros de altura.',
                location: 'Place de la Cathédrale'
            }
        }
    },
    {
        id: 'wine-cellar',
        name: 'Historic Wine Cellar',
        shortDescription: 'Visit the 1395 barrel in the Hospital.',
        image: require('@/assets/images/sights/palais-rohan.jpg'), 
        location: 'Hôpital Civil',
        coordinates: { latitude: 48.5768, longitude: 7.7460 },
        category: 'activities',
        translations: {
            tr: {
                name: 'Tarihi Şarap Mahzeni',
                shortDescription: 'Hastanenin içindeki 1395 yapımı fıçıyı ziyaret edin.',
                location: 'Sivil Hastane (Hôpital Civil), Strazburg'
            },
            fr: {
                name: 'Cave Historique des Hospices',
                shortDescription: 'Visitez le tonneau de 1395 dans l\'hôpital.',
                location: 'Hôpital Civil'
            },
            de: {
                name: 'Historischer Weinkeller',
                shortDescription: 'Besuchen Sie das Fass von 1395 im Krankenhaus.',
                location: 'Hôpital Civil'
            },
            es: {
                name: 'Bodega Histórica de los Hospicios',
                shortDescription: 'Visite el barril de 1395 en el Hospital.',
                location: 'Hôpital Civil'
            },
            it: {
                name: 'Cantina Storica degli Ospizi',
                shortDescription: 'Visita la botte del 1395 nell\'Ospedale.',
                location: 'Hôpital Civil'
            },
            ru: {
                name: 'Исторический винный погреб',
                shortDescription: 'Посетите бочку 1395 года в больнице.',
                location: 'Hôpital Civil'
            },
            pt: {
                name: 'Adega Histórica dos Hospícios',
                shortDescription: 'Visite o barril de 1395 no Hospital.',
                location: 'Hôpital Civil'
            }
        }
    },
    {
        id: 'cinema-vox',
        name: "Cinema Vox",
        shortDescription: "Located in a historic building in the city center, offering modern films.",
        description: "Located in the heart of the city within a historic building, this cinema features seven screens showing the latest film releases in both French and original versions.",
        image: require('@/assets/images/sights/cathedral.jpg'), 
        category: 'activities',
        location: "17 Rue des Francs-Bourgeois",
        coordinates: { latitude: 48.5817466320027, longitude: 7.74639246042351 },
        translations: {
            fr: {
                name: "Cinéma Vox",
                shortDescription: "Ce cinéma installé au coeur de la ville dans un immeuble historique, comprend...",
                description: "Ce cinéma installé au coeur de la ville dans un immeuble historique, comprend sept salles qui proposent l'essentiel de la production cinématographique récente en version française ou version originale.",
                location: "17 Rue des Francs-Bourgeois"
            },
            de: {
                name: "Kino Vox",
                shortDescription: "In einem historischen Gebäude im Stadtzentrum gelegen, bietet es moderne Filme.",
                description: "Dieses Kino befindet sich im Herzen der Stadt in einem historischen Gebäude und verfügt über sieben Säle, die die wichtigsten aktuellen Filmproduktionen in französischer oder Originalfassung zeigen.",
                location: "17 Rue des Francs-Bourgeois"
            },
            es: {
                name: "Cine Vox",
                shortDescription: "Ubicado en un edificio histórico en el centro de la ciudad, ofrece películas modernas.",
                description: "Situado en el corazón de la ciudad en un edificio histórico, este cine cuenta con siete salas que ofrecen lo mejor de la producción cinematográfica reciente en versión francesa o versión original.",
                location: "17 Rue des Francs-Bourgeois"
            },
            it: {
                name: "Cinema Vox",
                shortDescription: "Situato in un edificio storico nel centro della città, offre film moderni.",
                description: "Situato nel cuore della città in un edificio storico, questo cinema dispone di sette sale che offrono il meglio della produzione cinematografica recente in versione francese o originale.",
                location: "17 Rue des Francs-Bourgeois"
            },
            ru: {
                name: "Кинотеатр Vox",
                shortDescription: "Расположенный в историческом здании в центре города, он предлагает современные фильмы.",
                description: "Этот кинотеатр, расположенный в самом сердце города в историческом здании, располагает семью залами, где демонстрируются лучшие новинки кинопроизводства на французском языке или в оригинальной версии.",
                location: "17 Rue des Francs-Bourgeois"
            },
            pt: {
                name: "Cinema Vox",
                shortDescription: "Localizado num edifício histórico no centro da cidade, oferece filmes modernos.",
                description: "Localizado no coração da cidade num edifício histórico, este cinema dispõe de sete salas que oferecem o melhor da produção cinematográfica recente em versão francesa ou original.",
                location: "17 Rue des Francs-Bourgeois"
            },
            tr: {
                name: "Vox Sineması",
                shortDescription: "Şehir merkezinde tarihi bir binada yer alan, modern filmler sunan sinema.",
                description: "Şehrin kalbinde, tarihi bir binada yer alan bu sinema, Fransızca veya orijinal versiyonlarında en yeni film yapımlarını sunan yedi salona sahiptir.",
                location: "17 Rue des Francs-Bourgeois"
            }
        }
    }
];
