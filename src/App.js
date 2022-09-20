import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
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
  const [disabled, setDisabled] = useState(false);
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
    document.getElementById("reset").classList.add("disabled");
    document.getElementById("sort").classList.add("disabled");
    let length;
    let animation_array;
    if (order === "Ascending") {
      switch (algorithm) {
        case "Merge":
          let [newArray, animations] = mergeSort(array);
          length = animations.length;
          animateMergeSort(animations, newArray, t);
          break;
        case "Bubble":
          animation_array = bubbleSort(array);
          length = animation_array.length;
          animate_bubbleSort(animation_array, t);
          break;
        case "Quick":
          animation_array = quickSort(array);
          length = animation_array.length;
          await quickSortAnimation(animation_array, t, array);
          break;
        case "heap":
          alert(algorithm);
          break;
        case "Selection":
          animation_array = selectionSort(array);
          length = animation_array.length;
          selectionSortAnimation(animation_array, t);
          break;
      }
    } else {
      switch (algorithm) {
        case "Merge":
          let [newArray, animations] = mergeSort_d(array);
          length = animations.length;
          animateMergeSort(animations, newArray, t);
          break;
        case "Bubble":
          animation_array = bubbleSort_d(array);
          length = animation_array.length;
          animate_bubbleSort(animation_array, t);
          break;
        case "Quick":
          animation_array = quickSort_d(array);
          length = animation_array.length;
          await quickSortAnimation(animation_array, t, array);
          break;
        case "heap":
          alert(algorithm);
          break;
        case "Selection":
          animation_array = selectionSort_d(array);
          length = animation_array.length;
          selectionSortAnimation(animation_array, t);
          break;
      }
    }
    console.log(length);
    setTimeout(() => {
      document.getElementById("reset").classList.remove("disabled");
      document.getElementById("sort").classList.remove("disabled");
    }, length * t);
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
            id="reset"
            className="nav-element reset"
            onClick={() =>
              document.getElementById("reset").classList.contains("disabled")
                ? ""
                : setCount(count + 1)
            }
          >
            Reset
          </div>
          <input
            ref={input_range}
            type="range"
            min="4"
            max="100"
            id="range"
            defaultValue={60}
            onChange={() =>
              document.getElementById("reset").classList.contains("disabled")
                ? (document.getElementById("range").value =
                    input_range.current.value)
                : inputChanged()
            }
          />
          <output id="rangevalue">: {range}</output>
          <div
            id="sort"
            className="nav-element sort"
            onClick={() =>
              document.getElementById("reset").classList.contains("disabled")
                ? ""
                : sort()
            }
          >
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
