import "./App.css";
import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";

// const botApi = "http://localhost:6001"
// const headers = {
//   Accepts: 'application/json',
//   'Content-type': 'application/json',
// }; 



class App extends Component {
 

  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
