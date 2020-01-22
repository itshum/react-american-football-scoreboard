//TODO: STEP 1 - Importing the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import Giants from "./Components/Giants";

function App() {
  //TODO: STEP 2 - Establish your application's state with some useState hooks.  You'll need one for the home score and another for the away score.

  // I'm setting up variables arrays (array destructuring) for both home and away teams and setting up initial value to 0 
  const [GiantsScore, setGiantsScore] = useState(0);
  const [CowboysScore, setCowboysScore] = useState(0);

// These are both arrays, first item 'GiantsScore' is the state, and second item 'setGiantsScore' is how to update said state. So for example, score is initially set to zero will update update to seven every time I click on Touchdown button.


  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
        <Giants GiantsScore = {GiantsScore} Homes = {"home"}/> 
          {/* <div className="home">
            <h2 className="home__name">Giants</h2>

            
  
  <div className="home__score"> { GiantsScore }</div> 
          </div> */}
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Cowboys</h2>
  <div className="away__score"> {CowboysScore } </div>
          </div>
        </div>
        <BottomRow />
      </section>
      <section className="buttons">
        <div className="homeButtons">
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          

          <button className="homeButtons__touchdown" onClick={() => setGiantsScore(GiantsScore + 7)}>Home Touchdown</button>

          <button className="homeButtons__fieldGoal" onClick={() => setGiantsScore(GiantsScore + 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => setCowboysScore(CowboysScore + 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => setCowboysScore(CowboysScore + 3)}>Away Field Goal</button>
        </div>
      </section>
    </div>
  );
}

export default App;
// export this so you can use this file. 
