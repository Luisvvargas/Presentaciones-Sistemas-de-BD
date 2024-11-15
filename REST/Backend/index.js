require('dotenv').config();
const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 8000;

const API_KEY = process.env.API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

app.use(cors());
app.use(express.json());

app.get('/weather/:city', async (req, res) => {
    const city = req.params.city;
    try {
      const response = await axios.get(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=es`);
      res.json(response.data);
    } catch (error) {
      console.error('Error al obtener los datos del clima:', error.message);
      res.status(500).json({ message: 'Error al obtener los datos del clima' });
    }
  });

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
