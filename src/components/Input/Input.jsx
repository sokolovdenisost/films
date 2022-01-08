import React from "react";
import PropTypes from "prop-types";
import "./Input.css";

export const Input = ({ value, type = "text", placeholder, id, error, onChange }) => {
  function changeHandler(e) {
    if (onChange) return onChange(e);
  }

  return (
    <div className="input-block">
      <input type={type} value={value} className={`input ${error && "error"}`} placeholder={placeholder} id={id} onChange={changeHandler} />
      {error && <div className="input-error">{error}</div>}
    </div>
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  type: "text",
};
