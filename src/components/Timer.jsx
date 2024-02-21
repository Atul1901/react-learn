import { useState, useRef, useEffect } from "react";

export function Timer() {
  const [time, setTime] = useState(0);
  const [now, setNow] = useState(null);
  const [running, setRunning] = useState(false); //was true
  //new usestate
  const [lapsedTime, setLapsedTime] = useState(0);

  const intervalRef = useRef(null);

  //changes to make it work
  useEffect(() => {
    if (running) {
      intervalRef.current = setInterval(() => {
        setTime((pre) => pre + 1);
      }, 1000);
    }
    return () => clearInterval(intervalRef.current);
  }, [running]);
  //-------------------------------

  const handleStart = () => {
    // setTime(Date.now);
    // setNow(Date.now);
    // intervalRef.current = setInterval(() => {
    //   setTime(Date.now());
    // }, 10);
    setRunning(!running);
  };
  const handleStop = () => {
    clearInterval(intervalRef.current);
  };

  //creating a reset function
  const handleReset = () => {
    setRunning(false);
    setLapsedTime(0);
  };

  // const handleResume = () => {
  //   now = Date.now();

  // };
  let timePassed = (time - now) / 1000;
  return (
    <div className="stopWatch">
      <h2 className="timer">Stopwatch:{timePassed.toFixed(3)}</h2>
      <div className="actions">
        <button onClick={handleStart}>
          {/* {now === null ? "Start" : "Restart"} */}
          Start
        </button>
        <button
          onClick={() => {
            if (running) clearInterval(intervalRef.current);
            setRunning(!running);
            console.log("hi");
          }}
        >
          {running ? "Stop" : "Resume"}
        </button>
      </div>
    </div>
  );
}
