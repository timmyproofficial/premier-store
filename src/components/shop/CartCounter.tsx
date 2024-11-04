import { useState } from 'react';

const CartCounter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="flex items-center gap-6">
      <button
        disabled={count === 0}
        onClick={() => setCount((count) => count - 1)}
        className="cart-dec-btn cart-contrl"
      >
        -
      </button>
      <p className="font-bold">{count}</p>
      <button
        onClick={() => setCount((count) => count + 1)}
        className="cart-inc-btn cart-contrl"
      >
        +
      </button>
    </div>
  );
};

export default CartCounter;
