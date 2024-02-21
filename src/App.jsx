import { Timer } from "./components/Timer";
import { StopWatch } from "./components/StopWatch";
import LastTry from "./components/LastTry.jsx";

// import Watch from "./components/Watch";

function App() {
  return (
    <div className="watch">
      <header>
        <h1>STOPWATCH</h1>
      </header>
      {/* <Timer></Timer> */}
      {/* <StopWatch></StopWatch> */}
      {/* <Watch></Watch> */}
      <LastTry></LastTry>
    </div>
  );
}

export default App;
