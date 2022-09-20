import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import { Container } from "./container";
import { useEffect, useRef, useState } from "react";
import { bubbleSort } from "./algorithms/Ascending/bubbleSort";
import { bubbleSort_d } from "./algorithms/Descending/bubbleSort";
import { animate_bubbleSort } from "./animations/bubbleSortAnimation";
import { mergeSort } from "./algorithms/Ascending/mergeSort";
import { mergeSort_d } from "./algorithms/Descending/mergeSort";
import { animateMergeSort } from "./animations/mergeSortAnimation";
import { selectionSort } from "./algorithms/Ascending/selectionSort";
import { selectionSort_d } from "./algorithms/Descending/selectionSort";
import { selectionSortAnimation } from "./animations/selectionSortAnimation";
import { quickSort } from "./algorithms/Ascending/quickSort";
import { quickSort_d } from "./algorithms/Descending/quickSort";
import { quickSortAnimation } from "./animations/quickSortAnimations";

function App() {
  const [range, setRange] = useState(60);
  const [order, setOrder] = useState("Ascending");
  const [algorithm, setAlgorithm] = useState("");
  const [array, setArray] = useState([]);
  const [count, setCount] = useState(0);
  const [t, setTime] = useState();
  const input_range = useRef("input_range");
  function inputChanged() {
    setRange(input_range.current.value);
  }
  function setAlgo(algo) {
    setAlgorithm(algo);
  }
  async function sort() {
    if (!algorithm) {
      alert("Please select a algorithm");
      return;
    }
    if (order === "Ascending") {
      switch (algorithm) {
        case "Merge":
          let [newArray, animations] = mergeSort(array);
          animateMergeSort(animations, newArray, t);
          break;
        case "Bubble":
          animate_bubbleSort(bubbleSort(array), t);
          break;
        case "Quick":
          await quickSortAnimation(quickSort(array), t, array);
          break;
        case "heap":
          alert(algorithm);
          break;
        case "Selection":
          selectionSortAnimation(selectionSort(array), t);
          break;
      }
    } else {
      switch (algorithm) {
        case "Merge":
          let [newArray, animations] = mergeSort_d(array);
          animateMergeSort(animations, newArray, t);
          break;
        case "Bubble":
          animate_bubbleSort(bubbleSort_d(array), t);
          break;
        case "Quick":
          await quickSortAnimation(quickSort_d(array), t, array);
          break;
        case "heap":
          alert(algorithm);
          break;
        case "Selection":
          selectionSortAnimation(selectionSort_d(array), t);
          break;
      }
    }
  }
  function arrayChanged(newArray, time) {
    setArray(newArray);
    setTime(time);
  }
  function setorder() {
    order === "Ascending" ? setOrder("Descending") : setOrder("Ascending");
  }
  return (
    <div className="App">
      <nav className="nav">
        <div className="title">Sorting Visualizer</div>
        <div className="elements" style={{ width: "fit-content" }}>
          <div
            className="nav-element reset"
            onClick={() => setCount(count + 1)}
          >
            Reset
          </div>
          <input
            ref={input_range}
            type="range"
            min="4"
            max="100"
            defaultValue={60}
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
          <div className="nav-element" onClick={() => setAlgo("heap")}>
            Heap Sort!
          </div>
          <div className="nav-element" onClick={() => setAlgo("Selection")}>
            Selection Sort!
          </div>
          <div onClick={() => setorder()} className="nav-element switch">
            <div>{order}</div>
          </div>
        </div>
      </nav>
      <Container
        arrayChanged={(newArray, time) => arrayChanged(newArray, time)}
        range={range}
        count={count}
      ></Container>
    </div>
  );
}

export default App;
