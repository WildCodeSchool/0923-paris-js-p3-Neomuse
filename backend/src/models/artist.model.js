const db = require("../../database/client");

const insert = (artist) => {
  const { firstname, lastname, thumbnail, biography } = artist;
  return db.query(
    "insert into artists(artist_name, firstname, lastname, date_registration, thumbnail, biography) VALUES (?,?,?,?,?,?)",
    [
      artist.artist_name,
      firstname,
      lastname,
      artist.date_registration,
      thumbnail,
      biography,
    ]
  );
};
const findAll = () => {
  return db.query("SELECT * FROM artists ");
};
const findById = (id) => {
  return db.query("SELECT * FROM artists WHERE artist_id  = ?", [id]);
};

const findByName = (name) => {
  return db.query("SELECT * FROM artists WHERE artist_name LIKE ?", [
    `%${name}%`,
  ]);
};
module.exports = {
  insert,
  findAll,
  findById,
  findByName,
};
