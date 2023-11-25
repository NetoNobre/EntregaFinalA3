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

module.exports = {
  getUser
};