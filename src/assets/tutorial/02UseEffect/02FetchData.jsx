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
            <div className="table-responsive">
                <table className="table table-light">
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Link</th>
                        <th>Type</th>
                        <th>Avatar</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                        <td>a</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </>
  )
}

export default FetchData