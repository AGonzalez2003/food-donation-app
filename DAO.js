const mysql = require("mysql2");

class DAO {
  constructor() {
    this.pool = mysql.createPool({
      host: "localhost",
      user: "root",
      password: "49ERnation!",
      database: "food_donation",
    });
  }

  run(query, params = []) {
    return new Promise((resolve, reject) => {
      this.pool.execute(query, params, (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
}

module.exports = DAO;