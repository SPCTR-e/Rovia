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
            zh: {
                name: 'Batorama 游船之旅',
                shortDescription: '从伊尔河的视角欣赏城市。',
                location: '鱼市广场'
            },
            ja: {
                name: 'バトラマ運河クルーズ',
                shortDescription: 'イル川からの視点で街を眺める。',
                location: '魚市場広場'
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
            zh: {
                name: '大教堂平台',
                shortDescription: '从 66 米高处俯瞰全景。',
                location: '大教堂广场'
            },
            ja: {
                name: '大聖堂プラットフォーム',
                shortDescription: '高さ66メートルからのパノラマビュー。',
                location: 'カテドラル広場'
            }
        }
    },
    {
        id: 'wine-cellar',
        name: 'Historic Wine Cellar',
        shortDescription: 'Visit the 1395 barrel in the Hospital.',
        image: require('@/assets/images/sights/palais-rohan.jpg'), // Placeholder
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
            }
        }
    }
];
