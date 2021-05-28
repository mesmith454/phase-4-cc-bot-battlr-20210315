import React, { Component } from "react";
import BotSpecs from '../components/BotSpecs';
// const botApi = "http://localhost:6001"

class BotCollection extends Component {
  // state ={
  //   allBots: []
  // }

  render() {
    return(
      <div className="ui four column grid">
        <div className="row">
           {this.props.bots.map((bot) =>
              <BotSpecs
              bot = {bot}
              key = {bot.id}
              handleRec = {this.props.handleRec}
              handleDis = {this.props.handleDis}
              />
            )}
           </div>
           Collection of all bots
          </div>
        )        
  }
}

export default BotCollection;
