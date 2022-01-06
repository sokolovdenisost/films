export const validateField = (type, value) => {
  if (validateEmpty(type, value)) return validateEmpty(type, value);
  if (validateValue(type, value)) return validateValue(type, value);

  return null;
};

function validateEmpty(field, value) {
  if (!value.trim()) return `Ошибка. Поле "${fields[field]}" не может быть пустым.`;
}

function validateValue(field, value) {
  switch (field) {
    case "year":
      if (isNaN(parseInt(value))) return `Ошибка. Пример: 2021`;
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
}

const fields = {
  name: "Название",
  year: "Год",
  country: "Страна",
  genre: "Жанр",
  director: "Режиссер",
  budget: "Бюджет",
  img: "URL Изображения",
  trailer: "URL Трейлера",
};

const currencies = ["дол", "руб", "евро"];
