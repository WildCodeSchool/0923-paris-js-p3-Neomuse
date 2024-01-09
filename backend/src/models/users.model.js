const db = require("../../database/client");

const insert = (user) => {
  const { firstname, lastname, email, password } = user;

  return db.query(
    "INSERT INTO users (firstname, lastname, email, password) VALUES (?, ?, ?, ?)",
    [firstname, lastname, email, password]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE id_Users = ?", [id]);
};

module.exports = {
  insert,
  findById,
};
