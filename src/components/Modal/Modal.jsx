import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";
import { toggleScrollbar } from "../../utils/scrollbar";

export const Modal = ({ active, title, children, onClose }) => {
  const clickHandler = () => {
    if (onClose) onClose();
  };

  if (active) {
    toggleScrollbar(true);
  }

  return (
    <div className={`modal ${active || ""}`}>
      <div className="modal-overlay" onClick={clickHandler}></div>
      <div className="modal-block">
        <div className="modal-block__title">{title}</div>
        <div className="modal-block__body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  onClose: PropTypes.func.isRequired,
};
