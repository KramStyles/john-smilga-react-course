import React from 'react';

import "./../styles/loader.css";

const Loader = () => {
  return (
    <div className='loader-body'>
        <div className="loader-section">
            <div className="loader-shape"></div>
            <div className="loader-text fs-1 fw-bold">Processing...</div>
        </div>
    </div>
  )
}

export default Loader