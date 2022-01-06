import React from "react";
import PropTypes from "prop-types";
import "./Button.css";

export const Button = ({ title, color }) => {
  return <button className={`button ${color}`}>{title}</button>;
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
