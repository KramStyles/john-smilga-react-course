/*Template generated by WebStorm on Wednesday (5/10/23), 11:52 PM.
 * Author: kramstyles
 * Filename: Tab.jsx
 */
import PropTypes from "prop-types";

const Tab = ({ title, children }) => {
  return (
    <div className="col-md-6">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            aria-selected="false"
            role="tab"
          >
            {title}
          </button>
        </li>
      </ul>
      <div id="myTabContent" className="tab-content">
        <div
          className="tab-pane fade active show p-4"
          id="home"
          role="tabpanel"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Tab;
