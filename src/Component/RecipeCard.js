import "./Component.css";
import { FcNext } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { AiFillDelete } from "react-icons/ai";
import { useContext, useState } from "react";
import { DataContext } from "../Context/DataContext";
import { AiFillEdit } from "react-icons/ai";
import AddEditRecipeModal from "../features/AddRecipeModal";
export default function RecipeCard({ recipe }) {
  const { id, name, ingredients, instructions, cuisine, image } = recipe;
  const navigate = useNavigate();
  const [isEditModalOpen, setEditModal] = useState(false);
  const { dispatch } = useContext(DataContext);
  return (
    <div className="recipe-card" style={{ position: "relative" }}>
      <img height={"100px"} width={"100px"} src={image} alt="recipeImage" />
      <span style={{ position: "absolute", right: "0%" }}>
        <AiFillEdit size={20} onClick={() => setEditModal(!isEditModalOpen)} />
        <AiFillDelete
          size={20}
          onClick={() => dispatch({ type: "DELETE_RECIPE", payload: id })}
        />
      </span>
      <div>
        <h4>{name}</h4>
        <p>
          <span>Cuisine type:</span>
          <strong>{cuisine}</strong>
        </p>
        <p>
          <span>Ingredients:</span>
          <strong className="recipe-action">
            See Recipe <FcNext onClick={() => navigate(`recipe/${id}`)} />
          </strong>
        </p>
        <p>
          <span>Instructions:</span>
          <strong className="recipe-action">
            See Recipe <FcNext onClick={() => navigate(`recipe/${id}`)} />
          </strong>
        </p>
      </div>

      <div
        style={{
          position: "fixed",
          top: "0%",
          left: "10%",
          zIndex: "2",
          width: "80%"
        }}
      >
        {/* {isEditModalOpen && (
          <AddEditRecipeModal
            updateData={{
              ...recipe,
              instructions: recipe?.instructions?.join(","),
              ingredients: recipe?.ingredients?.join(",")
            }}
            setOpenModal={setEditModal}
            isUpdate={true}
          />
        )} */}
      </div>
    </div>
  );
}
