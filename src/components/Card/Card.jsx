import React from "react";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import "./Card.css";
import { useDispatch } from "react-redux";
import { toggleCheckModal, toggleEditModal } from "../../store/actions/mainAction";
import { resetEvent } from "../../utils/reset";

export const Card = ({ film }) => {
  const dispatch = useDispatch();

  const openCheckModalHandler = () => {
    dispatch(toggleCheckModal(true, film));
  };

  const openEditModalHandler = () => {
    dispatch(toggleEditModal(true, film));
  };

  return (
    <a className="card" href={`/item/${film.id}`}>
      <div className="card-block__img">
        <img src={film.img} alt="" className="card-img" />
      </div>
      <div className="card-info">
        <div className="card-info__title">{film.name}</div>
        <div className="card-info__genre">{film.genre}</div>
        <div className="card-info__buttons" onClick={resetEvent}>
          <Button title="Быстрый просмотр" color="white" onClick={openCheckModalHandler}></Button>
          <Button margin="5px 0 0" title="Редактировать" color="red" onClick={openEditModalHandler}></Button>
        </div>
      </div>
    </a>
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
