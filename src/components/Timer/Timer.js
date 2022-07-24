import React from "react";
import styled from "styled-components";
import CircularProgress from "./circularProgress/CircularProgress";

const Timer = () => {
  return (
    <TimerContainer>
      <CircularProgress />
    </TimerContainer>
  );
};

export default Timer;

const TimerContainer = styled.div`
  width: 35rem;
  height: 35rem;
  background: ${(props) => props.theme.colors.secondary};
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
