import { useState } from "react";
import {BsPalette} from "react-icons/bs";

const ColorGenerator = () => {
    const [invalid, setInvalid] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('clicked');
    }
  return (
    <div className="container">
      <h1 className="text-center">Color Generator</h1>
        <div className="col-md-6 offset-md-3">
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label mt-4">Enter Color Code (Name, RGB, Hex)</label>
                    <div className="form-group">
                        <div className="input-group mb-3">
                            <span className="input-group-text"><BsPalette className="text-primary" size={25}/></span>
                            <input type="text" className={`form-control ${invalid ? "is-invalid" : ""}`} placeholder="blue | rgb(0,0,0) | #000"/>
                            <button className="btn btn-primary" type="submit">Generate</button>
                            <div className="invalid-feedback">Invalid color/code. Try another?</div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  );
};

export default ColorGenerator;
