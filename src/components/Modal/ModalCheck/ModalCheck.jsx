import React from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalCheck.css";

export const ModalCheck = ({ active, setActive, title, film }) => {
  function closeModalHandler() {
    setActive(false);
  }

  return (
    <Modal active={active} setActive={setActive} title={title} onClose={closeModalHandler}>
      <div className="modal-check">
        <ul className="modal-check__list">
          <li className="modal-check__item">
            <div className="modal-item__title">Год</div>
            <div className="modal-item__description">{film.year}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Страна</div>
            <div className="modal-item__description">{film.country}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Жанр</div>
            <div className="modal-item__description">{film.genre}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Режиссер</div>
            <div className="modal-item__description">{film.director}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Бюджет</div>
            <div className="modal-item__description">{film.budget}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Трейлер</div>
            <div className="modal-item__description">{film.trailer}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Описание</div>
            <div className="modal-item__description">{film.description}</div>
          </li>
        </ul>
      </div>
    </Modal>
  );
};

ModalCheck.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
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
