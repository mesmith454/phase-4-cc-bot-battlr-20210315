ERRORS UNABLE TO RESOLVE BEFORE SUBMIT
XBotCollection - line 13 - props not defined?-R!
XYourBotArmy - module not found/failed to compile: can't resolce ./components/BotCard-R!

filled in functions in app.js to at least practice writing them

addBot scratch code:
        method2 : didn't work
 // if(!this.state.myBots.find(bot => bot === newBot)){
    //   const botExists = this.state.bots.find(bot => bot = newBot)
    //   this.setState((state)=> ({
    //     myArmy: [...state.myBots, botExists]
    //   }))
    // }

        method1 : didn't work
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