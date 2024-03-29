const db = require("../../database/client");

const insert = (user) => {
  const { firstname, lastname, email, phone, adress, password } = user;
  console.info(user);

  return db.query(
    "INSERT INTO users (firstname, lastname, email, phone, adress, password) VALUES (?, ?, ?, ?, ?, ?)",
    [firstname, lastname, email, phone, adress, password]
  );
};
const findAll = () => {
  return db.query("SELECT * FROM users");
};
const findById = (id) => {
  return db.query("SELECT * FROM users WHERE users_id = ?", [id]);
};
const findByEmail = (email) => {
  return db.query("SELECT * FROM users WHERE email = ?", [email]);
};
const deleteById = (id) => {
  return db.query("DELETE FROM users WHERE users_id = ? ", [id]);
};
const Update = (id, data) => {
  return db.query("UPDATE users SET ? WHERE users_id= ?", [data, id]);
};

module.exports = {
  insert,
  findById,
  findAll,
  findByEmail,
  deleteById,
  Update,
};
