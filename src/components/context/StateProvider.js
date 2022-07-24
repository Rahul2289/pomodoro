import React, { useState, createContext, useEffect } from "react";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [workTime, setWorkTime] = useState(25 * 60);
  const [breakTime, setBreakTime] = useState(5 * 60);

  const [initTime, setInitTime] = useState(0);

  const [activeTab, setActiveTab] = useState(0);
  const [progress, setProgress] = useState(55);
  const [time, setTime] = useState(10);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    switch (activeTab) {
      case 0:
        setTime(workTime);
        setInitTime(workTime);
        break;
      case 1:
        setTime(breakTime);
        setInitTime(breakTime);
        break;
      default:
        break;
    }
  }, [activeTab, breakTime, workTime]);

  return (
    <StateContext.Provider
      value={{
        isActive,
        setIsActive,
        time,
        setTime,
        activeTab,
        setActiveTab,
        progress,
        setProgress,
        setWorkTime,
        initTime,
        setBreakTime,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
