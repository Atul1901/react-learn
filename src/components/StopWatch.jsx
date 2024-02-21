import { useState, useRef, useEffect } from "react";

export function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true);

  const timer = useRef();

  useEffect(() => {
    if (running) {
      timer.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(timer.current);
  }, [running]);

  //section trying to create start button-----------
  // const intervalRef = useRef(null);
  // const handleStart = () => {
  //   intervalRef.current = setInterval(() => {
  //     setTime((pre) => pre + 1);
  //   }, 1000);
  //   return () => clearInterval(timer.current);
  // };

  // const handleStop = () => {
  //   if (running) clearInterval(timer.current);
  //   setRunning(!running);
  // };
  //---------------------------------------------

  return (
    <div className="stopWatch">
      <h2 className="timer">{format(time)}</h2>
      <div className="actions">
        <button onClick={() => setTime(0)}>Restart</button>
        <button
          onClick={() => {
            if (running) clearInterval(timer.current);
            setRunning(!running);
          }}
        >
          {running ? "Stop" : "Resume"}
        </button>
      </div>
    </div>
  );
}

const format = (time) => {
  let hours = Math.floor((time / 60 / 60) % 24);
  let minutes = Math.floor((time / 60) % 60);
  let seconds = Math.floor(time % 60);

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds;
};
