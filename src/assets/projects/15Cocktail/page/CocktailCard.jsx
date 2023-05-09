/*Template generated by WebStorm on Tuesday (5/9/23), 12:07 PM.
 * Author: kramstyles
 * Filename: CocktailCard.jsx
 */
import PropTypes from "prop-types";
import { useCocktailContext } from "../context";
const CocktailCard = ({ cocktailID }) => {
  /* We would use the context searchValue and cocktailID to fetch existing cocktail data saved
   * in our session storage. This is to limit the number of API calls and improve speed.*/
  const { searchValue } = useCocktailContext();

  // Fetch data from session storage
  let cocktailCollection = sessionStorage.getItem(`cocktail_${searchValue}`);
  if (cocktailCollection) {
    // We get the particular cocktail from the collection since it's the last searched data
    cocktailCollection = JSON.parse(cocktailCollection);

    const cocktail = cocktailCollection.filter(
      (item) => item.id === cocktailID
    );
    if (cocktail && cocktail.length > 0) {
      // Here we destructure and display components.
      const {
        glass,
        image,
        info,
        instructions,
        name,
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      } = cocktail[0];
      const ingredients = [
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
      ];
      return (
        <div className="row align-items-end">
          <div className="col-md-6">
            <img
              src={image}
              alt={name}
              className="rounded img-thumbnail w-100"
            />
          </div>
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header text-center">
                <h2>
                  <b>{name}</b>
                </h2>
              </div>
              <div className="card-body">
                <div className="card-title text-primary fw-bold">
                  {glass} <span className="text-muted">{info}</span>
                </div>
                <p>{instructions}</p>
              </div>
              <div className="card-footer">
                Ingredients:{" "}
                {ingredients.map((item) => {
                  if (item)
                    return <span className="badge bg-dark mx-1">{item}</span>;
                })}
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
  return (
    <div className="container">
      <h1 className="text-center">
        You tried to access an ID that's not in our own database. <br />
        Please use the search form.{" "}
      </h1>
    </div>
  );
};

CocktailCard.propTypes = {
  cocktailID: PropTypes.string.isRequired,
};

export default CocktailCard;
