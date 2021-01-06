const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gothere',
  password: 'root',
  port: 5432,
})

const checkUsernamePassword = (username, password) => {
  return pool.query(`SELECT email, password FROM users WHERE email = '${username}'`).then((results) => {
    if (password === results.rows[0].password) {
      console.log('CORRECT PASSWORD!')
      return true;
    } else {
      return false;
    }
  })
}

const createNewUser = (userData) => {
  pool.query(
    `INSERT INTO users(name, address, city, state, email, password, favorites)
    VALUES (${userData.name}, ${userData.address}, ${userData.city}, ${userData.state}, ${userData.email}, ${userData.password}, 2);` ,
    (error, results) => {
    if (error) {
      res.status(400)
    } res.status(200).send(`User added with ID: ${result.userid}`)
  })
}


// for a new trip, needs changing
const createNewTrip = (userData) => {
  pool.query(
    `INSERT INTO users(name, address, city, state, email, password, favorites)
    VALUES (${userData.name}, ${userData.address}, ${userData.city}, ${userData.state}, ${userData.email}, ${userData.password}, 2);` ,
    (error, results) => {
    if (error) {
      res.status(400)
    } res.status(200).send(`User added with ID: ${result.userid}`)
  })
}


module.exports = {
  checkUsernamePassword,
  createNewUser,
  createNewTrip,
}