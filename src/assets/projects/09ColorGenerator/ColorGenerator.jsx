import { useState } from "react";
import { BsPalette } from "react-icons/bs";

import Values from "values.js";
import SingleColor from "./SingleColor";

const ColorGenerator = () => {
  const [invalid, setInvalid] = useState(false);
  const [color, setColor] = useState("");
  const [colorList, setColorList] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      setInvalid(false);
      let colors = new Values(color).all(10);
      setColorList(colors);
    } catch (e) {
      console.log(e);
      setInvalid(true);
    }
  };
  return (
    <div className="container">
      <h1 className="text-center">Color Generator</h1>
      <div className="col-md-6 offset-md-3">
        <form action="" onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label mt-4">
              Enter Color Code (RGB, Hex)
            </label>
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <BsPalette className="text-primary" size={25} />
                </span>
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  className={`form-control ${invalid ? "is-invalid" : ""}`}
                  placeholder="rgb(0,0,0) OR #000"
                />
                <button className="btn btn-primary" type="submit">
                  Generate
                </button>
                <div className="invalid-feedback">
                  Invalid color/code. Try another?
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
        <div className="row">
            {colorList.map((color, index) => (
                <SingleColor key={index} {...color} index={index} hexColor={color.hexString()}/>
            ))}
        </div>
    </div>
  );
};

export default ColorGenerator;
