const express = require('express');
const cors = require('cors');
const textRoute = require('./routes/textRoute');
require('dotenv').config()

const app = express();
const PORT = process.env.PORT 

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/text', textRoute);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
