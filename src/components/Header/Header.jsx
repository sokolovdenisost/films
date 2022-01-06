import React from "react";
import { Button } from "../Button/Button";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <h1 className="header-content__title">
            <span>BEST</span>films
          </h1>
          <div className="header-content__button">
            <Button title="Добавить фильм" color="red"></Button>
          </div>
        </div>
      </div>
    </div>
  );
};
