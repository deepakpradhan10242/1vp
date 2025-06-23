const express = require('express');
const cors = require('cors');
const { configDotenv } = require('dotenv');
require('dotenv').config();
const PORT = process.env.PORT;



const app = express();
app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});