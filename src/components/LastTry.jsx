import React, { useState, useEffect } from "react";

export default function LastTry() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showTime, setShowTime] = useState(false);
  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTime((prevValue) => prevValue + 1);
      }, 1000);
    } else {
      clearInterval(timer);
    }
    console.log("time useEffect", time);
    // formatTime(time);
    return () => clearInterval(timer);
  }, [isRunning]);
  // formatTime(time);

  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };
  const handleReset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    setShowTime(
      `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`
    );
    // return `${hours < 10 ? "0" : ""}${hours}:${
    //   minutes < 10 ? "0" : ""
    // }${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };
  useEffect(() => {
    formatTime(time);
  });
  console.log("time :", time);
  console.log("isRunning :", isRunning);
  console.log("showTime :", showTime);
  return (
    <div className="stopWatch">
      <h2 className="timer">{showTime}</h2>
      <div className="actions">
        <button className="start-stop" onClick={handleStartStop}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}
