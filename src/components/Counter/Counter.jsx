import "./_Counter.scss";

const Counter = () => {
  return (
    <div className="counter">
      <p className="counter__score">0</p>
      <button className="counter__button">-</button>
      <button className="counter__button">+</button>
    </div>
  );
};

export default Counter;
