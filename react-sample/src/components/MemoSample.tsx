import React, { useState } from "react";

type FizzProps = {
  isFizz: boolean;
};

function Fizz(props: FizzProps) {
  const { isFizz } = props;
  console.log(`Fizzが再描画されました, isFizz=${isFizz}`);
  return <span>{isFizz ? "Fizz" : ""}</span>;
}

type BuzzPorps = {
  isBuzz: boolean;
};

const Buzz = React.memo((props: BuzzPorps) => {
  const { isBuzz } = props;
  console.log(`Buzzが再描画されました, isBuzz=${isBuzz}`);
  return <span>{isBuzz ? "Buzz" : ""}</span>;
});

export default function MemoParent() {
  const [count, setCount] = useState(1);
  const isFizz = count % 3 === 0;
  const isBuzz = count % 5 === 0;

  console.log(`Parentが再描画されました, count=${count}`);
  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>+1</button>
      <p>{`現在のカウント: ${count}`}</p>
      <p>
        <Fizz isFizz={isFizz} />
        <Buzz isBuzz={isBuzz} />
      </p>
    </div>
  );
}
