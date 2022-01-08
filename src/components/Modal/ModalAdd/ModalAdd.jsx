import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalAdd.css";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { validateField } from "../../../utils/validate";
import { useDispatch } from "react-redux";
import { addFilm } from "../../../store/actions/filmsAction";
import { useSelector } from "react-redux";
import { resetError, setError } from "../../../store/actions/errorsAction";
import { Textarea } from "../../Textarea/Textarea";

export const ModalAdd = ({ active, onClose, title }) => {
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
  const { modalErrors } = useSelector((state) => state.errors);

  function closeModalHandler() {
    if (onClose) onClose();
    resetFormErrors();
  }

  function resetFormErrors() {
    Object.keys(form).forEach((key) => setForm((state) => ({ ...state, [key]: "" })));
    Object.keys(modalErrors).forEach((key) => dispatch(resetError(key)));
  }

  function changeInputHandler(e) {
    const { id, value } = e.target;
    setForm({ ...form, [id]: value });

    if (modalErrors[id]) dispatch(resetError(id));
  }

  function validateForm() {
    let error = false;
    Object.keys(form).forEach((key) => {
      if (validateField(key, form[key]) !== null) error = true;
      dispatch(setError(key, validateField(key, form[key])));
    });

    return error;
  }

  function addFilmHandler() {
    if (!validateForm()) {
      dispatch(addFilm(form));
      closeModalHandler();
    }
  }

  const { height } = window.screen;

  return (
    <Modal active={active} title={title} onClose={closeModalHandler}>
      <div className="modal-add">
        <div className="modal-add__form" style={{ maxHeight: height < 1000 ? height - 200 : null }}>
          <Input value={form.name} placeholder="Название" id="name" error={modalErrors.name} onChange={changeInputHandler}></Input>
          <Input value={form.year} placeholder="Год" id="year" error={modalErrors.year} onChange={changeInputHandler}></Input>
          <Input value={form.country} placeholder="Страна" id="country" error={modalErrors.country} onChange={changeInputHandler}></Input>
          <Input value={form.genre} placeholder="Жанр" id="genre" error={modalErrors.genre} onChange={changeInputHandler}></Input>
          <Input
            value={form.director}
            placeholder="Режиссер"
            id="director"
            error={modalErrors.director}
            onChange={changeInputHandler}
          ></Input>
          <Input
            value={form.budget}
            placeholder="Бюджет ($, дол, руб, евро)"
            id="budget"
            error={modalErrors.budget}
            onChange={changeInputHandler}
          ></Input>
          <Input value={form.img} placeholder="URL Изображения" id="img" error={modalErrors.img} onChange={changeInputHandler}></Input>
          <Input
            value={form.trailer}
            placeholder="URL Трейлера (youtube)"
            id="trailer"
            error={modalErrors.trailer}
            onChange={changeInputHandler}
          ></Input>
          <Textarea
            value={form.description}
            placeholder="Описание"
            id="description"
            error={modalErrors.description}
            onChange={changeInputHandler}
          ></Textarea>
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
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};
