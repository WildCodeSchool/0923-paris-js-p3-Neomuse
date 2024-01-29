/* eslint-disable no-await-in-loop */
/* eslint import/no-extraneous-dependencies: ["error", {"devDependencies": true}] */

// Load environment variables from .env file
require("dotenv").config();

// Import Faker library for generating fake data
/* const { faker } = require("@faker-js/faker"); */

// Import database client
const database = require("./database/client");

const artists = [
  {
    artist_name: "El guapo",
    firstname: "Baptiste",
    lastname: "De la rosa",
    date_registration: new Date(),
    thumbnail:
      " https://cdn.pixabay.com/photo/2016/03/27/17/40/man-1283231_1280.jpg",
    biography:
      "Artiste passionné, mes toiles fusionnent rêves et réalité. Chaque coup de pinceau est une danse entre couleurs et émotions, invitant le spectateur à un voyage intime. Mon art, expression visuelle de l'âme.",
  },
  {
    artist_name: "Princess",
    firstname: "Leo",
    lastname: "HUMBERT",
    date_registration: new Date(),
    thumbnail:
      "https://cdn.pixabay.com/photo/2014/08/28/08/31/model-429733_1280.jpg",
    biography:
      "Artiste passionné, mes toiles fusionnent rêves et réalité. Chaque coup de pinceau est une danse entre couleurs et émotions, invitant le spectateur à un voyage intime. Mon art, expression visuelle de l'âme.",
  },
  {
    artist_name: "Big J",
    firstname: "Ju",
    lastname: "LIUS",
    date_registration: new Date(),
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/10/17/15/02/photography-7527978_1280.jpg",
    biography:
      "Artiste passionné, mes toiles fusionnent rêves et réalité. Chaque coup de pinceau est une danse entre couleurs et émotions, invitant le spectateur à un voyage intime. Mon art, expression visuelle de l'âme.",
  },
  {
    artist_name: "Queen",
    firstname: "Ines",
    lastname: "SEKA",
    date_registration: new Date(),
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/01/24/08/43/redhead-4789668_1280.jpg",
    biography:
      "Artiste passionné, mes toiles fusionnent rêves et réalité. Chaque coup de pinceau est une danse entre couleurs et émotions, invitant le spectateur à un voyage intime. Mon art, expression visuelle de l'âme.",
  },
  {
    artist_name: "LE JO",
    firstname: "Jonathan",
    lastname: "DUFAG",
    date_registration: new Date(),
    thumbnail:
      "https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg",
    biography:
      "Artiste passionné, mes toiles fusionnent rêves et réalité. Chaque coup de pinceau est une danse entre couleurs et émotions, invitant le spectateur à un voyage intime. Mon art, expression visuelle de l'âme.",
  },
  {
    artist_name: "Jean Claude Vandal",
    firstname: "John",
    lastname: "Doe",
    date_registration: new Date(),
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/03/14/19/45/suit-673697_1280.jpg",
    biography:
      "Artiste passionné, mes toiles fusionnent rêves et réalité. Chaque coup de pinceau est une danse entre couleurs et émotions, invitant le spectateur à un voyage intime. Mon art, expression visuelle de l'âme.",
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
    title: "Eclat de l'aube",
    description:
      "Une œuvre captivante qui capture la magie éphémère du lever du soleil",
    art_theme: "nature",
    date_creation: new Date(),
    price: 100,
    dimension_height: 100,
    dimension_width: 70,
    dimension_depth: 3,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/07/03/20/17/colorful-2468874_1280.jpg",
    artists_id: 1,
    artwork_technique_id: 1,
  },
  {
    title: "Harmonie Abstraite",
    description:
      "Cette pièce explore l'équilibre délicat entre formes abstraites et couleurs vives",
    art_theme: "nature",
    date_creation: new Date(),
    price: 500,
    dimension_height: 900,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2021/10/02/07/40/ink-6674441_1280.jpg",
    artists_id: 1,
    artwork_technique_id: 1,
  },
  {
    title: "Ombres de l'Âme",
    description:
      "Une œuvre introspective qui explore les profondeurs de l'âme humaine.",
    art_theme: "nature",
    date_creation: new Date(),
    price: 300,
    dimension_height: 600,
    dimension_width: 30,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2012/10/26/03/16/painting-63186_1280.jpg",
    artists_id: 1,
    artwork_technique_id: 1,
  },
  {
    title: "Danse Cosmique",
    description: "Une célébration de l'union entre le cosmos et la danse.",
    art_theme: "art abstait",
    date_creation: new Date(),
    price: 150,
    dimension_height: 800,
    dimension_width: 100,
    dimension_depth: 3,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/06/02/15/27/watercolor-795156_1280.jpg",
    artists_id: 2,
    artwork_technique_id: 1,
  },
  {
    title: "Écho du Passé",
    description: "Cette œuvre évoque la nostalgie du temps passé.",
    art_theme: "art abstait",
    date_creation: new Date(),
    price: 50,
    dimension_height: 300,
    dimension_width: 20,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2013/02/24/18/15/andreas-achenbach-85762_1280.jpg",
    artists_id: 2,
    artwork_technique_id: 1,
  },
  {
    title: "Sérénité Aquatique",
    description:
      "Inspirée par les profondeurs mystérieuses de l'océan, cette œuvre apporte une sensation apaisante.",
    art_theme: "art abstait",
    date_creation: new Date(),
    price: 150,
    dimension_height: 500,
    dimension_width: 66,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/11/04/13/08/coast-7569813_1280.jpg",
    artists_id: 2,
    artwork_technique_id: 1,
  },
  {
    title: "Fractales de l'Imagination",
    description:
      "Une exploration visuelle des structures fractales de l'imagination humaine.",
    art_theme: "paysage",
    date_creation: new Date(),
    price: 350,
    dimension_height: 400,
    dimension_width: 36,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/27/17/48/picture-862912_1280.jpg",
    artists_id: 3,
    artwork_technique_id: 1,
  },
  {
    title: "Rêve Éthéré",
    description:
      "Capturant l'essence des rêves, cette œuvre abstraite évoque un monde éthéré où les frontières entre la réalité et l'imagination s'estompent.",
    art_theme: "paysage",
    date_creation: new Date(),
    price: 350,
    dimension_height: 400,
    dimension_width: 36,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/07/27/17/48/picture-862912_1280.jpg",
    artists_id: 3,
    artwork_technique_id: 1,
  },
  {
    title: "fusion Harmonique",
    description:
      "Une fusion harmonieuse de formes géométriques et de couleurs toniques.",
    art_theme: "portraits",
    date_creation: new Date(),
    price: 30,
    dimension_height: 60,
    dimension_width: 15,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2020/03/04/22/50/rock-4902937_1280.jpg",
    artists_id: 3,
    artwork_technique_id: 1,
  },
  {
    title: "Activités Diurne",
    description:
      "Une composition envoûtante qui capture la séduction mystérieuse de la nuit.",
    art_theme: "portraits",
    date_creation: new Date(),
    price: 30,
    dimension_height: 60,
    dimension_width: 15,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/12/12/12/50/portrait-3870764_1280.jpg",
    artists_id: 4,
    artwork_technique_id: 1,
  },
  {
    title: "Réminiscence Printanière",
    description:
      "Inspirée par les premiers jours du printemps, cette œuvre respire la fraîcheur et la vitalité.",
    art_theme: "portraits",
    date_creation: new Date(),
    price: 30,
    dimension_height: 60,
    dimension_width: 15,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2018/10/11/17/37/angel-3740392_1280.jpg",
    artists_id: 4,
    artwork_technique_id: 1,
  },
  {
    title: "Rêve de Volières",
    description:
      "Une vision onirique de volières suspendues dans un ciel infini. Chaque cage renferme un monde unique, représentant des rêves et des aspirations.",
    art_theme: "portraits",
    date_creation: new Date(),
    price: 30,
    dimension_height: 60,
    dimension_width: 15,
    dimension_depth: 1,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/06/03/14/36/sand-castle-796488_1280.jpg",
    artists_id: 4,
    artwork_technique_id: 1,
  },
  {
    title: " Voyage Céleste",
    description: "Une exploration visuelle des mystères de l'univers",
    art_theme: "art de rue",
    date_creation: new Date(),
    price: 100,
    dimension_height: 160,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/10/01/05/04/graffiti-966463_1280.jpg",
    artists_id: 5,
    artwork_technique_id: 1,
  },
  {
    title: "Esquisse d'Émotion",
    description: "Une exploration visuelle des mystères de l'univers",
    art_theme: "art de rue",
    date_creation: new Date(),
    price: 130,
    dimension_height: 160,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/02/15/17/18/wall-637382_1280.jpg",
    artists_id: 5,
    artwork_technique_id: 1,
  },
  {
    title: "Equilibre Zen",
    description:
      "Inspirée par la philosophie zen, cette œuvre évoque l'harmonie entre le calme et le mouvement",
    art_theme: "art de rue",
    date_creation: new Date(),
    price: 130,
    dimension_height: 160,
    dimension_width: 30,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/02/15/17/18/wall-637382_1280.jpg",
    artists_id: 5,
    artwork_technique_id: 1,
  },
  {
    title: "Abstraction Éclatante",
    description:
      "Une explosion de couleurs vives et de formes abstraites crée une œuvre éclatante qui stimule les sens.",
    art_theme: "art abstrait",
    date_creation: new Date(),
    price: 230,
    dimension_height: 100,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/08/25/18/43/abstract-2681021_1280.jpg",
    artists_id: 6,
    artwork_technique_id: 1,
  },
  {
    title: "Éphémère Éternité",
    description:
      "Capturant la beauté fugace de moments éphémères, cette œuvre explore la dualité entre la brièveté de la vie et l'éternité de l'art.",
    art_theme: "art abstrait",
    date_creation: new Date(),
    price: 130,
    dimension_height: 100,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/04/04/08/55/art-2200740_1280.jpg",
    artists_id: 6,
    artwork_technique_id: 1,
  },
  {
    title: "Lueur Nocturne",
    description:
      "Cette pièce énigmatique évoque la lueur douce de la nuit, illuminant des paysages mystérieux.",
    art_theme: "art abstrait",
    date_creation: new Date(),
    price: 130,
    dimension_height: 100,
    dimension_width: 60,
    dimension_depth: 2,
    price_on_demand: false,
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/05/03/09/11/abstract-art-7171276_1280.jpg",
    artists_id: 6,
    artwork_technique_id: 1,
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
    localisation: "Paris 20",
    end_date: "2023-11-05 19:00:00",
    thumbnail:
      "https://cdn.pixabay.com/photo/2022/05/03/09/11/abstract-art-7171276_1280.jpg",
  },
  {
    name: "Casanov'art",
    start_date: "2023-12-01 09:00:00",
    localisation: "Paris 20",
    end_date: "2023-12-05 19:00:00",
    thumbnail:
      "https://cdn.pixabay.com/photo/2017/08/25/18/43/abstract-2681021_1280.jpg",
  },
  {
    name: "L'expo de JOJO",
    start_date: "2024-01-16 09:00:00",
    localisation: "Paris 20",
    end_date: "2024-01-17 19:00:00",
    thumbnail:
      "https://cdn.pixabay.com/photo/2015/06/03/14/36/sand-castle-796488_1280.jpg",
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
            art.dimension_height,
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
