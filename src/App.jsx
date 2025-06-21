import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import RestaurantTableCreatePage from "./pages/RestaurantTableCreatePage";
import OrderDetails from "./components/OrderDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="restaurant-table"
          element={<RestaurantTableCreatePage />}
        />
        <Route path="/order-details" element={<OrderDetails />} />
      </Routes>
    </>
  );
}

export default App;
