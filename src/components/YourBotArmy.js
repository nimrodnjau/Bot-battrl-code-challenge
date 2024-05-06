import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({botsArmy, setBotsArmy}) {
//This updates the list on the DOM when removing a bot, so that when the image of the bot in botsArmy array is clicked, the bot is removed from the array
  function handleRemove (botId) {
      const updatedBots = botsArmy.filter((bot) => bot.id !== botId);
      setBotsArmy(updatedBots);
  }

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          Your Bot Army
          {Array.isArray(botsArmy) && botsArmy.map(bot => (
            <BotCard key={bot.id} bot={bot} onRemove={handleRemove}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
