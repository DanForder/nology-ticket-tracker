import { useState } from "react";
import "./_Counter.scss";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count < 1) {
      return;
    }

    setCount(count - 1);
  };

  return (
    <div className="counter">
      <p className="counter__score">{count}</p>
      <button onClick={handleDecrement} className="counter__button">
        -
      </button>
      <button onClick={handleIncrement} className="counter__button">
        +
      </button>
    </div>
  );
};

export default Counter;
