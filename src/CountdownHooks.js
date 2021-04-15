import React, { useEffect, useRef, useState } from "react";

const CountdownHooks = (props) => {
  const [seconds, setSeconds] = useState(props.startTime);
  const timer = useRef();

  useEffect(() => {
    setupCountdown(props.startTime);
    return () => clearInterval(timer.current);
  }, [props.startTime]);

  const setupCountdown = (startTime) => {
    setSeconds(startTime);
    if (startTime > 0) {
      timer.current = setInterval(() => {
        if (seconds > 0) {
          setSeconds((prev) => prev - 1);
        } else {
          clearInterval(timer.current);
        }
      }, 1000);
    }
  };

  return <div>{seconds}</div>;
};

export default CountdownHooks;
