import { BrowserRouter, Routes, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer";
 
import "./App.css";
// import { ThemeProvider } from "react-bootstrap";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<h1>Termo</h1>} />
        <Route path="*" element={<>404</>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
