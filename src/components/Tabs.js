import styled, { css } from "styled-components";
import { useContext } from "react";
import { StateContext } from "./context/StateProvider";

const TabsArr = ["work", "short break"];

const Tabs = () => {
  const { activeTab, setActiveTab } = useContext(StateContext);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <TagsContainer>
      {TabsArr.map((tab, i) => (
        <Tab
          activeTab={activeTab === i}
          key={i}
          onClick={() => handleTabClick(i)}
        >
          {tab}
        </Tab>
      ))}
    </TagsContainer>
  );
};

export default Tabs;

const TagsContainer = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  height: 5rem;
  width: 30rem;
  margin: 0 auto;
  border-radius: 5rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;
const Tab = styled.div`
  all: unset;
  padding: 0.5rem;
  flex: 1;
  border-radius: 5rem;
  text-align: center;
  font-size: 2rem;
  cursor: pointer;

  ${({ activeTab }) =>
    activeTab &&
    css`
      background-color: ${(props) => props.theme.colors.primary};
    `}
`;
