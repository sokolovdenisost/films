import React from "react";
import { Card } from "../../components/Card/Card";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <div className="mainpage">
      <div className="container">
        <div className="mainpage-content">
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    </div>
  );
};
