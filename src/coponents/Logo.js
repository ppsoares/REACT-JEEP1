import React, { useState, useEffect } from "react";
import logo from "./../logo.svg";
import "./Logo.css";

const Logo = props => {
  const [repeat, setRepeat] = useState(1);

  let rows = [];
  for (let i = 0; i < repeat && i < 6; i++) {
    rows.push(<img id={i} src={logo} className="App-logo" alt="logo" />);
  }

  useEffect(() => {
    setRepeat(2);
  }, []);

  useEffect(() => {
    console.log("update");
  });

  return (
    <>
      <div className="App-Logo-itens">{rows}</div>
      <div className="App-logo-buttons">
        <button
          disabled={repeat === 6}
          onClick={() => setRepeat(repeat => repeat + 1)}
        >
          {" "}
          logo +{" "}
        </button>
        <button
          disabled={repeat === 6}
          onClick={() => setRepeat(repeat => repeat - 1)}
        >
          {" "}
          logo -{" "}
        </button>
      </div>
    </>
  );
};

export default Logo;
