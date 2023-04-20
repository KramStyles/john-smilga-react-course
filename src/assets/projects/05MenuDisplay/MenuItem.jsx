import {useState} from "react";
import {menuDisplayItems} from "../../data/data";

const MenuItem = () => {
    const [menuItem, setMenuItem] = useState(menuDisplayItems);
    return menuItem.map((item) => {
        const {category, desc, id, img, price, title} = item;
        return (
            <div className="col-md-4" key={id}>
                <div className="card m-1">
                    <img className="card-img-top" src={img} alt={title}/>
                    <div className="card-body">
                        <h4 className="card-title text-capitalize">{title}</h4>
                        <p className="card-text">{desc}</p>
                        <button className="btn btn-primary">{category} <small>${price}</small></button>
                    </div>
                </div>
            </div>
        );
    });
};

export default MenuItem;
