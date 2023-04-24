import { useState } from "react";
import PropTypes from "prop-types";

export const InlineForm = ({
  icon,
  feedback,
  handleSubmit,
  handleChange,
  label,
  value,
  feedbackMsg = "",
  inputType = "text",
  placeholder = "Placeholder...",
  btnText = "submit",
}) => {
  return (
    <form action="" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="form-label mt-4">{label}</label>
        <div className="form-group">
          <div className="input-group mb-3">
            <span className="input-group-text text-primary fs-3">{icon}</span>
            <input
              type={inputType}
              value={value}
              onChange={handleChange}
              className={`form-control ${feedback}`}
              placeholder={placeholder}
            />
            <button className="btn btn-primary text-capitalize" type="submit">
              {btnText}
            </button>
            <div className="invalid-feedback">{feedbackMsg}</div>
            <div className="valid-feedback">{feedbackMsg}</div>
          </div>
        </div>
      </div>
    </form>
  );
};

InlineForm.propTypes = {
  icon: PropTypes.any.isRequired,
  feedback: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  feedbackMsg: PropTypes.string,
  placeholder: PropTypes.string,
};
