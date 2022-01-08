import React, { useCallback, useState } from "react";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import "./Card.css";
import { ModalCheck } from "../Modal/ModalCheck/ModalCheck";

export const Card = ({ film }) => {
  const [modal, setModal] = useState(false);

  function openModalHandler() {
    setModal(true);
  }

  return (
    <div className="card">
      <img src={film.img} alt="" className="card-img" />
      <div className="card-info">
        <div className="card-info__title">{film.name}</div>
        <div className="card-info__genre">{film.genre}</div>
        <div className="card-info__buttons">
          <Button title="Быстрый просмотр" color="white" onClick={openModalHandler}></Button>
        </div>
      </div>
      <ModalCheck active={modal} setActive={setModal} film={film} title={film.name}></ModalCheck>
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
