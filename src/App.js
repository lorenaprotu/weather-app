import './App.css';
import { useState } from 'react';



const api = {
  key: 'cb87df9c95a7e1a7addf1ac4cbaf6994',
  base: 'https://api.openweathermap.org/data/2.5/',

};

function App() {
  const [search, setSearch]= useState("");
  const[weather, setWeather]= useState({});


  const searchPressed =() =>{
    fetch(`${api.base}forecast?q=${search}&units=metric&&APPID=${api.key}`)
    .then((res)=>res.json())
    .then((result)=>{
      console.log(result);  
      setWeather(result);
    });
  };

  return (
    <div className="App">
      <header className="App-header">

      {/*HEADER*/}
      <h1>Vrijeme</h1>

      {/*Search*/}
       <div>
        <input
        type="text" 
        placeholder="Unesi Grad"
        onChange={(e)=> setSearch(e.target.value)}
      />
      <button onClick={searchPressed}>search</button>
      </div>


        <div>
          {weather.city&&(
          <>
            <h2>{weather.city.name}</h2>
            <p>{weather.list[0].dt_txt}</p>
            <p>{weather.list[0].main.temp}°C</p>
            <p>{weather.list[0].weather[0].main}</p>
            
            <table>
        <tbody>
    <tr>  
    <td>  {/*DAN 1*/}
  
   <h4>{weather.list[4].dt_txt}</h4>
    <p>{weather.list[4].main.temp}°C</p>
    <p>{weather.list[4].weather[0].main}</p>
    </td>

    <td> {/*DAN 2*/}

    <h4>{weather.list[12].dt_txt}</h4>
    <p>{weather.list[12].main.temp}°C</p>
    <p>{weather.list[12].weather[0].main}</p>
    </td>

    <td> {/*DAN 3*/}
  

    <h4>{weather.list[20].dt_txt}</h4>
    <p>{weather.list[20].main.temp}°C</p>
    <p>{weather.list[20].weather[0].main}</p>
    </td>

    <td> {/*DAN 4*/}

    <h4>{weather.list[28].dt_txt}</h4>
    <p>{weather.list[28].main.temp}°C</p>
    <p>{weather.list[28].weather[0].main}</p>
    </td>
  <td>
    
    {/*DAN 5*/}

    <h4>{weather.list[36].dt_txt}</h4>
    <p>{weather.list[36].main.temp}°C</p>
    <p>{weather.list[36].weather[0].main}</p>
    </td>
    </tr>
    </tbody>
    </table>

     </>)}
    </div>
    


      </header>
    </div>
  );
}

export default App;
