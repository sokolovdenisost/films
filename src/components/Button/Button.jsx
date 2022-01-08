import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ title, color, onClick }) => {
  function clickHandler() {
    if (onClick) return onClick();
  }

  return (
    <button className={`button ${color}`} onClick={clickHandler}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
