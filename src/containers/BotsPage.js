import React, { Component } from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy"

class BotsPage extends Component {
  //start here with your code for step one

  render() {
    return <div>
      <div>
        <YourBotArmy />
      </div>
      <div>
        <BotCollection />
      </div>
    </div>;
  }
}

export default BotsPage;
