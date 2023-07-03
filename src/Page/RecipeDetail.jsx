import { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../Context/DataContext";
export default function RecipeDetail() {
  const { recipeId } = useParams();
  const {
    state: { data }
  } = useContext(DataContext);

  const recipeToShow = data.find(({ id }) => id == recipeId);
  console.log(recipeToShow);
  return (
    <div
      style={{
        textAlign: "left",
        display: "flex",
        width: "800px",
        margin: "0 auto",
        border: "1px solid black"
      }}
    >
      <img width="100%" src={recipeToShow?.image} alt="1" />
      <div style={{ padding: "1rem" }}>
        <h3 style={{ textAlign: "center" }}>{recipeToShow?.name}</h3>
        <p>
          <strong>Cuisine type:</strong>
          <span>{recipeToShow?.cuisine}</span>
        </p>
        <p>
          <strong>Ingredients:</strong>
          <span>{recipeToShow?.ingredients}</span>
        </p>

        <p>
          <strong>Instructions:</strong>
        </p>
        <div style={{ textAlign: "left" }}>
          {recipeToShow?.instructions?.map((el, index) => (
            <p>
              <strong>{index + 1}: </strong>
              <span>{el}</span>
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
