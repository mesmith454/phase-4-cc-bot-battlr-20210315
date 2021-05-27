import React, { Component } from "react";
import BotCard from "../components/BotCard.js";

//simplify stupid
class YourBotArmy extends Component {
  // state = {
  //   myBots: [],
  // }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.props.bots.map((bot) => 
              <BotCard
                bot={bot.id}
                release = {this.props.releaseBot}
                discharge = {this.props.dischargeBot} 
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
