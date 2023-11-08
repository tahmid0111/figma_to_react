import { useState } from "react";

const ServiceTwo = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h3>Count: {count}</h3>
      <button className="btn btn-primary" onClick={incrementCount}>Increment Count</button>
    </div>
  )
}

export default ServiceTwo
