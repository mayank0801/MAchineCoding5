import { useContext, useState } from "react";
import RecipeCard from "../Component/RecipeCard";
import { DataContext } from "../Context/DataContext";
import { filterData } from "../utlis/utlis";
import { IoAddCircleSharp } from "react-icons/io5";
import AddEditRecipeModal from "../features/AddRecipeModal";

export default function Home() {
  const {
    state: { data, searchValue, filterBasis },
    dispatch
  } = useContext(DataContext);
  // console.log(state);

  const [isopenModal, setOpenModal] = useState(false);

  const dataRender = filterData(searchValue, filterBasis, data);
  return (
    <div>
      <h1>Recipes </h1>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <input
          type="text"
          placeholder="Search "
          onChange={(e) =>
            dispatch({ type: "FILTER_SEARCHCHANGE", payload: e.target.value })
          }
        />
        <h3>Filters</h3>
        <label>
          <input
            type="radio"
            name="filterBais"
            value="name"
            checked={filterBasis === "name"}
            onChange={(e) =>
              dispatch({ type: "FILTER_BASIS", payload: e.target.value })
            }
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            name="filterBasis"
            value="ingredients"
            checked={filterBasis === "ingredients"}
            onChange={(e) =>
              dispatch({ type: "FILTER_BASIS", payload: e.target.value })
            }
          />
          Ingreidnts
        </label>
        <label>
          <input
            type="radio"
            checked={filterBasis === "cuisine"}
            name="filterBasis"
            value="cuisine"
            onChange={(e) =>
              dispatch({ type: "FILTER_BASIS", payload: e.target.value })
            }
          />
          Cusines
        </label>
      </div>

      <div className="recipes-container">
        {dataRender.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>

      <IoAddCircleSharp size={50} onClick={() => setOpenModal(!isopenModal)} />
      <div style={{ position: "absolute", top: "50%" }}>
        {isopenModal && <AddEditRecipeModal setOpenModal={setOpenModal} />}
      </div>
    </div>
  );
}
