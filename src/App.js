import React, { useState, useEffect } from "react";
import useSound from "use-sound";

import logo from "./logo.svg";
import "./App.scss";
import { ReactComponent as Play } from "./assets/play.svg";
import { ReactComponent as Pause } from "./assets/pause.svg";
import switchOff from "./assets/switch-off.mp3";
import fanfare from "./assets/fanfare.mp3";

import formatTime from "./utils/format-time";
import useKeyBoard from "./utils/keyboard.effect";

//Add keyboard supports for space bar, enter, direction, scroll above the number

const App = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);
  const [finishing] = useSound(switchOff);
  const [finished] = useSound(fanfare);

  useEffect(() => {
    const timerTick = () => {
      if (running) {
        if (timer > 0) {
          setTimer(timer - 1);
        }
        if (timer <= 5 && timer > 1) {
          finishing();
        }
        if (timer === 1) {
          finished();
        }
        if (timer === 0) {
          setRunning(false);
        }
      }
    };

    const interval = setInterval(timerTick, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timer, running]);

  const toggleRunning = () => {
    setRunning(!running);
    return running;
  };

  const applyTime = (time) => {
    const value = timer + time;
    if (value >= 0) {
      setTimer(timer + time);
    }
  };

  useKeyBoard(toggleRunning, applyTime);

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>{formatTime(timer)}</h1>
      <div className="buttons">
        <button className={running ? "isRunning" : ""} onClick={toggleRunning}>
          {running ? <Pause /> : <Play />}
        </button>
      </div>
    </div>
  );
};

export default App;
