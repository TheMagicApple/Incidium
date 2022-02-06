
const SQLConnection = require('./SQLConnection.js')

async function addUser(username, password, dateCreated) {
  const queryString = `INSERT INTO users VALUES (${username}, ${password}, ${dateCreated}`
  const result = await SQLConnection.query(queryString).catch(err => { throw err });
  return result;
}

async function deleteUser(username) {
  const queryString = `DELETE FROM users WHERE username = ${username}`
  const result = await SQLConnection.query(queryString).catch(err => { throw err });
  return result;
}

async function getUsers() {
  const queryString = `SELECT * FROM users`
  const result = await SQLConnection.query(queryString).catch(err => { throw err });
  return result;
}

async function getUser(username) {
  const queryString = `SELECT * FROM users WHERE username = ${username}`
  const result = await SQLConnection.query(queryString).catch(err => { throw err });
  return result;
}

module.exports = {
  addUser,
  deleteUser,
  getUsers,
  getUser
}