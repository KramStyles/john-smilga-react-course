import React from 'react'

import Jumbotron from "../../components/Jumbotron";
import Loader from '../../components/Loader';

const FetchWithLoader = () => {
  return (
    <>
        <Jumbotron title="fetch data with Loader"/>
        <Loader/>
        <div className="container">
        </div>
    </>
  )
}

export default FetchWithLoader