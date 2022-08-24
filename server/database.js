const Pool = require('pg').Pool

const pool = new Pool({
  host: 'localhost',
  user: 'postgres',
  database: 'postgres',
  password: "Aa123456",
  port: 5432,
});


async function setDbConnection(req) {
  const Pool = pool;
  try {
    const infoReturned = await Pool.query(req);
    return infoReturned
  } catch (err) {
    console.log("error", err)
  }
}

module.exports = { setDbConnection };
