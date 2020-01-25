import React from "react";

interface Props {
  handleSetStep: Function;
}

function PageTwo(props: Props) {
  const { handleSetStep } = props;
  return (
    <>
      Page Two<button onClick={() => handleSetStep("pageOne")}>Click Me</button>
    </>
  );
}

export { PageTwo };
