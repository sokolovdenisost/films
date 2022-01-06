import React from "react";
import PropTypes from "prop-types";
import "./Modal.css";

export const Modal = ({ active, setActive, title, children }) => {
  function closeModalHandler() {
    setActive(false);
  }

  function resetEvent(e) {
    e.stopPropagation();
  }

  return (
    <div className={`modal ${active && "active"}`} onClick={closeModalHandler}>
      <div className="modal-block" onClick={resetEvent}>
        <div className="modal-block__title">{title}</div>
        <div className="modal-block__body">{children}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  active: PropTypes.bool.isRequired,
  setActive: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
