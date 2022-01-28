import React, { useEffect, useState } from "react";
import { Modal } from "../Modal";
import PropTypes from "prop-types";
import "./ModalAdd.css";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { isValidForm } from "../../../utils/validate";
import { useDispatch } from "react-redux";
import { addFilm } from "../../../store/actions/filmsAction";
import { useSelector } from "react-redux";
import { Textarea } from "../../Textarea/Textarea";
import { resetFormErrors } from "../../../utils/reset";
import { changeInput } from "../../../utils/change";
import { toggleAddModal } from "../../../store/actions/mainAction";

export const ModalAdd = ({ active, title }) => {
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

  const closeModalHandler = () => {
    dispatch(toggleAddModal(false));
    resetFormErrors(form, setForm, modalErrors, dispatch);
  };

  const changeInputHandler = (e) => {
    changeInput(e, form, setForm, dispatch, modalErrors);
  };

  const addFilmHandler = () => {
    if (!isValidForm(form, dispatch)) {
      dispatch(addFilm(form));
      closeModalHandler();
    }
  };

  return (
    <Modal active={active} title={title} onClose={closeModalHandler}>
      <div className="modal-add">
        <div className="modal-add__form">
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
  title: PropTypes.string.isRequired,
};
