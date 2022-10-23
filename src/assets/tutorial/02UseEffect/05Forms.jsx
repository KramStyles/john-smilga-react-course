import {useState} from 'react';

import Jumbotron from "../../components/Jumbotron";

const Forms = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [db, setDb] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name && password){
            setDb((prev)=>{
                const createdAt = new Date().getTime().toString();
                return [...db, [name, password, createdAt]]
            })
            setName('');
            setPassword('');
        } else alert('Please ensure all fields are complete')
    }
    return (
        <>
            <Jumbotron title="Form Examples" />
            <div className="container">
                <div className="row">
                    <div className="col-md-10 offset-md-1">
                        <form className="form" onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Enter Name" id="name" value={name}
                                           onChange={(e)=>setName(e.target.value)}/>
                                </div>
                                <div className="col-md-6">
                                    <input type="password" className="form-control" placeholder="Enter password" id="pswd" value={password}
                                           onChange={(e)=> setPassword(e.target.value)} autoComplete="on"/>
                                </div>
                                <div className="col-md-12 mt-3 d-grid">
                                    <button className="btn btn-outline-primary btn-lg" type={"submit"}>Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="table mt-5">
                            <table className="table table-light table-hover">
                                <thead>
                                    <tr>
                                        <th>Fullname</th>
                                        <th>Password</th>
                                        <th>Time ID</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {db.length > 0 ?
                                    db.map(detail =>{
                                       return (
                                           <tr key={detail[2]}>
                                               <td>{detail[0]}</td>
                                               <td>{detail[1]}</td>
                                               <td>{detail[2]}</td>
                                           </tr>
                                       )
                                    }) : ''
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Forms;