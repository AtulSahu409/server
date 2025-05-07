const axios = require('axios');

async function fetchGeminiText() {
  try {
    const response = await axios.post(
      'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyBBaYNq9znVOB8Fk3JeOEo7ZFePbLOTTsg',
      {
        contents: [
          {
            parts: [
              {
                text: "Write a story of 60 words using easy vocabulary."
              }
            ]
          }
        ]
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    const generatedText = response.data.candidates?.[0]?.content?.parts?.[0]?.text;
    return generatedText || null; // ✅ return the text so your router gets it
  } catch (error) {
    console.error('❌ Error calling Gemini API:', error.message);
    return null; // ✅ handle errors gracefully
  }
}

module.exports = fetchGeminiText;
