import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";
import Axios from "axios";
import Weather from "./Weather";
function App() {
  const [country, setCountry] = useState("");
  const [data, setData] = useState("");
  const searchCountry = async () => {
    await Axios.get(`https://restcountries.com/v3.1/name/${data}`).then(
      (response) => {
        console.log(response);
        setCountry(response.data);
        console.log(country);
      }
    );
  };
  // class App extends React.component {
  //   render() {
  //     this.state = {
  //       name: "Pooja",
  //     };
  //     return <h1> {this.state.name}</h1>;
  //   }
  // }
  const getInputData = (e) => {
    setData(e.target.value);
    console.log(data);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1> Country Information</h1>
        <input
          type="text"
          id="inp1"
          palceholder="country name"
          onChange={getInputData}
        />
        <button id="btn1" onClick={searchCountry}>
          Enter
        </button>
      </header>
      <div>
        {country && country.length > 0 ? (
          country.map((data) => {
            return (
              <div key={uuidv4()}>
                <h3>Name:{data.name.common}</h3>
                <h3>Capital:{data.capital}</h3>
                <h3>Population:{data.population}</h3>

                <h3>Language:{data.languages.hin}</h3>
                <h3>latlang:{data.latlng}</h3>
                <img src={data.flags.png} alt={data.name.common}></img>
                <Weather data={data} />
              </div>
            );
          })
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}
export default App;
