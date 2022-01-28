import { setError } from "../store/actions/errorsAction";

export const isValidForm = (form, dispatch) => {
  let error = false;

  Object.keys(form).forEach((key) => {
    if (validateField(key, form[key]) !== null) error = true;
    dispatch(setError(key, validateField(key, form[key])));
  });

  return error;
};

const validateField = (type, value) => {
  if (validateEmpty(type, value)) return validateEmpty(type, value);
  if (validateValue(type, value)) return validateValue(type, value);

  return null;
};

const validateEmpty = (field, value) => {
  if (field !== "id" && !value.trim()) return `Ошибка. Поле "${fields[field]}" не может быть пустым.`;
};

const validateValue = (field, value) => {
  switch (field) {
    case "year":
      if (isNaN(parseInt(value))) return `Ошибка. Год должен быть из цифр. Пример: 2021`;
      if (value.split("").length !== 4) return `Ошибка. Год должен содержать 4 цифры.`;
      return null;

    case "budget":
      if (!value.split(" ")[1]) return `Ошибка. Число и валюта должна быть через пробел. Пример: 100000 руб`;
      if (!currencies.includes(value.split(" ")[1])) return `Ошибка. Пример: 100000 руб`;
      return null;

    case "trailer":
      if (!value.includes("www.youtube.com")) return `Ошибка. Видео должно быть с youtube. Пример: www.youtube.com`;
      return null;

    default:
      return null;
  }
};

const fields = {
  name: "Название",
  year: "Год",
  country: "Страна",
  genre: "Жанр",
  director: "Режиссер",
  budget: "Бюджет",
  img: "URL Изображения",
  trailer: "URL Трейлера",
  description: "Описание",
};

const currencies = ["$", "дол", "руб", "евро"];
