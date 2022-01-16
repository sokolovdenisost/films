import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ title, color, onClick, margin }) => {
  function clickHandler() {
    if (onClick) onClick();
  }

  return (
    <button className={`button ${color}`} style={{ margin }} onClick={clickHandler}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  margin: PropTypes.string,
};
