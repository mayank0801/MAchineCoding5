import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { v4 as uuid } from "uuid";
export default function AddEditRecipeModal({
  setOpenModal,
  setEditModal,
  updateData,
  isUpdate
}) {
  const { dispatch } = useContext(DataContext);

  let intaialData;
  if (isUpdate) intaialData = updateData;
  else
    intaialData = {
      name: "",
      image:
        "https://st4.depositphotos.com/14953852/22772/v/600/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg",
      ingredients: "",
      instructions: "",
      cuisine: ""
    };

  const [recipeData, setRecipeData] = useState(intaialData);

  function handleChange(name, value) {
    setRecipeData({ ...recipeData, [name]: value });
  }
  function submitHandler() {
    const dataToPost = {
      id: uuid(),
      ...recipeData,
      ingredients: recipeData?.ingredients?.split(","),
      instruction: recipeData?.instructions?.split(",")
    };
    if (isUpdate)
      dispatch({
        type: "UPDATE_RECIPE",
        payload: { id: updateData.id, value: dataToPost }
      });
    else {
      dispatch({ type: "ADD_RECIPE", payload: dataToPost });
    }
    setRecipeData(intaialData);
    setOpenModal(false);
  }

  console.log(recipeData);
  return (
    <div style={{ backgroundColor: "grey" }}>
      <h1>Add Recipe</h1>
      <div className="feature-container">
        <label>
          <span>Name:</span>
          <input
            type="text"
            value={recipeData?.name}
            onChange={(e) => handleChange("name", e.target.value)}
          />
        </label>
        <label>
          <span>Image link:</span>
          <input
            type="text"
            value={recipeData?.image}
            onChange={(e) => handleChange("image", e.target.value)}
          />
        </label>
        <label>
          <span>Cusine</span>
          <input
            type="text"
            value={recipeData?.cuisine}
            onChange={(e) => handleChange("cuisine", e.target.value)}
          />
        </label>
        <label>
          <span>Ingredients:(give ingredients sperated by comma ",")</span>
          <textarea
            type="text"
            value={recipeData?.ingredients}
            onChange={(e) => handleChange("ingredients", e.target.value)}
          />
        </label>

        <label>
          <span>Instruction:(give instruction sperated by comma ",")</span>
          <textarea
            type="text"
            value={recipeData?.instructions}
            onChange={(e) => handleChange("instruction", e.target.value)}
          />
        </label>

        <button onClick={submitHandler}>Add</button>
      </div>

      <button onClick={() => setOpenModal(false)}>Close</button>
    </div>
  );
}
