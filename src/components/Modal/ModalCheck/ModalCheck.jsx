import React from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalCheck.css";
import { Button } from "../../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleCheckModal } from "../../../store/actions/mainAction";

export const ModalCheck = ({ active }) => {
  const dispatch = useDispatch();
  const { selectedFilm } = useSelector((state) => state.main);

  function closeModalHandler() {
    dispatch(toggleCheckModal(false));
  }

  return (
    <Modal active={active} title={selectedFilm.name} onClose={closeModalHandler}>
      <div className="modal-check">
        <ul className="modal-check__list">
          <li className="modal-check__item">
            <img src={selectedFilm.img} alt={selectedFilm.name} className="modal-check__img" />
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Год</div>
            <div className="modal-item__description">{selectedFilm.year}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Страна</div>
            <div className="modal-item__description">{selectedFilm.country}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Жанр</div>
            <div className="modal-item__description">{selectedFilm.genre}</div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Трейлер</div>
            <div className="modal-item__description">
              <a href={selectedFilm.trailer} target="_blank">
                <Button title="Ссылка на трейлер" color="white"></Button>
              </a>
            </div>
          </li>
          <li className="modal-check__item">
            <div className="modal-item__title">Описание</div>
            <div className="modal-item__description">{selectedFilm.description}</div>
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
};
