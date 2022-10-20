import {useEffect, useState} from 'react';

import Jumbotron from '../../components/Jumbotron';

const FetchData = () => {
    const url = 'https://api.github.com/users/';
    const title = 'fetch data use effect example';
  return (
    <>
        <Jumbotron title={title}/>
        <div className="container" />
    </>
  )
}

export default FetchData