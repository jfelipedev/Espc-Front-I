import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.scss";

import ProductsDetailed from "./routes/productDatail.jsx";
import Home from "./routes/home.jsx";
import ErrorPage from "./routes/errorPage.jsx";
import Login from "./routes/login.jsx";
import MainLayout from "./layouts/main-layout";
import MyProvider from "./contexts/MyContext";

function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/produtos/:id" element={<ProductsDetailed />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
