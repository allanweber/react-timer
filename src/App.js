import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import logo from "./logo.svg";
import "./App.scss";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import switchOff from "./assets/switch-off.mp3";
import fanfare from "./assets/fanfare.mp3";

//Add keyboard supports for space bar, enter, direction, scroll above the number

const App = () => {
  const [timer, setTimer] = useState(7);
  const [running, setRunning] = useState(false);
  const [finishing] = useSound(switchOff);
  const [finished] = useSound(fanfare);

  useEffect(() => {
    const timerTick = () => {
      if (running) {
        if (timer > 0) {
          setTimer(timer - 1);
        }
      }
      if (timer === 0) {
        setRunning(false);
      }
    };

    const interval = setInterval(timerTick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer, running]);

  useEffect(() => {
    const playFinishing = () => {
      if (running) {
        if (timer <= 5 && timer > 1) {
          finishing();
        }
      }
    };

    const interval = setInterval(playFinishing, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer, running, finishing]);

  useEffect(() => {
    const playFinish = () => {
      if (timer === 0) {
        finished();
      }
    };
    playFinish();
  }, [timer, finished]);

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
