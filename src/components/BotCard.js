import React from "react";


const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, onRemove, onDelete, onBotSelect }) {

  
 
  //Once the bot is selected this function determins whether to remove or add to the botsArmy depending on whether it is already in the array
  const handleBotSelect = () => {
    if (onRemove) {
      onRemove(bot.id);
    } else {
      onBotSelect(bot.id);
    }
  };
  



  //This handles the delete functionality on the server once the 'x' button is clicked
  function handleDeleteClick () {
    fetch(`https://bot-battrl-code-challenge.onrender.com/bots/${bot.id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => onDelete(bot))

      .catch((error) => {
        console.error("Error:", error);
      });
    }



  return (
    <div className="ui column">
      <div
        className="ui card"
        key={bot.id}
       
      >
        <div className="image"  onClick={handleBotSelect}>
          <img alt="oh no!" src={bot.avatar_url} />
          
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat" />
            {bot.health}
          </span>

          <span>
            <i className="icon lightning" />
            {bot.damage}
          </span>
          <span>
            <i className="icon shield" />
            {bot.armor}
          </span>
          <span>
            <div className="ui center aligned segment basic">
              <button
                className="ui mini red button"
                onClick={handleDeleteClick}
              >
                x
              </button>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
}

export default BotCard;
