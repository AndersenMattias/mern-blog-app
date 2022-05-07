const express = require('express');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());

const buildPath = path.join(__dirname, '..', 'build');
app.use(express.static(buildPath));

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server started on port: ${PORT}`);
});
