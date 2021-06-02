import React, { Component } from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

const botAPI = `http://localhost:6001/bots`

class BotsPage extends Component {
  //start here with your code for step one
  state = {
    bots: [],
    myBots: []
  }

  componentDidMount(){
    // console.log("mounted")
    fetch(botAPI)
    .then(res => res.json())
    // .then(console.log)
    .then(bots => this.setState({ bots }))
  }

  recruitBot = (bot) => {
    if(!this.state.myBots.includes(bot)){
    this.setState({myBots: [...this.state.myBots, bot]})
    }
  }

  releaseBot = (bot) => {
    this.setState({myBots: [...this.state.myBots.filter(b => b !== bot)] 
    })
  }

  dischargeBot = (bot) => { 
    this.releaseBot(bot)
    this.setState({
      bots: [...this.state.bots.filter(b => b !== bot)]
     })
  }

  render() {
    return <div>
      
      <YourBotArmy handleClick={this.releaseBot} handleDis={this.dischargeBot} bots={this.state.myBots} />
      <BotCollection handleClick={this.recruitBot} handleDis={this.dischargeBot} bots={this.state.bots}/>
      
      
      </div>;
  }
}

export default BotsPage;
