import {useState, useEffect} from 'react'

import Jumbotron from "../../components/Jumbotron";
import Loader from '../../components/Loader';

const FetchWithLoader = () => {
    const [username, setUsername] = useState('kramstyles');
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [errorMsg, setErrorMsg] = useState('Something Wrong');
    const url = `https://api.github.com/users/${username}`;

    const getProfile = (e) => {
        if(e.keyCode === 13){
            setUsername(e.target.value);
            e.target.value = '';
        }
    }

    useEffect(() => {
        setIsLoading(true);
      fetch(url)
      .then((response) => response.json())
      .then((user) => {
          setIsLoading(false);
          console.log(user);
      })
      .catch((error) => console.log('error'));
    
    }, [username])
    
  return (
    <>
        <Jumbotron title="fetch data with Loader"/>
        {isLoading ? <Loader/>: ''}
        {isError ? <Loader error={errorMsg}/>: ''}
        
        <div className="container">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <input type="text" className='form-control' onKeyDown={getProfile} placeholder='Enter Github username to get profile'/>
                </div>
                <div className="col-md-6 col-sm-12">

                </div>
            </div>
        </div>
    </>
  )
}

export default FetchWithLoader