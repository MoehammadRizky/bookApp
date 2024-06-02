import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/singlePage";
import Home from "./pages/home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SinglePage />} />
      </Routes>
    </BrowserRouter>
  );
}
