import TicketContainer from "./components/TicketContainer/TicketContainer";
import "./styles/main.scss";
import tickets from "./data/tickets";

const App = () => {
  return (
    <>
      <h1>Ticket Tracker</h1>
      <TicketContainer tickets={tickets} />
    </>
  );
};

export default App;
