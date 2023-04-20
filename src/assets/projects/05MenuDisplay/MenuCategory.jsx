const MenuCategory = ({ filterItems, categories }) => {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <div className="d-grid my-3">
          <div className="btn-group">
            {categories.map((category, index) => {
              return (
                <button
                  type="button"
                  key={index}
                  className="btn btn-primary mx-1 text-capitalize"
                  onClick={() => filterItems({ category })}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuCategory;
