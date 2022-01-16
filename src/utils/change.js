import { resetError } from "../store/actions/errorsAction";

export const changeInput = (e, form, setForm, dispatch = null, modalErrors = null) => {
  const { id, value } = e.target;
  setForm({ ...form, [id]: value });

  if (dispatch && modalErrors) {
    if (modalErrors[id]) dispatch(resetError(id));
  }
};
