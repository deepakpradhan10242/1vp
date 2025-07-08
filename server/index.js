const express = require('express');
const cors = require('cors');
require('dotenv').config();
const PORT = process.env.PORT;
const paymentRouter = require("./routes/payement");


const app = express();
app.use(cors());
app.use(express.json());

app.use("/api", paymentRouter);

app.get('/', (req, res) => {
    res.send('Backend is running!');
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});