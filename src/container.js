import React, { useEffect, useState } from "react";

export const Container = React.memo((props) => {
  const [array, setArray] = useState([]);
  const [width, setWidth] = useState();
  const [time, setTime] = useState(Math.floor((10 / props.range) * 40) * 5);
  useEffect(() => {
    buildArray();
  }, [props.range, props.count]);
  function buildArray() {
    if (document.getElementById("reset").classList.contains("disabled")) {
      return;
    }
    let newArray = [];
    for (let i = 0; i < props.range; i++) {
      newArray.push(Math.floor(Math.random() * (110 - 5) + 5));
    }
    if (window.innerWidth > 900) {
      setWidth((window.innerWidth / 2.7 - props.range * 2) / props.range);
    } else {
      setWidth((window.innerWidth / 1.8 - props.range * 2) / props.range);
    }
    props.arrayChanged(newArray, time);
    setArray(newArray);
    setTime(Math.ceil((10 / props.range) * 40) * 5);
    reset();
  }
  function reset() {
    if (document.getElementById("reset").classList.contains("disabled")) {
      return;
    } else {
      for (let i = 0; i < array.length; i++) {
        document.getElementById(`index-${i}`).style.backgroundColor = "#6399f1";
      }
    }
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
      }}
    >
      {array.map((value, idx) => {
        return (
          <div
            className="array-bar block"
            id={`index-${idx}`}
            key={idx}
            style={{
              height:
                window.innerWidth < 450
                  ? `${Math.floor(value) * 3}px`
                  : window.innerWidth < 600
                  ? `${Math.floor(value) * 4}px`
                  : `${Math.floor(value) * 5}px`,
              width: `${width}px`,
              marginLeft: "3px",
            }}
          >
            {/* {props.range < 15 ? <div>{value}</div> : <div></div>} */}
          </div>
        );
      })}
    </div>
  );
});
