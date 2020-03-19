import React from "react";
import "./Link.css";
import { Button } from "@bayon/commons";

const Header = () => {
  return (
    <div>
      <Button href="https://reactjs.org" variant="subtle">
        Learn React
      </Button>
    </div>
  );
};

export default Header;
