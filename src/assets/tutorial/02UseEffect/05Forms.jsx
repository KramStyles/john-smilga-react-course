import {useState} from 'react';

import Jumbotron from "../../components/Jumbotron";

const Forms = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name, password);
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
            </div>
        </>
    )
}

export default Forms;