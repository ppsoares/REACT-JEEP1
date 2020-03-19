import React, { useState } from "react";
import "./App.css";
import Header from "./coponents/header";
import Logo from "./coponents/Logo";
import Text from "./coponents/Text";
import Link from "./coponents/Link";
import Buttons from "./coponents/Buttons";

const App = () => {
  const [repeat, setRepeat] = useState(1);

  return (
    <div className="App">
      <Header>
        <Logo repeat={repeat} />
        <Buttons repeat={repeat} setRepeat={setRepeat} />
        <Text />
        <Link />
      </Header>
    </div>
  );
};

export default App;
