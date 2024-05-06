import React, {useState} from "react";
import BotCard from "./BotCard.js"
import BotSpecs from "./BotSpecs.js";

function BotCollection({bots, setBots, botsArmy, setBotsArmy}) {
  // Your code here
  const [selectedBot, setSelectedBot] = useState(null);


  //This updates the DOM when a bot is deleted permanently, to remove the deleted bots from the collection
  const handleDelete = (botId) => {
    const updatedBots = bots.filter((bot) => bot.id !== botId);
    setBots(updatedBots);
  };

  //This enables one to select a bot, and the rest is handled in the BotCard component
  const handleBotSelect = (bot) => {
    setSelectedBot(bot);
  };

  //Both of these handle operations in BotSpecs 
  //This adds a bot into the botsArmy array when the 'Enlist' button is clicked
  const handleEnlist = (bot) => {
    setBotsArmy([...botsArmy, bot]);
  };
  //This one enables one to go back to the bot list when the 'Go Back button is clicked
  const handleGoBack = () => {
    setSelectedBot(null);
  };


  return (
    <div className="ui four column grid">
      <div className="row">
        Collection of all bots (Click on the image)
        {selectedBot ? (
          <BotSpecs bot={selectedBot} botsArmy={botsArmy}  setBotsArmy={setBotsArmy} onGoBack={handleGoBack} onEnlist={handleEnlist} />
        ) : 
        bots && bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} botsArmy={botsArmy} setBotsArmy={setBotsArmy}  onDelete={() => handleDelete(bot.id)} onBotSelect={() => handleBotSelect(bot)}/>))}


      </div>
    </div>
  );
}

export default BotCollection;
