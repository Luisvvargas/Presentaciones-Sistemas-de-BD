// frontend/src/App.jsx
import React, { useState } from 'react';
import { getWeatherByCity } from './api';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await getWeatherByCity(city);
      setWeather(response.data);
      setError('');
    } catch (err) {
      setError('No se pudo obtener la información del clima.');
      setWeather(null);
    }
  };

  return (
    <div>
      <h1>Consulta del Clima</h1>
      <input
        type="text"
        placeholder="Ingresa el nombre de la ciudad"
        value={city}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Buscar</button>
      {error && <p>{error}</p>}
      {weather && (
        <div>
          <h2>{weather.name}, {weather.sys.country}</h2>
          <p>Temperatura: {weather.main.temp} °C</p>
          <p>Condición: {weather.weather[0].description}</p>
          <p>Humedad: {weather.main.humidity}%</p>
          <p>Viento: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default App;
