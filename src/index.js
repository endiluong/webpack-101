import React, { useState } from "react";
import { render } from "react-dom";
function App() {
  const [state, setState] = useState("Click");

  return (
    <button
      onClick={() => {
        setState("Clicked");
      }}
    >
      {state}
    </button>
  );
}

render(<App />, document.getElementById("root"));
