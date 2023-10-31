import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/ItemListContainer";
 
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting = "Bienvenidos (no se como cambiarle el estilo a bootstrap dentro de React, proxima entrega le hago el CSS a mano, no me dio el tiempo <3)" />
    </>  
  )
}

export default App
