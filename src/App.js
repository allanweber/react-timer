import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.scss";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";

//Add keyboard supports for space bar, enter, direction, scroll above the number
// Add sound for tick and end time

const App = () => {
  const [timer, setTimer] = useState(3);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    const timerTick = () => {
      if (running && timer > 0) {
        setTimer(timer - 1);
      }
      if (timer === 1) {
        setRunning(false);
      }
    };
    const interval = setInterval(timerTick, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer, running]);

  const formatTimeLeft = () => {
    const minutes = Math.floor(timer / 60);
    let seconds = timer % 60;
    if (seconds < 10) {
      seconds = `0${seconds}`;
    }
    return `${minutes}:${seconds}`;
  };

  const toggleRunning = () => {
    setRunning(!running);
  };

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{formatTimeLeft()}</h1>
      <div className="buttons">
        <button className={running ? "isRunning" : ""} onClick={toggleRunning}>
          {running ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  );
};

export default App;
