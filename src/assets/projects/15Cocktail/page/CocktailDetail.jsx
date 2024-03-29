/*Template generated by WebStorm on Sunday (5/7/23), 8:43 PM.
 * Author: kramstyles
 * Filename: CocktailDetail.jsx
 */

import Jumbotron from "../../../components/Jumbotron";
import { useParams } from "react-router-dom";
import CocktailCard from "./CocktailCard";

const CocktailDetail = () => {
  const { id } = useParams();

  return (
    <>
      <Jumbotron title={`Cocktail ID: ${id}`} />
      <div className="container">
        <CocktailCard cocktailID={id} />
      </div>
    </>
  );
};

export default CocktailDetail;
