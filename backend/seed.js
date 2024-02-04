/* eslint-disable no-await-in-loop */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
/* const { faker } = require("@faker-js/faker"); */

// Import database client

const database = require("./database/client");

const env = process.env.APP_ENV;

const imageBaseUrl =
  env === "production"
    ? `https://neomuse.creativebrain.fr/upload`
    : `http://localhost:3310/upload`;

const artists = [
  {
    artist_name: "K.",
    firstname: "Kate",
    lastname: "JONES",
    date_registration: new Date(),
    thumbnail: `${imageBaseUrl}/woman2.jpg`,
    biography:
      "Kate Jones est une artiste contemporaine dont les œuvres envoûtantes capturent l'essence même de la mystique et de l'éthéré. Originaire de Londres, elle a été initiée à l'art dès son plus jeune âge et a développé une fascination pour les mondes imaginaires et spirituels. Inspirée par les traditions ésotériques, elle crée des peintures qui évoquent un sentiment de mystère et de merveilleux. Ses œuvres, caractérisées par leur palette de couleurs douces, leurs motifs symboliques et leur atmosphère onirique, invitent les spectateurs à plonger dans un univers de rêve et de magie.",
  },
  {
    artist_name: "S. Durandel",
    firstname: "Simone",
    lastname: "DURAND-LEJEUNE",
    date_registration: new Date(),
    thumbnail: `${imageBaseUrl}/woman1.jpg`,
    biography:
      "Les portraits de Simone Durand-Lejeune se distinguent par leur attention aux détails, leur expression émotionnelle et leur capacité à capturer la personnalité et l'âme de ses sujets. Utilisant des techniques traditionnelles de peinture à l'huile, elle crée des images qui révèlent la beauté et la force des femmes dans toute leur diversité. Des jeunes filles innocentes aux femmes mûres et sages, ses portraits célèbrent la féminité dans toutes ses nuances et ses expressions, invitant les spectateurs à contempler la complexité et la beauté de la condition féminine.",
  },
  {
    artist_name: "Amar S.",
    firstname: "Amar",
    lastname: "SAYED",
    date_registration: new Date(),
    thumbnail: `${imageBaseUrl}/man2.jpg`,
    biography:
      "En tant que photographe, Amar Sayed s'efforce de documenter et de célébrer la richesse et la diversité de la vie indienne, tout en défiant les stéréotypes et les perceptions réductrices souvent associés à son pays d'origine. Son travail continue d'inspirer et de fasciner, invitant les spectateurs à découvrir la beauté et la complexité d'une culture ancienne et vivante à travers le regard unique d'un artiste passionné et engagé.",
  },
  {
    artist_name: "Mystic",
    firstname: "Dok",
    lastname: "MAI",
    date_registration: new Date(),
    thumbnail: `${imageBaseUrl}/man1.jpg`,
    biography:
      "Dok Mai est un photographe thaïlandais dont les images captivantes révèlent la beauté éthérée et la sérénité de la nature. Né dans la province de Chiang Mai, Dok Mai a développé une passion pour la photographie dès son plus jeune âge, explorant les jungles luxuriantes et les paysages pittoresques de sa région natale pour capturer la magie et la splendeur de son environnement naturel. Inspiré par la richesse de la faune et de la flore thaïlandaises, ainsi que par les traditions spirituelles et culturelles de son pays, il utilise son appareil photo pour créer des images qui évoquent un sens profond de la connexion et de l'harmonie avec le monde naturel.",
  },
  {
    artist_name: "Minna",
    firstname: "Min",
    lastname: "WEI",
    date_registration: new Date(),
    thumbnail: `${imageBaseUrl}/woman3.jpg`,
    biography:
      "Min Wei est une artiste chinoise renommée pour ses sculptures qui capturent la beauté et la spiritualité de la figure humaine et du Bouddha. Originaire de Pékin, elle a été profondément influencée par les traditions artistiques et spirituelles de la Chine, ce qui l'a conduit à explorer les possibilités de la sculpture comme moyen d'expression artistique et spirituelle. Inspirée par les enseignements du Bouddha ainsi que par la richesse de la culture chinoise, elle crée des œuvres qui évoquent un sentiment de paix, de sérénité et de transcendance. Ses sculptures, caractérisées par leur grâce et leur élégance, ont été exposées dans des galeries et des temples à travers la Chine et à l'étranger, recevant des éloges pour leur profondeur spirituelle et leur sensibilité artistique.",
  },
  {
    artist_name: "F. Forge",
    firstname: "Fernand",
    lastname: "Martin",
    date_registration: new Date(),
    thumbnail: `${imageBaseUrl}/man3.jpg`,
    biography:
      "Les sculptures de Fernand Martin capturent la force et la fragilité de la forme humaine et animale, offrant un regard contemplatif sur la nature de l'existence. Utilisant des matériaux tels que le bois, la pierre et le bronze, il crée des sculptures qui semblent prendre vie sous ses mains habiles, révélant l'âme et la personnalité de ses sujets avec une finesse et une précision remarquables. Des figures humaines expressives aux représentations réalistes d'animaux sauvages, ses œuvres invitent les spectateurs à contempler la beauté et la complexité du monde naturel qui nous entoure, tout en évoquant un sentiment profond de respect et d'admiration pour la vie dans toutes ses formes.",
  },
];

