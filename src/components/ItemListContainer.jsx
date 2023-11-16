import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";

import { ItemList } from "./ItemList";
import { products } from "../data/products";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();

  console.log(id);

  useEffect(() => {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(products); 
      }, 2000);
    }); 

    promise.then((response) => {
      if (id) {
        const filtrados = response.filter((item) => item.categoria === id);
        setItems(filtrados);
      } else {
        setItems(response);
      }
    })
    .finally(() => setLoading(false));
  }, [id]); 


  return (
    <Container clasName="">
      <h1>Lista</h1>
      <ItemList items={items} />
    </Container>
  );
};
