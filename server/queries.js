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


// for a new trip, needs changing WORK ON THIS JESSE
const createNewTrip = (tripData, callback) => {
  pool.query(
    `INSERT INTO usertrips(email, startdate, enddate, destination, businesstrip)
    VALUES ('${tripData.cookie.email}', '${tripData.query.startdate}', '${tripData.query.enddate}', '${tripData.query.destination}', '${tripData.query.businesstrip}');` ,(error, results) => {
    if (error) {
      callback(error)
    }
    callback(null, results)
  })
}

//query database for user trips by userID
const getTrip = (userId, callback) => {
  pool.query(
    `SELECT * FROM usertrips WHERE email = '${userId.cookie.email}'` ,(error, results) => {
    if (error) {
      callback(error)
    }
    callback(null, results)
  })
}

const getFavorites = (userId, callback) => {
  pool.query(
    `SELECT * FROM favorites WHERE email = '${userId.cookie.email}'` ,(error, results) => {
    if (error) {
      callback(error)
    }
    callback(null, results)
  })
}



module.exports = {
  checkUsernamePassword,
  createNewUser,
  createNewTrip,
  getTrip,
  getFavorites,
}