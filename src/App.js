import "./App.css";
import React, { Component } from "react";
import BotsPage from "./containers/BotsPage";
import YourBotArmy from "./containers/YourBotArmy"

const botApi = "http://localhost:6001"
const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json',
}; 



class App extends Component {
  state = {
    bots: []
  }

  componentDidMount() {
    fetch(botApi)
      .then(res => res.json())
      // .then(console.log(res)) for some reason not logging?
      .then((bots) => this.setState({ bots }))
  }


  addBot = (bot) => {
    fetch(botApi, {
      method: 'POST',
      headers,
      body: JSON.stringify(bot)
    })
    .then((res) => res.json())
    .then((bot) => this.setState({ bots: [...this.state.bots, bot ] }))
  }

  releaseBot = bot => {
    fetch(this.state, {
      method: 'POST',
      headers,
      body: JSON.stringify(bot)
    })
    .then((res) => res.json())
    .then((bot) => ({ bots: [...botApi, bot ] }))
  }

  dischargeBot = (id) => {
    fetch('${botApi}/${id}', {
      method: 'DELETE',
      headers,
    })
      .then(() =>
        this.setState({
          bots: this.state.bots.filter((bot) => bot.id !== id)
        }))
  };

  render() {
    return (
      <div className="App">
        <BotsPage />
      </div>
    );
  }
}

export default App;
