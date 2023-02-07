// dog axios get and fetch api........................


import React from "react";
import axios from "axios";
import Data from "./Data";//assignment --2

//assignment --3
import Header from "../src/Simple Weather layout/Header";
import DayInfo from "../src/Simple Weather layout/DayInfo";
import CurrentWeather from "../src/Simple Weather layout/CurrentWeather";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      dogs: []
    };
  }
  componentDidMount() {
    axios
      .get("https://dog.ceo/api/breed/malinois/images")
      .then((res) => {
        console.log(res);
        this.setState({ dogs: res.data.message });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
      <div className="App">
        <h1>Hello Relevel</h1>
        {this.state.dogs.map((dog) => (
          <img src={dog} key={dog} alt={dog} />
        ))}
      </div>
      <div>
<Data/>
      </div>
      <div className="Wrapper">
        <Header />
        <DayInfo />
        <CurrentWeather/>
      </div>
      </>
    );
  }
}
export default App