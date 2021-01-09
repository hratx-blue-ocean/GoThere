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
    VALUES ('${userData.name}', '${userData.cookie.email}', '${userData.phoneNumber}', '${userData.password}');` ,(error, results) => {
    if (error) {
      callback(error)
    }
    callback(null, results)
  })
}


// adding a trip and accomodations !!!! DONT FORGET TO ADD IN userId.cookie.email after testing!!!!
const createNewTrip = (tripData, callback) => {
  pool.query(
    `WITH new_trip AS (
      INSERT INTO usertrips(email, startdate, enddate, destination, businesstrip)
      VALUES ('imsleepy@gmail.com', '${tripData.query.startdate}', '${tripData.query.enddate}', '${tripData.query.destination}', '${tripData.query.businesstrip}')
      RETURNING tripid
  ) INSERT INTO attractions(tripid, name, citystate, attractionType)
  VALUES ((SELECT tripid FROM new_trip), '${tripData.query.name}', '${tripData.query.citystate}', '${tripData.query.attractiontype}' );` ,(error, results) => {
    if (error) {
      callback(error)
    }
    console.log('RESULTS!!', results)
    callback(null, results)
  })
}

// not being used ... may be used after asking team..
const createNewAttraction = (attractionData, tripId, callback) => {
  console.log('HERE IS TRIP ID!', tripId)
  pool.query(
    `INSERT INTO attractions(tripid, name, citystate, attractionType)
    VALUES ('${tripId}', '${attractionData.query.name}', '${attractionData.query.citystate}', '${attractionData.query.attractionType}');` ,(error, results) => {
    if (error) {
      callback(error)
    } callback(null, results)
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