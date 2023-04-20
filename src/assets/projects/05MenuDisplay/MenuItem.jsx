import {useState} from "react";
import {menuDisplayItems} from "../../data/data";
import MenuCategory from "./MenuCategory";

const MenuItem = () => {
    const [menuItem, setMenuItem] = useState(menuDisplayItems);

    const filterItems = (category) => {
        const newItems = menuDisplayItems.filter((item) => item.category === category);
        setMenuItem(newItems)
    }

    const result = menuItem.map((item) => {
        const {category, desc, id, img, price, title} = item;
        return (
            <div className="col-md-6" key={id}>
                <div className="row p-3">
                    <div className="col-md-4">
                        <img src={img} alt={title} className="rounded img-thumbnail" width="100%"/>
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-between">
                        <h3 className="text-capitalize">{title} <span className="text-primary">${price}</span></h3>
                        <p className="text-justify">{desc}</p>
                        <small className="text-muted text-capitalize btn btn-sm btn-outline-dark mb-1">{category}</small>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <>
            <MenuCategory filterItems={filterItems}/>
            {result}
        </>
    )
};

export default MenuItem;
