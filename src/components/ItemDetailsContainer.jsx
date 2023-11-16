import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { products } from "../data/products";

export const ItemDetailsContainer = () => {
  const [item, setItem] = useState(null)

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products); 
      }, 2000);
    }); 

    promise.then((response) => {
      const filtrados = response.find((item) => item.id === id);
        setItem(filtrados);
      })
  }, [id]); 

  return (
  <div>
    <h1>{item.titulo}</h1>
    <img src={item.imagen}balt="" />
    <p>{item.descripcion}</p>
  </div>
  );
};