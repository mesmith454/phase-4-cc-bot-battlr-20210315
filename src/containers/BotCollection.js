import React, { Component } from "react";
//  
import BotSpecs from './components/BotSpecs';
const botApi = "http://localhost:6001"

class BotCollection extends Component {
  state = {
    allBots: [...botApi],
  }

  render() {
    return(
      <div className="ui four column grid">
        <div className="row">
           {this.props.allBots.map((bot) =>
              <BotSpecs
              // Bot = {bot}
              // id = {bot.id}
              // name = {bot.name}
              // health = {bot.health}
              // damage = {bot.damage}
              // armor = {bot.armor}
              // botClass = {bot.bot_class}
              // catchphrase = {bot.catchphrase}
              // avatar = {bot.avatar_url}

              addBot = {this.props.addBot}
              
            />
           )}
           </div>
           Collection of all bots
          </div>
        )
        
          
             
  }
}

export default BotCollection;
