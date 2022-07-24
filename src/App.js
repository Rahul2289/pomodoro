import styled from "styled-components";
import Tabs from "./components/Tabs";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <>
      <Title>Pomodore</Title>
      <Tabs />
      <Timer />
    </>
  );
}

export default App;

const Title = styled.h2`
  font-size: 5rem;
  text-align: center;
  padding: 2rem 0;
`;
