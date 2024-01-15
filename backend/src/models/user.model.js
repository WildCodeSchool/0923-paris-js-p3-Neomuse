const db = require("../../database/client");

const insert = (user) => {
  const { firstname, lastname, email, phone, adress, password } = user;
  console.info(user);

  return db.query(
    "INSERT INTO users (firstname, lastname, email, phone, adress, password) VALUES (?, ?, ?, ?, ?, ?)",
    [firstname, lastname, email, phone, adress, password]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE artworks_id = ?", [id]);
};
const findByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email = ?", [email]);
};

module.exports = {
  insert,
  findById,
  findByEmail,
};
