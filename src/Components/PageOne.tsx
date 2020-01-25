import React from "react";

interface Props {
  handleSetStep: Function;
}

function PageOne(props: Props) {
  const { handleSetStep } = props;
  return (
    <>
      Page One<button onClick={() => handleSetStep("pageTwo")}>Click Me</button>
    </>
  );
}

export { PageOne };
