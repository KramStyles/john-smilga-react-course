import PropTypes from "prop-types";

import "./../styles/loader.css";

const Loader = ({ error }) => {
  return (
    <div className="loader-body">
      <div className="loader-section">
        {error ? (
          <div className="loader-text fs-3 fw-bold text-warning">{error}</div>
        ) : (
          <>
            <div className="loader-shape"></div>
            <div className="loader-text fs-1 fw-bold">Processing...</div>
          </>
        )}
      </div>
    </div>
  );
};

Loader.propTypes = {
  error: PropTypes.string,
};

export default Loader;
