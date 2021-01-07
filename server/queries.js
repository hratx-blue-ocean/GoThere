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

const createNewUser = (userData, callback) => {
  pool.query(
    `INSERT INTO users(name, email, phoneNumber, password)
    VALUES ('${userData.name}', '${userData.email}', '${userData.phoneNumber}', '${userData.password}');` ,(error, results) => {
    if (error) {
      callback(error)
    }
    callback(null, results)
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

//query database for user trips by userID
const getUserTrips = (userId) => {

}


// query database for favorites by userID
const getUserFavorites = (userId) => {

}

module.exports = {
  checkUsernamePassword,
  createNewUser,
  createNewTrip,
  getUserTrips,
  getUserFavorites,
}