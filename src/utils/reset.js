import { resetError } from "../store/actions/errorsAction";

export const resetFormErrors = (form, setForm, errors, dispatch, defaultObj) => {
  if (defaultObj) {
    Object.keys(form).forEach((key) => setForm((state) => ({ ...state, [key]: defaultObj[key] })));
  } else {
    Object.keys(form).forEach((key) => setForm((state) => ({ ...state, [key]: "" })));
  }
  Object.keys(errors).forEach((key) => dispatch(resetError(key)));
};

export const resetEvent = (e) => {
  e.stopPropagation();
  e.preventDefault();
};
