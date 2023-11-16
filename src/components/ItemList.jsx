import { Container } from "react-bootstrap";

import { Item } from "./Item";

export const ItemList = ({ items }) => {
  return (
    <Container>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </Container>
  );
};