import {useEffect, useState} from 'react';

import Jumbotron from '../../components/Jumbotron';

const FetchData = () => {
    const url = 'https://api.github.com/users';
    const title = 'fetch data use-effect example';
    const [users, setUsers] = useState([]);

    const getUsers = async ()=>{
        const response = await fetch(url);
        const data = await response.json();
        setUsers(data);
    }

    useEffect(()=>{
        getUsers();
    }, [])
  return (
    <>
        <Jumbotron title={title}/>
        <div className="container">
            <h2>Github Founders</h2>
            <div className="row">
                {users.map((user) => {
                    const {login, avatar_url, id, node_id, type, site_admin} = user;
                    return (<div className="col-md-4 col-sm-12 mt-4" key={id}>
                        <div className="card" style={{minWidth: '200px'}}>
                            <img className="card-img-top" src={avatar_url} alt={login}/>
                            <div className="card-body">
                                <h4 className="card-title text-primary text-capitalize">{login}</h4>
                                <p className="card-text border-bottom border-primary">ID:<span className='fw-bold float-end'>{id}</span></p>
                                <p className="card-text border-bottom border-primary">Node ID:<span className='fw-bold float-end'>{node_id}</span></p>
                                <p className="card-text border-bottom border-primary">Type:<span className='fw-bold float-end'>{type}</span></p>
                                <p className="card-text border-bottom border-primary">Site Admin:<span className='fw-bold float-end'> {site_admin ? 'Yes' : 'No'}</span></p>
                                <a href={user.html_url} className="btn btn-dark mt-2" target="_blank">See Profile</a>
                            </div>
                        </div>
                    </div>)
                })}
                
            </div>
        </div>
    </>
  )
}

export default FetchData