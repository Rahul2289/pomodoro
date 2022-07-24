import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import { StateContext } from "./../../../context/StateProvider";

const Clock = () => {
  const { time, setTime, isActive, setIsActive, initTime } =
    useContext(StateContext);

  useEffect(() => {
    if (isActive && time > 0) {
      const interval = setInterval(() => {
        setTime((time) => time - 1);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [time, isActive, setTime]);

  const getTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    return `${min < 10 ? "0" + min : min}:${sec < 10 ? "0" + sec : sec}`;
  };

  const toogleClock = () => {
    setIsActive(!isActive);
  };

  const resetTime = () => {
    setTime(initTime);
    setIsActive(false);
  };
  return (
    <ClockContainer>
      <TimerText>{getTime(time)}</TimerText>
      <StatrtPauseButton onClick={toogleClock}>
        {isActive ? "pause" : "start"}
      </StatrtPauseButton>
      {time === 0 && <ResetButton onClick={resetTime}>reset</ResetButton>}
    </ClockContainer>
  );
};

export default Clock;

const ClockContainer = styled.div`
  display: grid;
  place-items: center;
`;
const TimerText = styled.h1`
  font-size: 9rem;
`;
const StatrtPauseButton = styled.button`
  all: unset;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  letter-spacing: 0.7rem;
  cursor: pointer;
`;
const ResetButton = styled(StatrtPauseButton)`
  color: red;
  font-size: 2rem;
`;
