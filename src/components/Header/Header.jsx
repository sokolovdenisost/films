import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleModal } from "../../store/actions/filmsAction";
import { Button } from "../Button/Button";
import { ModalAdd } from "../Modal/ModalAdd/ModalAdd";
import "./Header.css";

export const Header = () => {
  const { modal } = useSelector((state) => state.films);
  const dispatch = useDispatch();

  function openModalAddHandler() {
    dispatch(toggleModal());
  }

  function closeModalAddHandler() {
    dispatch(toggleModal());
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
      <ModalAdd title="Добавление фильма" active={modal} onClose={closeModalAddHandler}></ModalAdd>
    </div>
  );
};
