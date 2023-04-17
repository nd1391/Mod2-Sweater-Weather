import Nav from "./components/Nav";
import Sweater from "./components/Sweater";
import Form from "./components/Form";
import { useState, useEffect } from 'react';

function App() {

  const apiKey = '5489db927623f4e9b6e10c486129f9b2'

  const [location, setLocation] = useState(null);
  const [temperature, setTemperature] = useState(null)

  const getLoc = async (searchLoc) => {
    try {
      if (!searchLoc) {
        setLocation(null);
        return;
      }
      // make a fetch request and store response
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchLoc}&limit=1&appid=${apiKey}`
      );
      // Parse JSON response into a javascript object
      const locData = await response.json();
      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locData[0].lat}&lon=${locData[0].lon}&appid=${apiKey}`
      )
      const weatherData = await response2.json();
      // set the location state
      setLocation(locData);
      setTemperature(weatherData);
    
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="App">
      <Nav />
      <Form locsearch={getLoc}/>
      <Sweater />
    </div>
  );
}

export default App;
