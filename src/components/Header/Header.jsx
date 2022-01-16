import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { toggleAddModal } from "../../store/actions/mainAction";
import { Button } from "../Button/Button";
import { ModalAdd } from "../Modal/ModalAdd/ModalAdd";
import "./Header.css";

export const Header = () => {
  const { addFilmModal } = useSelector((state) => state.main);
  const dispatch = useDispatch();

  function openModalAddHandler() {
    dispatch(toggleAddModal(true));
  }

  function closeModalAddHandler() {
    dispatch(toggleAddModal(false));
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
      <ModalAdd title="Добавление фильма" active={addFilmModal} onClose={closeModalAddHandler}></ModalAdd>
    </div>
  );
};
