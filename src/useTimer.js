import { useState, useRef } from "react";

const useTimer = (ini = 0) => {
  const [time, setTime] = useState(ini);
  const [history, setHistory] = useState([]);
  const active = useRef();
  const refInterval = useRef();

  const startTimer = () => {
    refInterval.current = setInterval(() => {
      setTime((count) => count + 1);
    }, 1000);
    active.current.disabled = true;
  };
  const stopTimer = () => {
    clearInterval(refInterval.current);
    active.current.disabled = false;
  };
  const resetTimer = () => {
    stopTimer();
    setTime(ini);
    active.current.disabled = false;
    setHistory([]);
  };

  const splitTimer = () => {
    if (!time) return false;
    setHistory([...history, time]);
  };

  return {
    time,
    startTimer,
    stopTimer,
    resetTimer,
    splitTimer,
    history,
    active,
  };
};
export default useTimer;
