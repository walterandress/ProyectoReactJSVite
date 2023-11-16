import { NavLink } from "react-router-dom";
import { CartWidget } from "./CartWidget";

import { products } from "../data/products";

const categories = products.map((item) => item.categoria);
const uniqueCategories = new Set(categories); // Nos muestra una unica categoria si mas de un item pertenece a la misma, no la repite.

export const NavBar = () => {
  return ( 
    <NavBar className="barraN">
      <h1 className="logo"><a href="#">Meli. Entre hilos y papeles</a></h1>
      <ul>
        {[...uniqueCategories].map((item) => (
          <li as={NavLink} key={item} to={`/categoria/${item}`}><a  className="items" >
            {item}
          </a></li>
        ))}
        <li><CartWidget /></li>
      </ul>
    </NavBar>
  );
};
