const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gothere',
  password: 'password',
  port: 5432,
})

const checkUsernamePassword = (username, password) => {
  return pool.query(`SELECT email, name, password FROM users WHERE email = '${username}'`).then((results) => {
    if (password === results.rows[0].password) {
      return {
        name: results.rows[0].name,
        isCorrectPassword: true
      };
    } else {
      return {
        isCorrectPassword: false
      }
    }
  })
  .catch((error) => {
    console.log(error);
    return {
      error: error,
      isCorrectPassword: false
    };
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


// adding a trip and accomodations !!!! DONT FORGET TO ADD IN userId.cookie.email after testing!!!!
const createNewTrip = (tripData, callback) => {
  pool.query(
    `WITH new_trip AS (
      INSERT INTO usertrips(email, startdate, enddate, destination, businesstrip)
      VALUES ('${tripData.cookie.email}', '${tripData.body.startdate}', '${tripData.body.enddate}', '${tripData.body.destination}', '${tripData.body.businesstrip}')
      RETURNING tripid
  ) INSERT INTO attractions(tripid, name, citystate, attractionType)
  VALUES ((SELECT tripid FROM new_trip), '${tripData.body.name}', '${tripData.body.citystate}', '${tripData.body.attractiontype}' );` ,(error, results) => {
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
    VALUES ('${tripId}', '${attractionData.body.name}', '${attractionData.body.citystate}', '${attractionData.body.attractionType}');` ,(error, results) => {
    if (error) {
      callback(error)
    } callback(null, results)
  })
}


// this is used to post a favorite

const createNewFavorite = (favoriteData, callback) => {
  pool.query(
    `INSERT INTO favorites(email, name, citystate, favoritesType)
    VALUES ('${favoriteData.cookie.email}', '${favoriteData.body.name}', '${favoriteData.body.citystate}', '${favoriteData.body.attractionType}');` ,(error, results) => {
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

// this is to DELETE a favorite by favoriteId

const deleteFavorite = (favoriteData, callback) => {
  pool.query(
    `DELETE FROM favorites WHERE favoritesid = ${favoriteData.body.favoritesid};` ,(error, results) => {
    if (error) {
      callback(error)
    } callback(null, results)
  })
}


// this is to update a previously created trip by tripID

const updateTrip = (tripData, callback) => {
  pool.query(
    `WITH new_trip AS (
      UPDATE usertrips
      SET email = '${tripData.cookie.email}', startdate = '${tripData.body.startdate}', enddate = '${tripData.body.enddate}', destination = '${tripData.body.destination}', businesstrip = '${tripData.body.businesstrip}' WHERE tripid = ${tripdData.body.tripid}
      RETURNING tripid
  )
      UPDATE attractions tripid = ${tripData.body.tripid}, name = '${tripData.body.name}', citystate = '${tripData.body.citystate}', attractionType = '${tripData.body.attractiontype}';` ,(error, results) => {
    if (error) {
      callback(error)
    }
    console.log('RESULTS!!', results)
    callback(null, results)
  })
}



module.exports = {
  checkUsernamePassword,
  createNewUser,
  createNewTrip,
  createNewFavorite,
  getTrip,
  getFavorites,
  deleteFavorite,
  updateTrip,
}