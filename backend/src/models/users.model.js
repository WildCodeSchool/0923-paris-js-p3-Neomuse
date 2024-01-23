const db = require("../../database/client");

const insert = (user) => {
  const { firstname, lastname, email, phone, adress, password, role } = user;

  return db.query(
    "INSERT INTO users (firstname, lastname, email, phone, adress, password, role) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [firstname, lastname, email, phone, adress, password, role]
  );
};

const findById = (id) => {
  return db.query("SELECT * FROM users WHERE id = ?", [id]);
};

const findAll = () => {
  return db.query("SELECT * from users");
};

const findByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email = ?", [email]);
};

module.exports = {
  insert,
  findById,
  findAll,
  findByEmail,
};
