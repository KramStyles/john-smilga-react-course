import { useState } from "react";
import PropTypes from "prop-types";

export const InlineForm = ({
  icon,
  invalid,
  handleSubmit,
  handleChange,
  label,
  value,
  inputType = "text",
  invalidMsg = "Error occurred. Check Input!",
  placeholder = "Placeholder...",
  btnText = "submit",
}) => {
  return (
    <div className="col-md-6 offset-md-3">
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
                className={`form-control ${invalid ? "is-invalid" : ""}`}
                placeholder={placeholder}
              />
              <button className="btn btn-primary text-capitalize" type="submit">
                {btnText}
              </button>
              <div className="invalid-feedback">{invalidMsg}</div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

InlineForm.propTypes = {
  icon: PropTypes.any.isRequired,
  invalid: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  inputType: PropTypes.string,
  invalidMsg: PropTypes.string,
  placeholder: PropTypes.string,
};
