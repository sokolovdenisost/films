import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalEdit.css";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { Textarea } from "../../Textarea/Textarea";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFilm, editFilm } from "../../../store/actions/filmsAction";
import { resetError, setError } from "../../../store/actions/errorsAction";
import { validateField } from "../../../utils/validate";
import { toggleScrollbar } from "../../../utils/scrollbar";

export const ModalEdit = ({ active, setActive, film }) => {
  const dispatch = useDispatch();
  const [form, setForm] = useState(film);
  const { modalErrors } = useSelector((state) => state.errors);

  function closeModalHandler() {
    setActive(false);
    resetFormErrors();
    toggleScrollbar(false);
  }

  function resetFormErrors() {
    Object.keys(form).forEach((key) => setForm((state) => ({ ...state, [key]: film[key] })));
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

  function editFilmHandler() {
    if (!validateForm()) {
      dispatch(editFilm(film.id, form));
      closeModalHandler();
    }
  }

  console.log(active);

  function deleteFilmHandler() {
    dispatch(deleteFilm(film.id));
    closeModalHandler();
  }

  const { height } = window.screen;

  return (
    <Modal active={active} title={`Редактирование "${film.name}"`} onClose={closeModalHandler}>
      <div className="modal-edit">
        <div className="modal-edit__form" style={{ maxHeight: height < 1000 ? height - 270 : null }}>
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
        <div className="modal-edit__buttons">
          <Button title="Удалить" color="red" onClick={deleteFilmHandler}></Button>
          <Button title="Сохранить" color="white" onClick={editFilmHandler}></Button>
        </div>
      </div>
    </Modal>
  );
};

ModalEdit.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
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
