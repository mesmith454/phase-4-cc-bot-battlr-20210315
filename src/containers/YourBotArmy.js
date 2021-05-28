import React, { Component } from "react";
import BotCard from "../components/BotCard.js";

//simplify stupid
class YourBotArmy extends Component {
  state = {
    myBots: [],
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map((bot) => 
              <BotCard
                bot = {bot}
                key={bot.id}
                handleRel= {this.props.handleRel}
                handleDis = {this.props.handleDis} 
              />
            )}
            Your Bot Army
          </div>
        </div>
      </div>
    )
  }
}

export default YourBotArmy;
