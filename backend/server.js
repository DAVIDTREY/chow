const express = require('express')
const mongoose = require('mongoose');

// running the express app
const app = express();

app.listen(9000, () => console.log(`the app listening at http://localhost:${9000}`))