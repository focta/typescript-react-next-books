import React, { useCallback, useState } from "react";
import ButtonSample from "./ButtonSample";

const usePopup = () => {
  const cb = useCallback((text: string) => {
    prompt(text);
  }, []);

  return cb;
};

type CountButtonProps = {
  label: string;
  maximum: number;
};

function CountButtonSample(props: CountButtonProps) {
  const { label, maximum } = props;

  const displayPopup = usePopup();

  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    const newCount = count + 1;
    setCount(newCount);

    if (newCount >= maximum) {
      displayPopup(`you've clicked ${newCount} times`);
    }
  }, [count, maximum]);

  const disabled = count >= maximum
  const text = disabled ? 'Can\'t click any more' : `you've clicked ${count} times`

  return (
    <ButtonSample disabled={disabled} onClick={onClick} label={label} text={text} />
  );
}

export default CountButtonSample;
