/*Template generated by WebStorm on Sunday (5/7/23), 8:25 PM.
 * Author: kramstyles
 * Filename: SearchForm.jsx
 */

import { useState } from "react";

import { InlineForm } from "../../components/Forms";
import { FaCocktail } from "react-icons/fa";
import { useCocktailContext } from "./context";

const SearchForm = () => {
  const { searchValue, setSearchValue } = useCocktailContext();
  const [feedback, setFeedback] = useState({
    message: "",
    type: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchValue) updateFeedback("Cocktail is missing", "is-invalid");
    else updateFeedback(searchValue, "is-valid");
  };
  const updateFeedback = (message = "", type = "") =>
    setFeedback({ message, type });
  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <InlineForm
          feedback={feedback.type}
          handleSubmit={handleSubmit}
          handleChange={(e) => setSearchValue(e.target.value)}
          clearAlert={updateFeedback}
          label="Search your Favorite Cocktail!"
          value={searchValue}
          btnText="Search"
          feedbackMsg={feedback.message}
          placeholder={"Enter Cocktail"}
          icon={<FaCocktail />}
        />
      </div>
    </div>
  );
};

export default SearchForm;
