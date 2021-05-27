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


  addBot = (newBot) => {

    // if(!this.state.myBots.find(bot => bot === newBot)){
    //   const botExists = this.state.bots.find(bot => bot = newBot)
    //   this.setState((state)=> ({
    //     myArmy: [...state.myBots, botExists]
    //   }))
    // }

    // fetch(`${botApi}/${bot.id}`, {
    //   method: 'POST',
    //   headers,
    //   body: JSON.stringify({bot})
    // })
    // .then(() => {
    //   const newBot = {...bot, myBots};
    //   this.setState({
    //     bots: this.state.myBots.map((b) => (b === bot ? newBot : b)),
    //   })
    // })
  };

  releaseBot = bot => {
    this.addBot(bot, false)
  }

  dischargeBot = (bot) => {
    fetch(`${botApi}/${bot.id}`, {
      method: 'DELETE',
      headers,
    })
      .then(() =>
        this.setState({
          bots: this.state.bots.filter((bot) => bot.id !== bot)
        }))
  };

  render() {
    return <div>
      <div>
        <YourBotArmy bots={this.state.myBots}/>
      </div>
      <div>
        <BotCollection bots={this.state.bots}/>
      </div>
    </div>;
  }
}

export default BotsPage;
