import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy"

const botApi = "http://localhost:6001/bots"
const headers = {
  Accepts: 'application/json',
  'Content-type': 'application/json',
}; 

class BotsPage extends Component {

  state = {
    bots: [],
    myBots: []
  }

  componentDidMount() {
    fetch(botApi)
      .then((res) => res.json())
      .then((bots) => this.setState({ bots }))
  }

  
  recBot = (bot, recruit) => {
    fetch(`${botApi}`, {
      method: 'POST',
      headers,
      body: JSON.stringify({recruit})
    })
    .then(() => {
      const newBot = {...bot, recruit};
      this.setState({
        bots: this.state.bots.map((b) => (b === bot ? newBot : b)),
      })
    })
  };

  addBot = (bot) => {
    this.recBot(bot, true)
  }

  releaseBot = bot => {
    this.recBot(bot, false)
  }

  dischargeBot = (bot) => {
    fetch(`${botApi}/${bot.id}`, {
      method: 'DELETE',
      headers,
    })
      .then(() =>
        this.setState({
          bots: this.state.bots.filter((b) => b !== bot)
        }))
  };

  render() {
    return <div>
      <div>
        <YourBotArmy 
        handleRel={this.releaseBot}
        handleDis={this.dischargeBot}
        handleRec={this.addBot}
        bots={this.state.bots.filter((bot) => bot.recruit)}/>
      </div>
      <div>
        <BotCollection 
        handleRec={this.addBot}
        bots={this.state.bots}/>
      </div>
    </div>;
  }
}

export default BotsPage;
