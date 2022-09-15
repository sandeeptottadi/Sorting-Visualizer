import React, { useEffect, useState } from "react";

export const Container = React.memo((props) => {
  const [array, setArray] = useState([]);
  const [time, setTime] = useState(Math.floor((10 / props.range) * 40) * 10);
  useEffect(() => {
    buildArray();
  }, [props.range]);
  function buildArray() {
    let newArray = [];
    for (let i = 0; i < props.range; i++) {
      newArray.push(Math.floor(Math.random() * (110 - 5) + 5));
    }
    props.arrayChanged(newArray, time);
    setArray(newArray);
    setTime(Math.floor((10 / props.range) * 40) * 10);
    reset();
  }
  function reset() {
    for (let i = 0; i < array.length; i++) {
      document.getElementById(`index-${i}`).style.backgroundColor = "#6399f1";
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
            id={`index-${idx}`}
            key={idx}
            className="block"
            style={{
              height: `${Math.floor(value) * 5}px`,
              width: `${(10 / props.range) * 50}px`,
              marginLeft: "3px",
            }}
          ></div>
        );
      })}
    </div>
  );
});
