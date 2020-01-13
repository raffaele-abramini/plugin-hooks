import React, { useState, useEffect } from "react";

export const CompoWithHooks = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Rerendered!");
  });
  useEffect(() => {
    console.log("Rerendered on count.");
  }, [count]);

  return (
    <div>
      <h1>Essential click / rerender counter!!</h1>
      <strong>Count {count}</strong>
      <hr />
      <button onClick={() => setCount(_count => ++_count)}>increase!</button>
    </div>
  );
};
