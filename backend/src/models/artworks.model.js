const db = require("../../database/client");

const insert = (artwork) => {
  const { title, description, price, thumbnail } = artwork;

  return db.query(
    "INSERT INTO artworks (title, description, art_theme, date_creation, price, dimension_height, dimension_width, dimension_depth, price_on_demand, thumbnail, artists_id, artwork_technique_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      title,
      description,
      artwork.art_theme,
      artwork.date_creation,
      price,
      artwork.dimension_height,
      artwork.dimension_width,
      artwork.dimension_depth,
      artwork.price_on_demand,
      thumbnail,
      artwork.artists_id,
      artwork.artwork_technique_id,
    ]
  );
};

const findAll = () => {
  return db.query("SELECT * FROM artworks ");
};

const findByArtworkTechniqueList = (id) => {
  return db.query("select * from artworks where `artwork_technique_id` = ?", [
    id,
  ]);
};
const findById = (id) => {
  return db.query(
    "SELECT a.artworks_id, a.title, a.description, a.price, a.art_theme, a.dimension_height, a.dimension_height, a.dimension_width, a.price_on_demand, a.thumbnail, a.artwork_technique_id, t.name as technique_name FROM artworks as a JOIN artwork_technique as t ON t.artwork_technique_id=a.artwork_technique_id  WHERE artworks_id  = ?",
    [id]
  );
};

const TechAll = () => {
  return db.query("SELECT * FROM artwork_technique ");
};
const findBytech = () => {
  return db.query(
    "SELECT a.artworks_id, a.title, a.price, a.art_theme, a.dimension_height, a.dimension_height, a.dimension_width, a.price_on_demand, a.thumbnail, t.name as technique_name FROM artworks as a JOIN artwork_technique as t ON t.artwork_technique_id=a.artwork_technique_id"
  );
};
const AllArtist = () => {
  return db.query("SELECT * FROM artists ");
};

module.exports = {
  insert,
  findAll,
  findById,
  TechAll,
  findBytech,
  AllArtist,
  findByArtworkTechniqueList,
};
