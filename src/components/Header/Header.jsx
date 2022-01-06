import React, { useState } from "react";
import { Button } from "../Button/Button";
import { ModalAdd } from "../Modal/ModalAdd/ModalAdd";
import "./Header.css";

export const Header = () => {
  const [active, setActive] = useState(false);

  function openModalAddHandler() {
    setActive(true);
  }

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-content__title">
            <span>BEST</span>films
          </h1>
          <div className="header-content__button">
            <Button title="Добавить фильм" color="red" onClick={openModalAddHandler}></Button>
          </div>
        </div>
      </div>
      <ModalAdd title="Добавление фильма" active={active} setActive={setActive}></ModalAdd>
    </div>
  );
};
