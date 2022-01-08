import React from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalCheck.css";
import { Button } from "../../Button/Button";

export const ModalCheck = ({ active, setActive, title, film }) => {
  function closeModalHandler() {
    setActive(false);
  }

  const { height } = window.screen;

  return (
    <Modal active={active} setActive={setActive} title={title} onClose={closeModalHandler}>
      <div className="modal-check">
        <ul className="modal-check__list" style={{ maxHeight: height < 1000 ? height - 200 : 650 }}>
          <li className="modal-check__item">
            <img src={film.img} alt={film.name} className="modal-check__img" />
          </li>
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
            <div className="modal-item__title">Трейлер</div>
            <div className="modal-item__description">
              <a href={film.trailer} target="_blank">
                <Button title="Ссылка на трейлер" color="white"></Button>
              </a>
            </div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Описание</div>
            <div className="modal-item__description">{film.description}</div>
          </li>
        </ul>
        <div className="modal-check__buttons">
          <Button title="Закрыть" color="white" onClick={closeModalHandler}></Button>
        </div>
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
    img: PropTypes.string.isRequired,
    trailer: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
};
