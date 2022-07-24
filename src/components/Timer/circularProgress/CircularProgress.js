import styled from "styled-components";
import Clock from "./Clock/Clock";

import { useContext, useEffect } from "react";
import { StateContext } from "./../../context/StateProvider";

const CircularProgress = () => {
  const { progress, setProgress, time, initTime } = useContext(StateContext);
  useEffect(() => {
    setProgress(time / (initTime / 100));
  }, [time, initTime, setProgress]);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle>
        <Clock />
      </InnerCircle>
    </OuterCircle>
  );
};

export default CircularProgress;

const OuterCircle = styled.div`
  width: 30rem;
  height: 30rem;
  background: red;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    red ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;
const InnerCircle = styled.div`
  width: 28rem;
  height: 28rem;
  background: ${(props) => props.theme.colors.secondary};
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