const users = [
  {
    firstname: "John",
    lastname: "Doe",
    email: "john.doe@wildcode.fr",
    phone: "0612121212",
    adress: "2 rue de l'enfer 95220 Herblay sur Seine",
    password: "123456",
    role: "user",
  },
  {
    firstname: "Rachid",
    lastname: "Mohammedi",
    email: "rachid.mohammedi@wildcode.fr",
    phone: "0613131313",
    adress: "5 rue de l'enfer 75020 Paris",
    password: "123456",
    role: "user",
  },
  {
    firstname: "Tristan",
    lastname: "Haxor",
    email: "tristan.haxor@wildcode.fr",
    phone: "0614141414",
    adress: "7 rue de l'enfer 92110 Clichy",
    password: "123456",
    role: "admin",
  },
  {
    firstname: "Ulysse",
    lastname: "DTX",
    email: "ulysse.dtx@wildcode.fr",
    phone: "0615151515",
    adress: "9 rue de l'enfer 91940 Les Ulis",
    password: "123456",
    role: "user",
  },
  {
    firstname: "Lucie",
    lastname: "Ménage",
    email: "lucie.m@wildcode.fr",
    phone: "0616161616",
    adress: "11 rue de l'enfer 93800 Epniay sur Seine",
    password: "123456",
    role: "user",
  },
  {
    firstname: "Alex",
    lastname: "Kandel",
    email: "alex.kandel@wildcode.fr",
    phone: "0617171717",
    adress: "13 rue de l'enfer 93300 Aubervilliers",
    password: "123456",
    role: "user",
  },
];

const subTechnique = [
  { name: "Aqurelle" },
  { name: "Huile" },
  { name: "gouache" },
];

