import { useState } from "react";
import TicketContainer from "./components/TicketContainer/TicketContainer";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import tickets from "./data/tickets";
import "./styles/main.scss";

const App = () => {
  const [isDark, setIsDark] = useState(true);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={"app " + (isDark ? "dark-mode" : "light-mode")}>
      <ToggleSwitch handleToggle={handleToggle} />
      <h1>Ticket Tracker
        
      </h1>
      <TicketContainer tickets={tickets} />
    </div>
  );
};

export default App;
