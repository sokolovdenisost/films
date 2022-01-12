import { resetError } from "../store/actions/errorsAction";

export const changeInput = (e, form, setForm, dispatch, modalErrors) => {
  const { id, value } = e.target;
  setForm({ ...form, [id]: value });

  if (modalErrors[id]) dispatch(resetError(id));
};
