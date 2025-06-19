import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurantTableCreatePage from "./pages/RestaurantTableCreatePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="restaurant-table"
          element={<RestaurantTableCreatePage />}
        />
      </Routes>
    </>
  );
}

export default App;
