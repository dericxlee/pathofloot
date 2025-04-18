const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pathofloot',
    password: 'sql',
    port: 5432,
})

module.exports = pool;

