import React from "react";

type ContainerProps = {
  title: string;
  children: React.ReactNode;
};

// コンポーネントが他のコンポーネントを内包したときに、propsを内包する要素にわたす方法を実装した
function ContainerSample(props: ContainerProps): JSX.Element {
  const { title, children } = props;

  return (
    <div style={{ background: "red" }}>
      <span>{title}</span>
      <div>{children}</div>
    </div>
  ); 
}

function Parent(): JSX.Element {
  return (
    <ContainerSample title="Hello">
      <p>ここの部分が背景色で囲まれます</p>
    </ContainerSample>
  )
}

export default Parent;
