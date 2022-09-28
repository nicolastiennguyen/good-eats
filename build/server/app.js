"use strict";
const express = require('express');
require('dotenv').config();
const app = express();
app.get('/', (req, res) => {
    res.send('hello');
});
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
