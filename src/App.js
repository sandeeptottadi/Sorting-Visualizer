import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "./container";
import { useEffect, useRef, useState } from "react";
import { animate_bubbleSort } from "./algorithms/bubbleSort";

function App() {
  const [range, setRange] = useState(50);
  const [algorithm, setAlgorithm] = useState("");
  const [array, setArray] = useState([]);
  const [t, setTime] = useState();
  const input_range = useRef("input_range");
  function inputChanged() {
    setRange(input_range.current.value);
  }
  function setAlgo(algo) {
    setAlgorithm(algo);
  }
  function sort() {
    if (!algorithm) {
      alert("Please select a algorithm");
      return;
    }
    switch (algorithm) {
      case "Merge":
        alert(algorithm);
        break;
      case "Bubble":
        animate_bubbleSort(array, t);
        break;
      case "Quick":
        alert(algorithm);
        break;
      case "Insertion":
        alert(algorithm);
        break;
      case "Selection":
        alert(algorithm);
        break;
    }
  }
  function arrayChanged(newArray, time) {
    setArray(newArray);
    setTime(time);
  }
  return (
    <div className="App">
      <nav className="nav">
        <div className="title">Sorting Visualizer</div>
        <div className="elements" style={{ width: "fit-content" }}>
          <input
            ref={input_range}
            type="range"
            min="5"
            max="100"
            defaultValue={50}
            onChange={() => inputChanged()}
          />
          <output id="rangevalue">: {range}</output>
          <div className="nav-element sort" onClick={() => sort()}>
            {algorithm} sort!
          </div>
          <div className="nav-element" onClick={() => setAlgo("Merge")}>
            Merge Sort!
          </div>
          <div className="nav-element" onClick={() => setAlgo("Bubble")}>
            Bubble Sort!
          </div>
          <div className="nav-element" onClick={() => setAlgo("Quick")}>
            Quick Sort!
          </div>
          <div className="nav-element" onClick={() => setAlgo("Insertion")}>
            Insertion Sort!
          </div>
          <div className="nav-element" onClick={() => setAlgo("Selection")}>
            Selection Sort!
          </div>
        </div>
      </nav>
      <Container
        arrayChanged={(newArray, time) => arrayChanged(newArray, time)}
        range={range}
      ></Container>
    </div>
  );
}

export default App;
