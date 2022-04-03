import { useState } from "react";

export default function App() {
  const [show, setShow] = useState(true);

  function changeState() {
    setShow(!show);
  }

  return (
    <div className="App">
      {show ? (
        <button onClick={changeState}> Display </button>
      ) : (
        <button onClick={changeState}> Hide </button>
      )}
    </div>
  );
}