import React from "react";
import "./App.css";
import Header from "./coponents/header";
import Logo from "./coponents/Logo";
import Text from "./coponents/Text";
import Link from "./coponents/Link";

function App() {
  return (
    <div className="App">
      <Header>
        <Logo />
        <Text />
        <Link />
      </Header>
    </div>
  );
}

export default App;
