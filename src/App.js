import Nav from "./components/Nav";
import Banner from "./components/Banner";
import Sweater from "./components/Sweater";
import Form from "./components/Form";
import { useState, useEffect } from 'react';

function App() {

  const apiKey = process.env.REACT_APP_API_KEY1;
  const apiKey2 = process.env.REACT_APP_API_KEY2;
  const apiKey3 = process.env.REACT_APP_API_KEY3;

  const [location, setLocation] = useState();
  const [temperature, setTemperature] = useState()

  const getLoc = async (searchLoc) => {
    try {
      if (!searchLoc) {
        // setLocation(null);
        return;
      }
  
      const response = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${searchLoc}&limit=1&appid=${apiKey2}`
      );
      const locData = await response.json();

      const response2 = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${locData[0].lat}&lon=${locData[0].lon}&appid=${apiKey2}`
      )
      const weatherData = await response2.json();

      setLocation(locData);
      setTemperature(weatherData);
    
    } catch (error) {
      console.error(error);
    }
  };

  // const startPage = () => {
  //   return (
  //   <>
  //   <h1>Is it Sweater Weather Where You Are?</h1>
  //   </>
  // )}

  // useEffect(() => {
  //   startPage()
  // }, [])


  // useEffect(() => {
  //   getLoc(location)
  // }, [])

  return (
    <div className="App">
      <Banner />
      <Form locsearch={getLoc} temperature={temperature}/>
      <Sweater location={location} temperature={temperature}/>
    </div>
  );
}

export default App;
