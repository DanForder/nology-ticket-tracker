import Counter from "../Counter/Counter";
import "./Ticket.scss";

const Ticket = ({ name, role }) => {
  return (
    <div className="ticket">
      <p data-title={name} className="ticket__name">
        {name}
      </p>
      <p className="ticket__role">{role}</p>
      <Counter />
    </div>
  );
};

export default Ticket;
