import Ticket from "../Ticket/Ticket";
import "./_TicketContainer.scss";

export const TicketContainer = ({ tickets }) => {
  return (
    <main className="ticket-container">
      <Ticket />
      <Ticket />
      <Ticket />
    </main>
  );
};

export default TicketContainer;
