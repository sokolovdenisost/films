import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { toggleAddModal } from "../../store/actions/mainAction";
import { Button } from "../Button/Button";
import { ModalAdd } from "../Modal/ModalAdd/ModalAdd";
import "./Header.css";

export const Header = () => {
  const { addFilmModal } = useSelector((state) => state.main);
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const openModalAddHandler = () => {
    dispatch(toggleAddModal(true));
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-content">
          <a href="/" className="header-content__link">
            <h1 className="header-content__title">
              <span>BEST</span>films
            </h1>
          </a>
          {pathname === "/" && (
            <div className="header-content__button">
              <Button title="Добавить фильм" color="red" onClick={openModalAddHandler}></Button>
            </div>
          )}
        </div>
      </div>
      <ModalAdd title="Добавление фильма" active={addFilmModal}></ModalAdd>
    </div>
  );
};
