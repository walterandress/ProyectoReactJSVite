import cart from "../imagenes/carrito2.png";

export const CartWidget = () => {
  return (
    <>
      <a href="#" className="carrito"><img src={cart} alt="carro" width="50" height="50"/><span> 5</span></a>
    </>
  );
};