const artworkTechnique = [
  { name: "Peinture", sub_technique_id: 1 },
  { name: "Photographie", sub_technique_id: 2 },
  { name: "Sculpture", sub_technique_id: 3 },
];
const artwork = [
  {
    title: "Blue eyes",
    description:
      "La peinture présente un portrait envoûtant d'une femme aux yeux d'un bleu clair captivant, révélant une profondeur et une douceur qui semblent transpercer l'âme du spectateur.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 1000,
    dimension_height: 50,
    dimension_width: 30,
    dimension_depth: 3,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/peinture1.jpg`,
    artists_id: 1,
    artwork_technique_id: 1,
  },
  {
    title: "Diana",
    description:
      "La peinture représente avec une aura mystique trois figures féminines énigmatiques, évoquant la puissance et la grâce de la déesse Diana dans un tableau empreint de mystère et de spiritualité.",
    art_theme: "mystique",
    date_creation: new Date(),
    price: 5000,
    dimension_height: 100,
    dimension_width: 85,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/peinture2.jpg`,
    artists_id: 1,
    artwork_technique_id: 1,
  },
  {
    title: "Secret reflect",
    description:
      "Une œuvre introspective qui explore les profondeurs de l'âme humaine.",
    art_theme: "nature",
    date_creation: new Date(),
    price: 3000,
    dimension_height: 90,
    dimension_width: 30,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/peinture3.jpg`,
    artists_id: 1,
    artwork_technique_id: 1,
  },
  {
    title: "Pensive Anaïs",
    description:
      "Un portrait captivant met en scène une femme vue de profil, plongée dans une profonde contemplation, ses traits délicatement esquissés reflétant une pensée profonde et introspective.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 1500,
    dimension_height: 25,
    dimension_width: 15,
    dimension_depth: 3,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/peinture4.jpg`,
    artists_id: 2,
    artwork_technique_id: 1,
  },
  {
    title: "La barette bleue",
    description:
      "Un portrait saisissant présente une femme rousse aux cheveux lâchés, regardant droit devant elle, une barette dorée et bleue ornant ses mèches, capturant ainsi l'éclat et la beauté naturelle de la féminité.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 5000,
    dimension_height: 50,
    dimension_width: 30,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/peinture5.jpg`,
    artists_id: 2,
    artwork_technique_id: 1,
  },
  {
    title: "Le songe",
    description:
      "Le tableau intitulé 'Le Songe' dépeint avec une finesse exquise le portrait d'une femme blonde plongée dans une profonde réflexion, capturant l'instant où ses pensées semblent voyager au-delà du monde matériel vers des horizons mystérieux et insaisissables.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 1500,
    dimension_height: 50,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/peinture6.jpg`,
    artists_id: 2,
    artwork_technique_id: 1,
  },
  {
    title: "Voyage en Amérique",
    description:
      "Une photographie en noir et blanc capturant la façade pittoresque d'une petite ville de l'Ouest américain, où l'histoire se lit dans chaque détail architectural, des enseignes vintage aux façades de bois patiné, évoquant l'essence même de l'Amérique rurale et authentique.",
    art_theme: "paysage",
    date_creation: new Date(),
    price: 3500,
    dimension_height: 30,
    dimension_width: 15,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/photo1.jpg`,
    artists_id: 3,
    artwork_technique_id: 2,
  },
  {
    title: "Voyante",
    description:
      "Une photographie en noir et blanc saisit l'affiche de Madame Adèle, voyante énigmatique, suspendue avec une aura de mystère dans une petite ville de l'Amérique du Nord. Les caractères calligraphiés captivent l'attention des passants, promettant des réponses aux mystères de la vie et de l'avenir, tandis que l'atmosphère rétro évoque un sentiment de curiosité intemporelle et d'anticipation.",
    art_theme: "paysage",
    date_creation: new Date(),
    price: 3500,
    dimension_height: 25,
    dimension_width: 10,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/photo2.jpg`,
    artists_id: 3,
    artwork_technique_id: 2,
  },
  {
    title: "Deux femmes",
    description:
      "Une photographie en noir et blanc immortalise deux femmes déambulant dans une rue emblématique de l'Amérique du Nord.",
    art_theme: "portraits",
    date_creation: new Date(),
    price: 3000,
    dimension_height: 30,
    dimension_width: 30,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/photo3.jpg`,
    artists_id: 3,
    artwork_technique_id: 2,
  },
  {
    title: "Coutume",
    description:
      "Une photo sépia capturant l'élégance intemporelle d'une femme thaïlandaise vêtue d'une robe traditionnelle. Son regard empreint de grâce et de fierté évoque la richesse de la culture thaïlandaise, tandis que les détails exquis de sa tenue traditionnelle transportent le spectateur dans un monde d'histoire et de tradition.",
    art_theme: "portrait",
    date_creation: new Date(),
    price: 3000,
    dimension_height: 45,
    dimension_width: 25,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/photo4.jpg`,
    artists_id: 4,
    artwork_technique_id: 2,
  },
  {
    title: "Ex-votos",
    description:
      "Une photo sépia saisit la beauté mystique des ex-votos du Bouddha disposés dans un temple-grotte en Thaïlande. Les rayons de lumière filtrant à travers les ouvertures rocheuses ajoutent une atmosphère sacrée à cet espace de dévotion, où les fidèles viennent offrir leurs prières et leurs vœux, créant ainsi un lieu de paix et de contemplation dans le sanctuaire intemporel de la grotte.",
    art_theme: "paysage",
    date_creation: new Date(),
    price: 3000,
    dimension_height: 60,
    dimension_width: 15,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/photo5.jpg`,
    artists_id: 4,
    artwork_technique_id: 2,
  },
  {
    title: "Temple",
    description:
      "Une photographie capturant la majesté d'un temple en Thaïlande, avec en toile de fond le grand Bouddha. Le temple, orné de détails architecturaux complexes et de dorures étincelantes, domine le paysage environnant, témoignant de la spiritualité et de la grandeur de la culture thaïlandaise. La silhouette imposante du Bouddha, s'élevant majestueusement au-dessus du temple, incarne la sagesse et la tranquillité, créant une scène empreinte de beauté et de transcendance.",
    art_theme: "paysage",
    date_creation: new Date(),
    price: 3000,
    dimension_height: 60,
    dimension_width: 15,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/photo6.jpg`,
    artists_id: 4,
    artwork_technique_id: 2,
  },
  {
    title: "Horserider",
    description:
      "Une sculpture en terre cuite d'un cavalier chinois antique, monté sur son cheval, capturant la majesté et la grandeur de la culture chinoise ancienne. Les détails minutieux de la sculpture mettent en valeur la finesse de l'artisanat, tandis que la posture noble du cavalier et la grâce de son cheval évoquent la puissance et la noblesse de cette époque révolue. Cette œuvre témoigne de l'histoire riche et de la tradition artistique profonde de la civilisation chinoise.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 1000,
    dimension_height: 100,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/sculpture1.jpg`,
    artists_id: 5,
    artwork_technique_id: 3,
  },
  {
    title: "Young woman",
    description:
      "Une sculpture en bois représentant une jeune femme chinoise de l'Antiquité, méticuleusement maquillée et coiffée selon les coutumes de l'époque. Son visage délicatement sculpté reflète la grâce et la beauté intemporelle, tandis que les détails minutieux de sa coiffure et de son maquillage capturent l'élégance et le raffinement de la culture chinoise ancienne. Cette sculpture incarne la fascination pour la jeunesse et la féminité dans la société antique, témoignant de l'artisanat exceptionnel et de la sensibilité artistique de son créateur.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 1300,
    dimension_height: 50,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/sculpture2.jpg`,
    artists_id: 5,
    artwork_technique_id: 3,
  },
  {
    title: "Buddha of compassion",
    description:
      "Une sculpture en bronze d'un Bouddha, symbole de paix et d'illumination, capturant la sérénité et la compassion du sage. La richesse des détails et la finesse de l'expression faciale évoquent la profondeur de la méditation et la transcendance spirituelle. Cette sculpture en bronze témoigne de la vénération et de la dévotion envers le Bouddha, offrant une présence apaisante et inspirante à ceux qui la contemplent.",
    art_theme: "art de rue",
    date_creation: new Date(),
    price: 1300,
    dimension_height: 160,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/sculpture3.jpg`,
    artists_id: 5,
    artwork_technique_id: 3,
  },
  {
    title: "Tête de femme",
    description:
      "Une tête de femme en marbre, sa chevelure ondulée capturant le mouvement fluide et la grâce naturelle. Les traits délicats et la douceur des courbes révèlent une beauté intemporelle et une élégance classique. La texture lisse du marbre met en valeur la finesse des détails, créant une œuvre d'art qui évoque à la fois la force et la délicatesse de la féminité.",
    art_theme: "figuratif",
    date_creation: new Date(),
    price: 2300,
    dimension_height: 70,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/sculpture4.jpg`,
    artists_id: 6,
    artwork_technique_id: 3,
  },
  {
    title: "Chevaux cabrés",
    description:
      "Une sculpture en marbre représentant des chevaux cabrés, figés dans une pose majestueuse et puissante. La texture lisse et blanche du marbre met en valeur la force et la grâce des animaux, capturant l'élan dynamique et la vigueur de leurs mouvements figés pour l'éternité. Cette sculpture évoque la beauté intemporelle de la nature et la puissance indomptable des chevaux, offrant une impressionnante œuvre d'art qui inspire admiration et respect.",
    art_theme: "nature",
    date_creation: new Date(),
    price: 1300,
    dimension_height: 90,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/sculpture5.jpg`,
    artists_id: 6,
    artwork_technique_id: 3,
  },
  {
    title: "Jeune femme au voile",
    description:
      "Une sculpture en bronze grandeur nature d'une jeune femme, enveloppée dans un long voile qui rappelle la Vierge Marie. Sa posture élégante et empreinte de grâce évoque la pureté et la compassion, tandis que le voile drapé avec délicatesse ajoute une aura de mystère et de spiritualité à la sculpture. La patine du bronze souligne les détails subtils de la sculpture, capturant la douceur des traits du visage et la fluidité des plis du voile, créant ainsi une représentation saisissante de la beauté et de la transcendance.",
    art_theme: "art abstrait",
    date_creation: new Date(),
    price: 1300,
    dimension_height: 170,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail: `${imageBaseUrl}/sculpture6.jpg`,
    artists_id: 6,
    artwork_technique_id: 3,
  },
];
const setFavorite = [
  { users_id: 1, artworks_id: 1 },
  { users_id: 2, artworks_id: 2 },
  { users_id: 3, artworks_id: 3 },
  { users_id: 4, artworks_id: 1 },
  { users_id: 5, artworks_id: 2 },
  { users_id: 6, artworks_id: 3 },
];
const events = [
  {
    name: "Inauguration",
    start_date: "2023-11-01 09:00:00",
    localisation: "Paris 3",
    end_date: "2023-11-05 19:00:00",
    thumbnail: `${imageBaseUrl}/expo1.jpg`,
  },
  {
    name: "Capturer le présent",
    start_date: "2023-12-01 09:00:00",
    localisation: "Paris 3",
    end_date: "2023-12-05 19:00:00",
    thumbnail: `${imageBaseUrl}/expo2.jpg`,
  },
  {
    name: "Variations",
    start_date: "2024-01-16 09:00:00",
    localisation: "Paris 3",
    end_date: "2024-01-17 19:00:00",
    thumbnail: `${imageBaseUrl}/expo3.jpg`,
  },
];

const seed = async () => {
  try {
    // Declare an array to store the query promises
    // See why here: https://eslint.org/docs/latest/rules/no-await-in-loop
    const queries = [];

    /* ************************************************************************* */

    // Generating Seed Data

    // Optional: Truncate tables (remove existing data)
    await database.query("DELETE from artists");
    await database.query("DELETE from users");
    await database.query("DELETE from artwork_technique");
    await database.query("DELETE from sub_technique");
    await database.query("DELETE from artworks");
    await database.query("DELETE from set_favorite");
    await database.query("DELETE from events");

    // Insert fake data into the 'item' table

    for (const artist of artists) {
      const { firstname, lastname, thumbnail, biography } = artist;
      queries.push(
        await database.query(
          "insert into artists(artist_name, firstname, lastname, date_registration, thumbnail, biography) VALUES (?,?,?,?,?,?)",
          [
            artist.artist_name,
            firstname,
            lastname,
            artist.date_registration,
            thumbnail,
            biography,
          ]
        )
      );
    }
    for (const user of users) {
      queries.push(
        database.query(
          "insert into users(firstname, lastname, email, phone, adress, password, role) VALUES (?,?,?,?,?,?,?)",
          [
            user.firstname,
            user.lastname,
            user.email,
            user.phone,
            user.adress,
            user.password,
            user.role,
          ]
        )
      );
    }

    for (const sub of subTechnique) {
      queries.push(
        await database.query("INSERT INTO sub_technique(name) VALUES (?)", [
          sub.name,
        ])
      );
    }
    for (const artech of artworkTechnique) {
      queries.push(
        await database.query(
          "INSERT INTO artwork_technique(name, sub_technique_id) VALUES (?,?)",
          [artech.name, artech.sub_technique_id]
        )
      );
    }
    for (const art of artwork) {
      queries.push(
        await database.query(
          "INSERT INTO artworks(title, description, art_theme, date_creation, price, dimension_height, dimension_width, dimension_depth, price_on_demand, thumbnail, artists_id, artwork_technique_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)",
          [
            art.title,
            art.description,
            art.art_theme,
            art.date_creation,
            art.price,
            art.dimension_height,
            art.dimension_width,
            art.dimension_depth,
            art.price_on_demand,
            art.thumbnail,
            art.artists_id,
            art.artwork_technique_id,
          ]
        )
      );
    }
    for (const fav of setFavorite) {
      queries.push(
        await database.query(
          "INSERT INTO set_favorite(users_id, artworks_id) VALUES (?,?)",
          [fav.users_id, fav.artworks_id]
        )
      );
    }
    for (const event of events) {
      queries.push(
        await database.query(
          "INSERT INTO events(name, start_date, localisation, end_date, thumbnail) VALUES (?,?,?,?,?)",
          [
            event.name,
            event.start_date,
            event.localisation,
            event.end_date,
            event.thumbnail,
          ]
        )
      );
    }

    /* ************************************************************************* */

    // Wait for all the insertion queries to complete
    // await Promise.all(queries);

    // Close the database connection
    database.end();

    console.info(`${database.databaseName} filled from ${__filename} 🌱`);
  } catch (err) {
    console.error("Error filling the database:", err);
  }
};

// Run the seed function
seed();
