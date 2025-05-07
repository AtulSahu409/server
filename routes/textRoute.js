const express = require('express');
const router = express.Router();
const fetchGeminiText = require('../data/fetchGeminiText');

router.get('/', async (req, res) => {
//   const difficulty = req.query.difficulty || 'easy';

  try {
    const text = await fetchGeminiText();
    if (text) {
      res.json({ text });
    } else {
      res.status(500).json({ error: 'Failed to get content from Gemini' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
