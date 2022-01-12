import React, { useCallback, useState } from "react";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import "./Card.css";
import { ModalCheck } from "../Modal/ModalCheck/ModalCheck";
import { ModalEdit } from "../Modal/ModalEdit/ModalEdit";

export const Card = ({ film }) => {
  const [modalCheck, setModalCheck] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  function openCheckModalHandler() {
    setModalCheck(true);
  }

  function openEditModalHandler() {
    setModalEdit(true);
  }

  return (
    <div className="card">
      <img src={film.img} alt="" className="card-img" />
      <div className="card-info">
        <div className="card-info__title">{film.name}</div>
        <div className="card-info__genre">{film.genre}</div>
        <div className="card-info__buttons">
          <Button title="Быстрый просмотр" color="white" onClick={openCheckModalHandler}></Button>
          <Button margin="5px 0 0" title="Редактировать" color="red" onClick={openEditModalHandler}></Button>
        </div>
      </div>
      <ModalCheck active={modalCheck} setActive={setModalCheck} film={film}></ModalCheck>
      <ModalEdit active={modalEdit} setActive={setModalEdit} film={film}></ModalEdit>
    </div>
  );
};

Card.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
