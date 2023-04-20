const MenuCategory = ({filterItems}) => {
    return (
        <div className="row">
            <div className="col-md-8 offset-md-2">
                <div className="d-grid my-3">
                    <div className="btn-group">
                        <button type="button" className="btn btn-primary mx-1" onClick={()=> filterItems('')}>All</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={()=> filterItems('breakfast')}>Breakfast</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={()=> filterItems('lunch')}>Lunch</button>
                        <button type="button" className="btn btn-primary mx-1" onClick={()=> filterItems('dinner')}>Dinner</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuCategory;
