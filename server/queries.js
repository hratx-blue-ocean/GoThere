const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gothere',
  password: 'root',
  port: 5432,
})

const checkUsernamePassword = (username, password) => {
  console.log('checking password..')
  return pool.query(`SELECT email, password FROM users WHERE email = '${username}'`).then((results) => {
    if (password === results.rows[0].password) {
      console.log('CORRECT PASSWORD!')
      return true;
    } else {
      return false;
    }
  })
}


module.exports = {
  checkUsernamePassword,
}