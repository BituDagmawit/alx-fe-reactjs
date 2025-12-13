import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import BlogPost from "./BlogPost"; // REQUIRED

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        {/* REQUIRED dynamic route */}
        <Route path="/blog/:id" element={<BlogPost />} />
      </Routes>
    </BrowserRouter>
  );
}
