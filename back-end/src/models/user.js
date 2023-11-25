const connection = require('./connection');

async function getUser(user) {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM Users WHERE user = ?';
    connection.query(query, [user], (err, results) => {
      if (err) {
        reject(err);
      } else {
        if (results.length > 0) {
          resolve(results[0]);
        } else {
          resolve(null);
        }
      }
    });
  });
}

async function insertUser(data) {
    return new Promise((resolve, reject) => {
      const { user, firstName, lastName, email, password } = data;
      const query = 'INSERT INTO Users (user, firstName, lastName, email, password) VALUES (?, ?, ?, ?, ?)';
  
      connection.query(query, [user, firstName, lastName, email, password], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

module.exports = {
  getUser, insertUser
};