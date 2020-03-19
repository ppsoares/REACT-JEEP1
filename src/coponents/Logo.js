import React, { useEffect } from "react";
import logo from "./../logo.svg";
import "./Logo.css";

const Logo = ({ repeat }) => {
  let rows = [];
  for (let i = 0; i < repeat && i < 6; i++) {
    rows.push(
      <img key={i} id={i} src={logo} className="App-logo" alt="logo" />
    );
  }

  useEffect(() => {
    console.log("repeat updated!");
  }, [repeat]);

  return <div className="App-Logo-containers">{rows}</div>;
};

export default Logo;
