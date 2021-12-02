import TicketContainer from "./components/TicketContainer/TicketContainer";
import ToggleSwitch from "./components/ToggleSwitch/ToggleSwitch";
import "./styles/main.scss";
import tickets from "./data/tickets";
import { useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={"app " + (isDark ? "dark-mode" : "light-mode")}>
      <ToggleSwitch handleToggle={handleToggle} />
      <h1>Ticket Tracker</h1>
      <TicketContainer tickets={tickets} />
    </div>
  );
};

export default App;
