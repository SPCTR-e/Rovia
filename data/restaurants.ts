export const RESTAURANTS = [
    {
        id: 'drunky-stork',
        name: 'The Drunky Stork Social Club',
        shortDescription: 'Lively, trendy atmosphere in a former bank.',
        description: 'This spot is perfect if you want a lively, trendy atmosphere. It is housed in a former bank with high ceilings and a vintage, eclectic decor that feels very "London pub meets Alsatian chic."',
        image: require('@/assets/images/restaurants/drunky-stork.jpg'),
        location: '24 Rue du Vieux-Marché-aux-Vins',
        coordinates: { latitude: 48.58391149125845, longitude: 7.742376614404617 },
        category: 'restaurants',
        tags: ['restaurant', 'bar', 'international'],
        reservationUrl: 'https://www.thedrunkystorksocialclub.com/reservation',
        translations: {
            tr: {
                name: 'The Drunky Stork Social Club',
                shortDescription: 'Eski bir bankada canlı ve trend bir atmosfer.',
                description: 'Canlı ve trend bir atmosfer arıyorsanız burası tam size göre. Yüksek tavanlı eski bir bankada yer alan mekan, "Londra barı Alsas şıklığıyla buluşuyor" hissi veren vintage ve eklektik bir dekorasyona sahip.',
                location: '24 Rue du Vieux-Marché-aux-Vins, Strazburg'
            },
            fr: {
                name: 'The Drunky Stork Social Club',
                shortDescription: 'Atmosphère animée et branchée dans une ancienne banque.',
                description: 'Cet endroit est parfait si vous voulez une atmosphère vivante et tendance. Il est installé dans une ancienne banque avec de hauts plafonds et un décor vintage et éclectique.',
                location: '24 Rue du Vieux-Marché-aux-Vins'
            },
            de: {
                name: 'The Drunky Stork Social Club',
                shortDescription: 'Lebhafte, trendige Atmosphäre in einer ehemaligen Bank.',
                description: 'Dieser Ort ist perfekt, wenn Sie eine lebhafte, trendige Atmosphäre suchen. Er befindet sich in einer ehemaligen Bank mit hohen Decken und einem eklektischen Vintage-Dekor.',
                location: '24 Rue du Vieux-Marché-aux-Vins'
            },
            es: {
                name: 'The Drunky Stork Social Club',
                shortDescription: 'Ambiente animado y moderno en un antiguo banco.',
                description: 'Este lugar es perfecto si quieres un ambiente animado y de moda. Está ubicado en un antiguo banco con techos altos y una decoración vintage y ecléctica.',
                location: '24 Rue du Vieux-Marché-aux-Vins'
            },
            it: {
                name: 'The Drunky Stork Social Club',
                shortDescription: 'Atmosfera vivace e alla moda in un\'ex banca.',
                description: 'Questo posto è perfetto se desideri un\'atmosfera vivace e di tendenza. È ospitato in un\'ex banca con soffitti alti e un arredamento vintage ed eclettico.',
                location: '24 Rue du Vieux-Marché-aux-Vins'
            }
        }
    },
    {
        id: 'madame-julia',
        name: 'Madame Julia',
        shortDescription: 'Cozy coffee shop style brunch favorite.',
        description: 'For a more relaxed, "coffee shop" style brunch, this is a local favorite. It feels like a cozy living room with its brick walls and comfortable seating, making it ideal for a slow morning.',
        image: require('@/assets/images/restaurants/madame-julia.jpg'),
        location: '34 Rue de la Première Armée',
        coordinates: { latitude: 48.576064425055854, longitude: 7.752602579270074 },
        category: 'restaurants',
        tags: ['restaurant', 'international', 'pastry'],
        translations: {
            tr: {
                name: 'Madame Julia',
                shortDescription: 'Rahat kahve dükkanı tarzı brunch favorisi.',
                description: 'Daha rahat, "kahve dükkanı" tarzı bir brunch için burası yerel bir favori. Tuğla duvarları ve konforlu koltuklarıyla kendinizi evinizin oturma odasında gibi hissedeceğiniz, yavaş bir sabah için ideal bir mekan.',
                location: '34 Rue de la Première Armée, Strazburg'
            },
            fr: {
                name: 'Madame Julia',
                shortDescription: 'Brunch favori dans une ambiance coffee shop cosy.',
                description: 'Pour un brunch plus décontracté, c\'est un favori local. On s\'y sent comme dans un salon confortable avec ses murs en briques.',
                location: '34 Rue de la Première Armée'
            },
            de: {
                name: 'Madame Julia',
                shortDescription: 'Gemütlicher Brunch-Favorit im Coffee-Shop-Stil.',
                description: 'Für einen entspannten Brunch im "Coffee-Shop"-Stil ist dies ein lokaler Favorit. Mit seinen Backsteinwänden fühlt es sich an wie ein gemütliches Wohnzimmer.',
                location: '34 Rue de la Première Armée'
            },
            es: {
                name: 'Madame Julia',
                shortDescription: 'Favorito para el brunch al estilo de una acogedora cafetería.',
                description: 'Para un brunch más relajado, al estilo "cafetería", este es el favorito local. Se siente como una acogedora sala de estar.',
                location: '34 Rue de la Première Armée'
            },
            it: {
                name: 'Madame Julia',
                shortDescription: 'Favorito per il brunch in stile accogliente caffetteria.',
                description: 'Per un brunch più rilassato, in stile "coffee shop", questo è uno dei preferiti dai locali. Sembra un accogliente soggiorno.',
                location: '34 Rue de la Première Armée'
            }
        }
    },
    {
        id: 'bistrot-chocolat',
        name: 'Bistrot & Chocolat',
        shortDescription: 'Vegetarian brunch and legendary hot chocolate.',
        description: 'A fantastic option if you have dietary restrictions or just love high-quality vegetarian food. Located near the cathedral, it proves that meat-free Alsatian food can be delicious.',
        image: require('@/assets/images/restaurants/bistrot-chocolat.jpg'),
        location: '8 rue de la Râpe',
        coordinates: { latitude: 48.58148676840146, longitude: 7.752977741652277 },
        category: 'restaurants',
        tags: ['restaurant', 'international', 'pastry'],
        translations: {
            tr: {
                name: 'Bistrot & Chocolat',
                shortDescription: 'Vejetaryen brunch ve efsanevi sıcak çikolata.',
                description: 'Diyet kısıtlamalarınız varsa veya sadece yüksek kaliteli vejetaryen yemekleri seviyorsanız harika bir seçenek. Katedralin yakınında bulunan bu mekan, etsiz Alsas yemeklerinin de ne kadar lezzetli olabileceğini kanıtlıyor.',
                location: '8 rue de la Râpe, Strazburg'
            },
            fr: {
                name: 'Bistrot & Chocolat',
                shortDescription: 'Brunch végétarien et chocolat chaud légendaire.',
                description: 'Une option fantastique si vous aimez la cuisine végétarienne de haute qualité. Situé près de la cathédrale.',
                location: '8 rue de la Râpe'
            },
            de: {
                name: 'Bistrot & Chocolat',
                shortDescription: 'Vegetarischer Brunch und legendäre heiße Schokolade.',
                description: 'Eine fantastische Option, wenn Sie hochwertige vegetarische Küche lieben. In der Nähe des Münsters gelegen.',
                location: '8 rue de la Râpe'
            },
            es: {
                name: 'Bistrot & Chocolat',
                shortDescription: 'Brunch vegetariano y chocolate caliente legendario.',
                description: 'Una opción fantástica si te gusta la comida vegetariana de alta calidad. Ubicado cerca de la catedral.',
                location: '8 rue de la Râpe'
            },
            it: {
                name: 'Bistrot & Chocolat',
                shortDescription: 'Brunch vegetariano e leggendaria cioccolata calda.',
                description: 'Una fantastica opzione se ami il cibo vegetariano di alta qualità. Situato vicino alla cattedrale.',
                location: '8 rue de la Râpe'
            }
        }
    },
    {
        id: 'pont-corbeau',
        name: 'Restaurant Au Pont Corbeau',
        shortDescription: 'One of the most authentic Winstubs for locals.',
        description: 'This is widely considered by locals to be one of the most authentic Winstubs in the city. It avoids the "tourist trap" feel of some other central spots and focuses purely on quality.',
        image: require('@/assets/images/restaurants/pont-corbeau.jpg'),
        location: '21 Quai Saint-Nicolas',
        coordinates: { latitude: 48.57897167437625, longitude: 7.750302856674601 },
        category: 'restaurants',
        tags: ['restaurant', 'traditional'],
        phoneNumber: '+33 3 88 35 60 68',
        translations: {
            tr: {
                name: 'Au Pont Corbeau Restoranı',
                shortDescription: 'Yerel halk için en otantik Winstub\'lardan biri.',
                description: 'Burası yerel halk tarafından şehirdeki en otantik Winstub\'lardan biri olarak kabul edilir. Bazı diğer merkezi mekanların "turist tuzağı" hissinden kaçınır ve tamamen kaliteye odaklanır.',
                location: '21 Quai Saint-Nicolas, Strazburg'
            },
            fr: {
                name: 'Restaurant Au Pont Corbeau',
                shortDescription: 'L\'une des Winstubs les plus authentiques selon les locaux.',
                description: 'Considérée par les Strasbourgeois comme l\'une des adresses les plus sincères. Elle évite le côté "piège à touristes" pour se concentrer sur la qualité.',
                location: '21 Quai Saint-Nicolas'
            },
            de: {
                name: 'Restaurant Au Pont Corbeau',
                shortDescription: 'Eines der authentischsten Winstubs für Einheimische.',
                description: 'Dies wird von den Einheimischen allgemein als eines der authentischsten Winstubs der Stadt angesehen. Es vermeidet das Gefühl einer „Touristenfalle“.',
                location: '21 Quai Saint-Nicolas'
            },
            es: {
                name: 'Restaurant Au Pont Corbeau',
                shortDescription: 'Uno de los Winstubs más auténticos para los lugareños.',
                description: 'Considerado por los lugareños como uno de los Winstubs más auténticos de la ciudad. Evita la sensación de "trampa para turistas".',
                location: '21 Quai Saint-Nicolas'
            },
            it: {
                name: 'Restaurant Au Pont Corbeau',
                shortDescription: 'Uno dei Winstub più autentici per i locali.',
                description: 'Questo è ampiamente considerato dai locali come uno dei Winstub più autentici della città.',
                location: '21 Quai Saint-Nicolas'
            }
        }
    },
    {
        id: 'tire-bouchon',
        name: 'Le Tire-Bouchon',
        shortDescription: 'Charming traditional restaurant near the cathedral.',
        description: 'Located in a prime spot near the cathedral, this restaurant manages to be accessible while maintaining high standards for traditional cuisine.',
        image: require('@/assets/images/restaurants/tire-bouchon.png'),
        location: '5 Rue des Tailleurs de Pierre',
        coordinates: { latitude: 48.580603951556775, longitude: 7.75070110339707 },
        category: 'restaurants',
        tags: ['restaurant', 'traditional'],
        phoneNumber: '+33 3 88 22 16 32',
        reservationUrl: 'https://www.letirebouchon.fr/reserver',
        translations: {
            tr: {
                name: 'Le Tire-Bouchon',
                shortDescription: 'Katedralin yanında büyüleyici geleneksel restoran.',
                description: 'Katedralin hemen yanındaki harika konumuyla bu restoran, geleneksel mutfak için yüksek standartlarını korurken aynı zamanda erişilebilir olmayı başarıyor.',
                location: '5 Rue des Tailleurs de Pierre, Strazburg'
            },
            fr: {
                name: 'Le Tire-Bouchon',
                shortDescription: 'Restaurant traditionnel charmant près de la cathédrale.',
                description: 'Situé dans un emplacement privilégié, ce restaurant propose une cuisine traditionnelle de haute qualité.',
                location: '5 Rue des Tailleurs de Pierre'
            },
            de: {
                name: 'Le Tire-Bouchon',
                shortDescription: 'Charmantes traditionelles Restaurant in der Nähe des Münsters.',
                description: 'In bester Lage in der Nähe des Münsters gelegen, bietet dieses Restaurant traditionelle Küche auf hohem Niveau.',
                location: '5 Rue des Tailleurs de Pierre'
            },
            es: {
                name: 'Le Tire-Bouchon',
                shortDescription: 'Encantador restaurante tradicional cerca de la catedral.',
                description: 'Ubicado en un lugar privilegiado cerca de la catedral, este restaurante mantiene altos estándares para la cocina tradicional.',
                location: '5 Rue des Tailleurs de Pierre'
            },
            it: {
                name: 'Le Tire-Bouchon',
                shortDescription: 'Incantevole ristorante tradizionale vicino alla cattedrale.',
                description: 'Situato in una posizione privilegiata vicino alla cattedrale, questo ristorante mantiene elevati standard per la cucina tradizionale.',
                location: '5 Rue des Tailleurs de Pierre'
            }
        }
    },
    {
        id: 'maison-kammerzell',
        name: 'Maison Kammerzell',
        shortDescription: 'Historical monument dining at its finest.',
        description: 'You cannot talk about historic dining in Strasbourg without this place. Built in 1427, the building itself is a masterpiece of Gothic architecture and arguably the most beautiful house in the city.',
        image: require('@/assets/images/restaurants/maison-kammerzell.jpg'),
        location: '16 Place de la Cathédrale',
        coordinates: { latitude: 48.581925042051445, longitude: 7.749813091103637 },
        category: 'restaurants',
        tags: ['restaurant', 'traditional'],
        reservationUrl: 'https://www.maison-kammerzell.com/reservation',
        phoneNumber: '+33 3 88 32 42 14',
        translations: {
            tr: {
                name: 'Maison Kammerzell',
                shortDescription: 'Tarihi bir anıtta en iyi akşam yemeği deneyimi.',
                description: 'Strazburg\'daki tarihi restoranlardan bahsederken burayı atlayamazsınız. 1427\'de inşa edilen bina, Gotik mimarinin bir şaheseridir ve muhtemelen şehrin en güzel evidir.',
                location: '16 Place de la Cathédrale, Strazburg'
            },
            fr: {
                name: 'Maison Kammerzell',
                shortDescription: 'Dîner dans un monument historique.',
                description: 'Érigée en 1427, c\'est sans doute la plus belle maison de la ville, un chef-d\'œuvre d\'architecture gothique tardive.',
                location: '16 Place de la Cathédrale'
            },
            de: {
                name: 'Haus Kammerzell',
                shortDescription: 'Speisen in einem historischen Denkmal.',
                description: 'Erbaut im Jahr 1427, ist das Gebäude selbst ein Meisterwerk der spätgotischen Architektur und wohl das schönste Haus der Stadt.',
                location: '16 Münsterplatz'
            },
            es: {
                name: 'Casa Kammerzell',
                shortDescription: 'Cena en un monumento histórico de primer nivel.',
                description: 'Construido en 1427, el edificio en sí es una obra maestra de la arquitectura gótica y posiblemente la casa más hermosa de la ciudad.',
                location: '16 Place de la Cathédrale'
            },
            it: {
                name: 'Maison Kammerzell',
                shortDescription: 'Cena in un monumento storico d\'eccellenza.',
                description: 'Costruito nel 1427, l\'edificio stesso è un capolavoro dell\'architettura gotica e probabilmente la casa più bella della città.',
                location: '16 Place de la Cathédrale'
            }
        }
    },
    {
        id: 'petite-alsace',
        name: 'Restaurant La Petite Alsace',
        shortDescription: 'Postcard-perfect charm in Petite France.',
        description: 'Nestled in the heart of the picturesque Petite France district, this restaurant is a postcard-perfect example of Alsatian charm with its half-timbered facade and red-checkered tablecloths. It is the ideal spot to enjoy generous classics like choucroute garnie or baeckeoffe in a rustic, authentic setting that truly breathes local tradition.',
        image: require('@/assets/images/restaurants/petite-alsace.jpg'),
        location: '23 Rue du Bain-aux-Plantes',
        coordinates: { latitude: 48.581629299183746, longitude: 7.741587839956232 },
        category: 'restaurants',
        tags: ['restaurant', 'traditional'],
        phoneNumber: '+33 3 88 22 04 05',
        translations: {
            tr: {
                name: 'La Petite Alsace Restoranı',
                shortDescription: 'Petite France\'da kartpostal gibi bir cazibe.',
                description: 'Pitoresk Petite France bölgesinin kalbinde yer alan bu restoran, yarı ahşap cephesi ve kırmızı kareli masa örtüleri ile Alsas cazibesinin kartpostal gibi bir örneğidir. Choucroute garnie veya baeckeoffe gibi cömert klasikleri, yerel geleneği gerçekten hissettiren rustik ve otantik bir ortamda denemek için ideal bir noktadır.',
                location: '23 Rue du Bain-aux-Plantes, Strazburg'
            },
            fr: {
                name: 'Restaurant La Petite Alsace',
                shortDescription: 'Charme de carte postale à la Petite France.',
                description: 'Au cœur de la Petite France, c\'est l\'endroit idéal pour déguster des classiques comme la choucroute ou le baeckeoffe.',
                location: '23 Rue du Bain-aux-Plantes'
            },
            de: {
                name: 'Restaurant La Petite Alsace',
                shortDescription: 'Postkarten-Charm in Petite France.',
                description: 'Im Herzen des malerischen Viertels Petite France gelegen, ist dieses Restaurant ein perfektes Beispiel für elsässischen Charme.',
                location: '23 Rue du Bain-aux-Plantes'
            },
            es: {
                name: 'Restaurante La Petite Alsace',
                shortDescription: 'Encanto de postal en Petite France.',
                description: 'En el corazón del pintoresco distrito de Petite France, este restaurante es un ejemplo perfecto del encanto alsaciano.',
                location: '23 Rue du Bain-aux-Plantes'
            },
            it: {
                name: 'Ristorante La Petite Alsace',
                shortDescription: 'Fascino da cartolina nella Petite France.',
                description: 'Nel cuore del pittoresco quartiere di Petite France, questo ristorante è un esempio perfetto di fascino alsaziano.',
                location: '23 Rue du Bain-aux-Plantes'
            }
        }
    },
    {
        id: 'le-vintage',
        name: 'Brasserie Le Vintage',
        shortDescription: 'Retro-chic decor and local favorite.',
        description: 'This establishment stands out with its retro-chic decor and warm atmosphere that strikes a balance between intimate and relaxed. A favorite among locals, it is the perfect place to savor excellent tartes flambées with thin, crispy crusts or enjoy a varied brasserie menu in a polished setting.',
        image: require('@/assets/images/restaurants/le-vintage.jpg'),
        location: '15 Rue des Serruriers',
        coordinates: { latitude: 48.580315931238324, longitude: 7.746479945972407 },
        category: 'restaurants',
        tags: ['restaurant', 'bar', 'traditional'],
        reservationUrl: 'https://www.thefork.fr/restaurant/le-vintage-r423365',
        phoneNumber: '+33 9 83 63 49 42',
        translations: {
            tr: {
                name: 'Brasserie Le Vintage',
                shortDescription: 'Retro-şık dekorasyon ve yerel favori.',
                description: 'Bu işletme, retro-şık dekoru ve samimi ile rahat arasında denge kuran sıcak atmosferiyle öne çıkıyor. Yerel halkın favorisi olan mekan, ince ve çıtır hamurlu mükemmel tartes flambées\'lerin tadını çıkarmak veya şık bir ortamda çeşitli brasserie menüsünün keyfini sürmek için mükemmel bir yer.',
                location: '15 Rue des Serruriers, Strazburg'
            },
            fr: {
                name: 'Brasserie Le Vintage',
                shortDescription: 'Décor rétro-chic et favori des locaux.',
                description: 'Réputé pour ses tartes flambées à la pâte fine et croustillante dans un cadre poli et chaleureux.',
                location: '15 Rue des Serruriers'
            },
            de: {
                name: 'Brasserie Le Vintage',
                shortDescription: 'Retro-schickes Dekor und lokaler Favorit.',
                description: 'Dieses Lokal besticht durch sein retro-schickes Dekor. Ein Favorit unter den Einheimischen für exzellente Flammkuchen.',
                location: '15 Rue des Serruriers'
            },
            es: {
                name: 'Brasserie Le Vintage',
                shortDescription: 'Decoración retro-chic y favorito local.',
                description: 'Este establecimiento destaca por su decoración retro-chic. Un favorito entre los lugareños para saborear excelentes tartes flambées.',
                location: '15 Rue des Serruriers'
            },
            it: {
                name: 'Brasserie Le Vintage',
                shortDescription: 'Arredamento retrò-chic e favorito dai locali.',
                description: 'Questo locale si distingue per il suo arredamento retrò-chic. Uno dei preferiti dai locali per gustare eccellenti tartes flambées.',
                location: '15 Rue des Serruriers'
            }
        }
    },
    {
        id: 'la_hache',
        name: 'La Hache',
        shortDescription: 'Elegant bistro with refined market cuisine.',
        description: 'This elegant bistro, situated near the Old Customs House (Ancienne Douane), offers refined market cuisine in a lively and stylish environment. Far from the rustic vibe of traditional Winstubs, people come here for revisited "canaille" dishes like roasted bone marrow, pâté en croûte, or premium cuts of beef, making it perfect for a modern, gourmet meal.',
        image: require('@/assets/images/restaurants/la-hache.jpg'),
        location: '11 Rue de la Douane',
        coordinates: { latitude: 48.579481569836005, longitude: 7.749187933893192 },
        category: 'restaurants',
        tags: ['restaurant', 'international'],
        phoneNumber: '+33 3 88 32 34 32',
        reservationUrl: 'https://www.la-hache.com/',
        translations: {
            tr: {
                name: 'La Hache',
                shortDescription: 'Rafine pazar mutfağına sahip zarif bistro.',
                description: 'Eski Gümrük Binası\'nın (Ancienne Douane) yakınında bulunan bu zarif bistro, canlı ve şık bir ortamda rafine pazar mutfağı sunuyor. Geleneksel Winstub\'ların rustik havasından uzak olan bu mekana insanlar, kemik iliği veya özel kesim biftekler gibi modern ve gurme bir öğün için geliyor.',
                location: '11 Rue de la Douane, Strazburg'
            },
            fr: {
                name: 'La Hache',
                shortDescription: 'Bistro élégant avec une cuisine de marché raffinée.',
                description: 'Cet élégant bistro propose une cuisine de marché raffinée dans un environnement animé et élégant.',
                location: '11 Rue de la Douane'
            },
            de: {
                name: 'La Hache',
                shortDescription: 'Elegantes Bistro mit raffinierter Marktküche.',
                description: 'Dieses elegante Bistro bietet raffinierte Marktküche in einem lebhaften und stilvollen Umfeld.',
                location: '11 Rue de la Douane'
            },
            es: {
                name: 'La Hache',
                shortDescription: 'Bistró elegante con refinada cocina de mercado.',
                description: 'Este elegante bistró ofrece una refinada cocina de mercado en un ambiente animado y elegante.',
                location: '11 Rue de la Douane'
            },
            it: {
                name: 'La Hache',
                shortDescription: 'Elegante bistrot con raffinata cucina di mercato.',
                description: 'Questo elegante bistrot offre una raffinata cucina di mercato in un ambiente vivace ed elegante.',
                location: '11 Rue de la Douane'
            }
        }
    },
    {
        id: 'le-gruber',
        name: 'Le Gruber',
        shortDescription: '16th-century temple of Alsatian gastronomy.',
        description: 'Housed in a magnificent listed building from the 16th century just steps from the cathedral, Le Gruber impresses with its grand scale and decor filled with paintings and period objects. It is a true temple of Alsatian gastronomy where you can enjoy typical dishes in a setting that literally immerses you in Strasbourg\'s history.',
        image: require('@/assets/images/restaurants/le-gruber.jpg'),
        location: '11 Rue du Maroquin',
        coordinates: { latitude: 48.5808019848284, longitude: 7.750513470003923 },
        category: 'restaurants',
        tags: ['restaurant', 'traditional'],
        reservationUrl: 'https://bookings.zenchef.com/results?rid=95052&fullscreen&lang=fr',
        phoneNumber: '+33 3 88 32 23 11',
        translations: {
            tr: {
                name: 'Le Gruber',
                shortDescription: 'Alsas gastronomisinin 16. yüzyıldan kalma tapınağı.',
                description: 'Katedralin sadece birkaç adım ötesinde, 16. yüzyıldan kalma görkemli ve tescilli bir binada yer alan Le Gruber, büyük ölçeği ve antika nesnelerle dolu dekoruyla etkileyicidir. Sizi kelimenin tam anlamıyla Strazburg tarihine çeken bir ortamda tipik Alsas yemeklerinin tadını çıkarabileceğiniz gerçek bir gastronomi tapınağıdır.',
                location: '11 Rue du Maroquin, Strazburg'
            },
            fr: {
                name: 'Le Gruber',
                shortDescription: 'Temple de la gastronomie alsacienne du 16ème siècle.',
                description: 'Installé dans un magnifique bâtiment classé du XVIe siècle à deux pas de la cathédrale.',
                location: '11 Rue du Maroquin'
            },
            de: {
                name: 'Le Gruber',
                shortDescription: 'Tempel der elsässischen Gastronomie aus dem 16. Jahrhundert.',
                description: 'In einem prächtigen denkmalgeschützten Gebäude aus dem 16. Jahrhundert gelegen, nur wenige Schritte vom Münster entfernt.',
                location: '11 Rue du Maroquin'
            },
            es: {
                name: 'Le Gruber',
                shortDescription: 'Templo de la gastronomía alsaciana del siglo XVI.',
                description: 'Ubicado en un magnífico edificio catalogado del siglo XVI a pocos pasos de la catedral.',
                location: '11 Rue du Maroquin'
            },
            it: {
                name: 'Le Gruber',
                shortDescription: 'Tempio della gastronomia alsaziana del XVI secolo.',
                description: 'Situato in un magnifico edificio vincolato del XVI secolo a pochi passi dalla cattedrale.',
                location: '11 Rue du Maroquin'
            }
        }
    },
    {
        id: 'au-brasseur',
        name: 'Au Brasseur',
        shortDescription: 'Artisanal microbrewery with lively atmosphere.',
        description: 'This artisanal microbrewery is the go-to spot for a lively and convivial night out with friends. Famous for its house-brewed beers and unbeatable prices on tartes flambées (especially during Happy Hour), the atmosphere is always festive, boisterous, and authentically Strasbourgeois.',
        image: require('@/assets/images/restaurants/au-brasseur.jpg'),
        location: '22 Rue des Veaux',
        coordinates: { latitude: 48.58262125261885, longitude: 7.755496791128475 },
        category: 'restaurants',
        tags: ['restaurant', 'bar', 'traditional'],
        phoneNumber: '+33 3 88 36 12 13',
        translations: {
            tr: {
                name: 'Au Brasseur',
                shortDescription: 'Canlı atmosfere sahip butik bira fabrikası.',
                description: 'Bu butik bira fabrikası (microbrewery), arkadaşlarla canlı ve samimi bir gece geçirmek için gidilecek yerdir. Kendi üretimi olan biraları ve tartes flambées üzerindeki rakipsiz fiyatlarıyla (özellikle Happy Hour sırasında) tanınır. Atmosferi her zaman şenlikli ve otantik bir Strazburg havasındadır.',
                location: '22 Rue des Veaux, Strazburg'
            },
            fr: {
                name: 'Au Brasseur',
                shortDescription: 'Microbrasserie artisanale à l\'atmosphère animée.',
                description: 'Cette microbrasserie artisanale est l\'endroit idéal pour une soirée animée et conviviale entre amis. Célèbre pour ses bières brassées maison.',
                location: '22 Rue des Veaux'
            },
            de: {
                name: 'Au Brasseur',
                shortDescription: 'Handwerkliche Mikrobrauerei mit lebhafter Atmosphäre.',
                description: 'Diese handwerkliche Mikrobrauerei ist der ideale Ort für einen lebhaften und geselligen Abend mit Freunden.',
                location: '22 Rue des Veaux'
            },
            es: {
                name: 'Au Brasseur',
                shortDescription: 'Microcervecería artesanal con ambiente animado.',
                description: 'Esta microcervecería artesanal es el lugar ideal para una noche animada y de convivencia con amigos.',
                location: '22 Rue des Veaux'
            },
            it: {
                name: 'Au Brasseur',
                shortDescription: 'Microbirrificio artigianale con atmosfera vivace.',
                description: 'Questo microbirrificio artigianale è il posto giusto per una serata vivace e conviviale con gli amici.',
                location: '22 Rue des Veaux'
            }
        }
    },
    {
        id: 'au-cedre',
        name: 'Au Cèdre',
        shortDescription: 'Rich flavors and colorful Lebanese mezze.',
        description: 'Renowned as one of the best Lebanese addresses in the city, this restaurant offers a true culinary escape with its colorful and fragrant mezze. The setting is welcoming and the service attentive, making it the perfect place to share numerous small hot and cold plates and discover the rich flavors of the Levant.',
        image: require('@/assets/images/restaurants/au-cedre.jpg'),
        location: '1 Rue du Saint-Gothard',
        coordinates: { latitude: 48.57893092622192, longitude: 7.756780989329303 },
        category: 'restaurants',
        tags: ['restaurant', 'international'],
        reservationUrl: 'https://au-cedre.com/',
        phoneNumber: '+33 3 88 25 14 69',
        translations: {
            tr: {
                name: 'Au Cèdre',
                shortDescription: 'Zengin lezzetler ve renkli Lübnan mezeleri.',
                description: 'Şehirdeki en iyi Lübnan adreslerinden biri olarak ünlenen bu restoran, renkli ve hoş kokulu mezeleriyle gerçek bir mutfak kaçamağı sunuyor. Ortamı sıcak ve servisi özenlidir; bu da burayı sayısız sıcak ve soğuk tabağı paylaşmak ve Doğu\'nun zengin lezzetlerini keşfetmek için mükemmel bir yer yapar.',
                location: '1 Rue du Saint-Gothard, Strazburg'
            },
            fr: {
                name: 'Au Cèdre',
                shortDescription: 'Saveurs riches et mezzés libanais colorés.',
                description: 'Réputé comme l\'une des meilleures adresses libanaises de la ville, ce restaurant offre une véritable escapade culinaire.',
                location: '1 Rue du Saint-Gothard'
            },
            de: {
                name: 'Au Cèdre',
                shortDescription: 'Reichhaltige Aromen und farbenfrohe libanesische Mezze.',
                description: 'Dieses Restaurant gilt als eine der besten libanesischen Adressen der Stadt und bietet eine echte kulinarische Flucht.',
                location: '1 Rue du Saint-Gothard'
            },
            es: {
                name: 'Au Cèdre',
                shortDescription: 'Ricos sabores y coloridos mezze libaneses.',
                description: 'Reconocido como una de las mejores direcciones libanesas de la ciudad, este restaurante ofrece una auténtica escapada culinaria.',
                location: '1 Rue du Saint-Gothard'
            },
            it: {
                name: 'Au Cèdre',
                shortDescription: 'Sapori ricchi e colorati mezze libanesi.',
                description: 'Rinomato come uno dei migliori indirizzi libanesi della città, questo ristorante offre una vera fuga culinaria.',
                location: '1 Rue du Saint-Gothard'
            }
        }
    },
    {
        id: 'east-canteen',
        name: 'East Canteen',
        shortDescription: 'Trendy Asian street food canteen.',
        description: 'With its modern and immersive decor, this establishment is a trendy Asian canteen that explores street food from across the continent. From Gyozas and Baos to stir-fried noodle dishes, it is the ideal address for a casual, quick meal packed with exotic flavors in a young and dynamic atmosphere.',
        image: require('@/assets/images/restaurants/east-canteen.jpg'),
        location: '2 Pl. des Orphelins',
        coordinates: { latitude: 48.579155281572596, longitude: 7.754414437438409 },
        category: 'restaurants',
        tags: ['restaurant', 'international'],
        reservationUrl: 'https://eastcanteen.com/',
        translations: {
            tr: {
                name: 'East Canteen',
                shortDescription: 'Trend Asya sokak lezzetleri kantini.',
                description: 'Modern ve sürükleyici dekoruyla bu işletme, kıtanın dört bir yanından sokak yemeklerini keşfeden popüler bir Asya kantinidir. Gyozalar ve Baolardan kızarmış erişte yemeklerine kadar, genç ve dinamik bir atmosferde egzotik lezzetlerle dolu hızlı bir öğün için ideal bir adrestir.',
                location: '2 Pl. des Orphelins, Strazburg'
            },
            fr: {
                name: 'East Canteen',
                shortDescription: 'Cantine de street food asiatique branchée.',
                description: 'Avec son décor moderne et immersif, cet établissement est une cantine asiatique branchée qui explore la street food de tout le continent.',
                location: '2 Pl. des Orphelins'
            },
            de: {
                name: 'East Canteen',
                shortDescription: 'Trendige asiatische Streetfood-Kantine.',
                description: 'Mit seinem modernen und immersiven Dekor ist dieses Lokal eine trendige asiatische Kantine, die Streetfood vom ganzen Kontinent erkundet.',
                location: '2 Pl. des Orphelins'
            },
            es: {
                name: 'East Canteen',
                shortDescription: 'Cantina de comida callejera asiática de moda.',
                description: 'Con su decoración moderna e inmersiva, este establecimiento es una cantina asiática de moda que explora la comida callejera de todo el continente.',
                location: '2 Pl. des Orphelins'
            },
            it: {
                name: 'East Canteen',
                shortDescription: 'Mensa trendy di street food asiatico.',
                description: 'Con il suo arredamento moderno e coinvolgente, questo locale è una mensa asiatica alla moda che esplora lo street food di tutto il continente.',
                location: '2 Pl. des Orphelins'
            }
        }
    },
    {
        id: 'aygui',
        name: 'AYGUI',
        shortDescription: 'Comforting Armenian and Georgian specialties.',
        description: 'This restaurant is a rare gem that transports you to the Caucasus with its Armenian and Georgian specialties. In a cozy and immersive setting, you can enjoy comforting dishes like Khachapuri (cheese-filled bread) or Khinkali (giant dumplings), offering a unique and warm culinary discovery.',
        image: require('@/assets/images/restaurants/aygui.jpg'),
        location: '5 Rue du Faubourg-de-Saverne',
        coordinates: { latitude: 48.584739477495084, longitude: 7.740538417045209 },
        category: 'restaurants',
        tags: ['restaurant', 'international'],
        reservationUrl: 'https://gusty.app/booking/actif-s?iframe=oui&source=SITE',
        phoneNumber: '+33 9 85 02 64 91',
        translations: {
            tr: {
                name: 'AYGUI',
                shortDescription: 'Rahatlatıcı Ermeni ve Gürcü spesiyaliteleri.',
                description: 'Burası sizi Ermeni ve Gürcü spesiyaliteleriyle Kafkasya\'ya götüren nadir pırlantalardan biridir. Samimi bir ortamda, Khachapuri (peynir dolgulu ekmek) veya Khinkali (dev mantılar) gibi rahatlatıcı yemeklerin tadını çıkarabilir, benzersiz ve sıcak bir mutfak keşfi yaşayabilirsiniz.',
                location: '5 Rue du Faubourg-de-Saverne, Strazburg'
            },
            fr: {
                name: 'AYGUI',
                shortDescription: 'Spécialités arméniennes et géorgiennes réconfortantes.',
                description: 'Ce restaurant est une perle rare qui vous transporte dans le Caucase avec ses spécialités arméniennes et géorgiennes.',
                location: '5 Rue du Faubourg-de-Saverne'
            },
            de: {
                name: 'AYGUI',
                shortDescription: 'Wohltuende armenische und georgische Spezialitäten.',
                description: 'Dieses Restaurant ist ein seltener Schatz, der Sie mit seinen armenischen und georgischen Spezialitäten in den Kaukasus entführt.',
                location: '5 Rue du Faubourg-de-Saverne'
            },
            es: {
                name: 'AYGUI',
                shortDescription: 'Reconfortantes especialidades armenias y georgianas.',
                description: 'Este restaurante es una joya rara que te transporta al Cáucaso con sus especialidades armenias y georgianas.',
                location: '5 Rue du Faubourg-de-Saverne'
            },
            it: {
                name: 'AYGUI',
                shortDescription: 'Confortanti specialità armene e georgiane.',
                description: 'Questo ristorante è una perla rara che ti trasporta nel Caucaso con le sue specialità armene e georgiane.',
                location: '5 Rue du Faubourg-de-Saverne'
            }
        }
    },
    {
        id: 'cinnamon',
        name: 'Cinnamon',
        shortDescription: 'Refined modern Indian aromatic curries.',
        description: 'Located near the Krutenau district, Cinnamon revisits Indian cuisine with a touch of modernity and elegance. Stepping away from the usual clichés, the restaurant serves refined, aromatic curries and mastered tandoori grills, all presented in a contemporary and stylish setting that appeals to a discerning clientele.',
        image: require('@/assets/images/restaurants/cinnamon.jpg'),
        location: '15 Rue de la Division Leclerc',
        coordinates: { latitude: 48.57969762204584, longitude: 7.748043863292592 },
        category: 'restaurants',
        tags: ['restaurant', 'international'],
        reservationUrl: 'https://cinnamonrestaurant.fr/reservation/',
        phoneNumber: '+33 3 88 32 89 79',
        translations: {
            tr: {
                name: 'Cinnamon',
                shortDescription: 'Rafine modern Hint aromatik körileri.',
                description: 'Krutenau bölgesinin yakınında bulunan Cinnamon, Hint mutfağını modernlik ve zarafetle yeniden yorumluyor. Alışılagelmiş klişelerden uzaklaşan restoran, rafine köriler ve tandoori ızgaralar sunuyor; her şey modern ve şık bir ortamda sunuluyor.',
                location: '15 Rue de la Division Leclerc, Strazburg'
            },
            fr: {
                name: 'Cinnamon',
                shortDescription: 'Currys aromatiques indiens modernes et raffinés.',
                description: 'Situé près du quartier de la Krutenau, Cinnamon revisite la cuisine indienne avec une touche de modernité.',
                location: '15 Rue de la Division Leclerc'
            },
            de: {
                name: 'Cinnamon',
                shortDescription: 'Raffinierte moderne indische aromatische Currys.',
                description: 'In der Nähe des Viertels Krutenau gelegen, interpretiert Cinnamon die indische Küche mit einem Hauch von Modernität neu.',
                location: '15 Rue de la Division Leclerc'
            },
            es: {
                name: 'Cinnamon',
                shortDescription: 'Refinados y modernos currys aromáticos indios.',
                description: 'Ubicado cerca del distrito de Krutenau, Cinnamon revisita la cocina india con un toque de modernidad.',
                location: '15 Rue de la Division Leclerc'
            },
            it: {
                name: 'Cinnamon',
                shortDescription: 'Raffinati e moderni curry aromatici indiani.',
                description: 'Situato vicino al quartiere Krutenau, Cinnamon rivisita la cucina indiana con un tocco di modernità.',
                location: '15 Rue de la Division Leclerc'
            }
        }
    }
];
