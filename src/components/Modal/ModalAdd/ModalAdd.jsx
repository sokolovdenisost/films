import React, { useState } from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalAdd.css";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { validateField } from "../../../utils/validate";
import { useDispatch } from "react-redux";
import { addFilm } from "../../../store/actions/filmsAction";

export const ModalAdd = ({ active, setActive, title }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    year: "",
    country: "",
    genre: "",
    director: "",
    budget: "",
    img: "",
    trailer: "",
    description: "",
  });

  const [errors, setErrors] = useState({
    name: null,
    year: null,
    country: null,
    genre: null,
    director: null,
    budget: null,
    img: null,
    trailer: null,
    description: null,
  });

  function closeModalHandler() {
    setActive(false);
  }

  function changeInputHandler(e) {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });
    setErrors({ ...errors, [id]: null });
  }

  function addFilmHandler() {
    const promis = new Promise((resolve, reject) => {
      Object.keys(form).forEach((key) => setErrors((state) => ({ ...state, [key]: validateField(key, form[key]) })));
      setTimeout(() => {
        resolve(Object.keys(errors).filter((key) => errors[key]).length);
      }, 300);
    });

    promis.then((value) => console.log(value));
    // dispatch(addFilm(form));
    // closeModalHandler();
  }

  return (
    <Modal active={active} setActive={setActive} title={title} onClose={closeModalHandler}>
      <div className="modal-add">
        <div className="modal-add__form">
          <Input placeholder="Название" id="name" error={errors.name} onChange={changeInputHandler}></Input>
          <Input placeholder="Год" id="year" error={errors.year} onChange={changeInputHandler}></Input>
          <Input placeholder="Страна" id="country" error={errors.country} onChange={changeInputHandler}></Input>
          <Input placeholder="Жанр" id="genre" error={errors.genre} onChange={changeInputHandler}></Input>
          <Input placeholder="Режиссер" id="director" error={errors.director} onChange={changeInputHandler}></Input>
          <Input placeholder="Бюджет ($, дол, руб, евро)" id="budget" error={errors.budget} onChange={changeInputHandler}></Input>
          <Input placeholder="URL Изображения" id="img" error={errors.img} onChange={changeInputHandler}></Input>
          <Input placeholder="URL Трейлера (youtube)" id="trailer" error={errors.trailer} onChange={changeInputHandler}></Input>
          <Input placeholder="Описание" id="description" error={errors.description} onChange={changeInputHandler}></Input>
        </div>
        <div className="modal-add__buttons">
          <Button title="Отмена" color="white" onClick={closeModalHandler}></Button>
          <Button title="Добавить фильм" color="red" onClick={addFilmHandler}></Button>
        </div>
      </div>
    </Modal>
  );
};

ModalAdd.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
