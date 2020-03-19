import React, { useState } from "react";
import "./Buttons.css";
import { Button, Typography } from "@bayon/commons";
import { Toast } from "@bayon/commons";

const Buttons = ({ repeat, setRepeat }) => {
  const [qtAdd, setQtAdd] = useState(0);
  const [qtDel, setQtDel] = useState(0);

  const clickAdd = () => {
    setRepeat(repeat => repeat + 1);
    setQtAdd(qtAdd => qtAdd + 1);
  };

  const clickDel = () => {
    setRepeat(repeat => repeat - 1);
    setQtDel(qtDel => qtDel + 1);
  };

  return (
    <>
      <div>
        <Typography size={20} align="left" noWrap={false} weight="regular">
          Quantidade add: {qtAdd} e quantidade Del: {qtDel}
        </Typography>
      </div>
      <div className="App-logo-buttons">
        <Button
          size="small"
          aria-label="Pequeno Primary"
          variant="primary"
          disabled={repeat === 6}
          onClick={clickAdd}
        >
          logo +
        </Button>
        <Button
          size="small"
          aria-label="Pequeno Primary"
          variant="primary"
          disabled={repeat === 0}
          onClick={clickDel}
        >
          logo -
        </Button>
        <Toast
          open={repeat >= 6}
          type="error"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          message="O valor máximo permitido é 6!"
        />
      </div>
    </>
  );
};

export default Buttons;
