import { createContext, useReducer } from "react";
import { recipes } from "../data";

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const recipesData = JSON.parse(localStorage.getItem("recipes"));

  function reducer(state, action) {
    switch (action.type) {
      case "FILTER_SEARCHCHANGE":
        return { ...state, searchValue: action.payload };
      case "FILTER_BASIS":
        return { ...state, filterBasis: action.payload };
      case "ADD_RECIPE":
        const updatedData = [...state.data, action.payload];
        localStorage.setItem("recipes", JSON.stringify(updatedData));
        return { ...state, data: updatedData };
      case "DELETE_RECIPE": {
        const updatedData = state.data.filter(
          ({ id }) => id !== action.payload
        );
        localStorage.setItem("recipes", JSON.stringify(updatedData));
        return { ...state, data: updatedData };
      }
      case "UPDATE_RECIPE": {
        const updatedData = state.data.map((recipe) => {
          if (recipe.id === action.payload.id)
            return { ...action.payload.value };
          return { ...recipe };
        });
        localStorage.setItem("recipes", JSON.stringify(updatedData));
        return { ...state, data: updatedData };
      }
      default:
        return { ...state };
    }
  }

  const [state, dispatch] = useReducer(reducer, {
    data: recipesData ? recipesData : recipes,
    searchValue: "",
    filterBasis: "name"
  });

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}
