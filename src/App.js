import Header from "./Component/Header";
import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import RecipeDetail from "./Page/RecipeDetail";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
    </div>
  );
}
