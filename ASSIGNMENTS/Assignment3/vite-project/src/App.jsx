import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormPage from "./pages/FormPage";
import CardPage from "./pages/CardPage";
import DetailsPage from "./pages/DetailsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormPage />} />
        <Route path="/cards" element={<CardPage />} />
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
