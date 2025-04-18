const express = require('express')
const app = express();
const PORT = 5000
const pool = require('./db');

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello')
});

app.get('/dbtest', async(req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).send('Database error');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});