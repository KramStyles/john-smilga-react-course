import {useState, useEffect} from 'react'

import Jumbotron from "../../components/Jumbotron";
import Loader from '../../components/Loader';

const FetchWithLoader = () => {
    const [username, setUsername] = useState('kramstyles');
    const url = `https://api.github.com/users/${username}`;

    const getProfile = (e) => {
        if(e.keyCode === 13){
            setUsername(e.target.value);
            console.log(username);
            e.target.value = '';
        }
    }
  return (
    <>
        <Jumbotron title="fetch data with Loader"/>
        {/* <Loader error="This is wrong"/> */}
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