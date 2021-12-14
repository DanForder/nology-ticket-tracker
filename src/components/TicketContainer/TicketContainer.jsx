import Ticket from "../Ticket/Ticket";
import "./TicketContainer.scss";

export const TicketContainer = ({ tickets }) => {
  return (
    <main className="ticket-container">
      {tickets.map(({ name, role }, index) => (
        <Ticket name={name} role={role} key={index} />
      ))}
    </main>
  );
};

export default TicketContainer;
