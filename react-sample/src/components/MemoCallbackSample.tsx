import React, { useState, useCallback } from "react";

type ButtonProps = {
  onClick: () => void;
};

function DecrementButton(props: ButtonProps) {
  const { onClick } = props;
  console.log("DecrementButtonが再描画されました");

  return <button onClick={onClick}>DecrementButton</button>;
}

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("IncrementButtonが再描画されました");

  return <button onClick={onClick}>IncrementButton</button>;
});

const DoubleButton = React.memo((props: ButtonProps) => {
  const { onClick } = props;
  console.log("DoubleButtonが再描画されました");

  return <button onClick={onClick}>DoubleButton</button>;
});

function MemoCallbackSample() {
  const [count, setCount] = useState(0);
  const decrement = () => {
    setCount((c) => c - 1);
  };
  const increment = () => {
    setCount((c) => c + 1);
  };

  const double = useCallback(() => {
    setCount((c) => c * 2);
  }, []);

  return (
    <div>
      <p>Count: {count} </p>
      <DecrementButton onClick={decrement} />
      <IncrementButton onClick={increment} />
      <DoubleButton onClick={double} />
    </div>
  );
}

export default MemoCallbackSample;
