import {useEffect, useState} from 'react';

import Jumbotron from '../../components/Jumbotron';

const FetchData = () => {
    const url = 'https://api.github.com/users';
    const title = 'fetch data use-effect example';
    const [users, setUsers] = useState([]);

    const getUsers = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    useEffect(()=>{
        getUsers();
    }, [])
  return (
    <>
        <Jumbotron title={title}/>
        <div className="container">
            <h2>Github Users</h2>
            <div className="row">
                <div className="col-md-4 col-sm-12 mt-4">
                    <div className="card" style={{width: '300px'}}>
                        <img className="card-img-top" src="https://avatars.githubusercontent.com/u/45?v=4" alt="Card image"/>
                        <div className="card-body">
                            <h4 className="card-title text-primary text-capitalize">John Doe</h4>
                            <p className="card-text border-bottom border-primary">ID:<span className='fw-bold float-end'> 1</span></p>
                            <p className="card-text border-bottom border-primary">Node ID:<span className='fw-bold float-end'> iindie</span></p>
                            <p className="card-text border-bottom border-primary">Type:<span className='fw-bold float-end'> user</span></p>
                            <p className="card-text border-bottom border-primary">Site Admin:<span className='fw-bold float-end'> Yes</span></p>
                            <a href="#" className="btn btn-dark mt-2">See Profile</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default FetchData