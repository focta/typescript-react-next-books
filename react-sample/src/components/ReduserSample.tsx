import React, { useReducer } from "react";

type Action = "DECREMENT" | "INCREMENT" | "DOUBLE" | "RESET";

// 1. 値が変化したときの動作を変数に格納する
const reduser = (currentCount: number, action: Action) => {
  switch (action) {
    case "INCREMENT":
      return currentCount + 1;
    case "DECREMENT":
      return currentCount - 1;
    case "DOUBLE":
      return currentCount * 2;
    case "RESET":
      return 0;
    default:
      return currentCount;
  }
};

type CounterProps = {
  initialValue: number;
};

export default function Counter(props: CounterProps) {
  const { initialValue } = props;
  // reduserで、第1引数にアクションを、第2引数に初期値を設定してく
  const [count, dispatch] = useReducer(reduser, initialValue);

  return (
    <div>
      <p>Count: {count} </p>
      <button onClick={() => dispatch("DECREMENT")}>-</button>
      <button onClick={() => dispatch("INCREMENT")}>+</button>
      <button onClick={() => dispatch("DOUBLE")}>×2</button>
      <button onClick={() => dispatch("RESET")}>Reset</button>
    </div>
  );
}
