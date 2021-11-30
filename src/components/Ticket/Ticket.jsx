import "./_Ticket.scss";
import Counter from "../Counter/Counter";

const Ticket = () => {
  return (
    <div className="ticket">
      <p className="ticket__name">Barry</p>
      <p className="ticket__role">Absolute Legend</p>
      <Counter />
    </div>
  );
};

export default Ticket;
