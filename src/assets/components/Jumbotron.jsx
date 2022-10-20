import React from 'react'

const Jumbotron = (props) => {
    const {title} = props;
  return (
    <div className="bg-primary p-5 text-white text-center fs-3 fw-bold text-capitalize mb-5">
        {title}
    </div>
  )
}

export default Jumbotron