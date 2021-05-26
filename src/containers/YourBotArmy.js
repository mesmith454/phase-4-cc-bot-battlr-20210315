import React, { Component } from "react";
import BotCard from "./components/BotCard";


class YourBotArmy extends Component {
  state = {
   
  }

  render() {
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {
              <BotCard
                // bot = {bot}
                // id = {bot.id}
                // name = {bot.name}
                // health = {bot.health}
                // damage = {bot.damage}
                // armor = {bot.armor}
                // botClass = {bot.bot_class}
                // catchphrase = {bot.catchphrase}
                // avatar = {bot.avatar_url}

                release = {this.props.releaseBot}
                discharge = {this.props.dischargeBot}


              />
            }
            Your Bot Army
          </div>
        </div>
      </div>
    );
  }
}

export default YourBotArmy;
