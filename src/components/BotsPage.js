import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
  const [bots, setBots] = useState([])
  const [botsArmy, setBotsArmy] = useState([])
  //This fetches data from the server, which will be displayed onto the site from BotCollection component
  useEffect(() => {
    fetch("https://bot-battrl-code-challenge.onrender.com/bots")
    .then(response => response.json())
    .then(data => setBots(data))
  },[])



 
   console.log(botsArmy)
  return (
    <div>
      <YourBotArmy bots={bots}  botsArmy={botsArmy} setBotsArmy={setBotsArmy}/>
      <BotCollection bots={bots} setBots={setBots}  botsArmy={botsArmy}  setBotsArmy={setBotsArmy}/>
    </div>
  )
}

export default BotsPage;
