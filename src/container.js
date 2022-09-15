import React, { useEffect, useState } from "react";

export const Container = React.memo((props) => {
  const [array, setArray] = useState([]);
  const [width, setWidth] = useState();
  const [time, setTime] = useState(Math.floor((10 / props.range) * 40) * 10);
  useEffect(() => {
    buildArray();
  }, [props.range]);
  function buildArray() {
    let newArray = [];
    for (let i = 0; i < props.range; i++) {
      newArray.push(Math.floor(Math.random() * (110 - 5) + 5));
    }
    setWidth((window.innerWidth / 2 - props.range * 2) / props.range);
    props.arrayChanged(newArray, time);
    setArray(newArray);
    setTime(Math.ceil((10 / props.range) * 40) * 10);
    reset();
  }
  function reset() {
    for (let i = 0; i < array.length; i++) {
      document.getElementById(`index-${i}`).style.backgroundColor = "#6399f1";
    }
  }
  console.log(Math.floor(window.innerHeight));
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
            id={`index-${idx}`}
            key={idx}
            className="block"
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
          ></div>
        );
      })}
    </div>
  );
});
