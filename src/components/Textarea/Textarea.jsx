import React from "react";
import PropTypes from "prop-types";
import "./Textarea.css";

export const Textarea = ({ value, placeholder, id, error, onChange }) => {
  function changeHandler(e) {
    if (onChange) return onChange(e);
  }

  return (
    <div className="textarea-block">
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        className={`textarea ${error && "error"}`}
        onChange={changeHandler}
      ></textarea>
      {error && <div className="textarea-error">{error}</div>}
    </div>
  );
};

Textarea.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
