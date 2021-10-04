import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ItemCount = ({ stock, isCartList, quantity, initial, onAdd }) => {
  const [count, setCount] = useState(initial);
  const [changeBtn, setChangeBtn] = useState(true);

  function handleCountUp() {
    if (count < stock) {
      setCount(count + 1);
    }
  }

  function handleCountDown() {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const addToCart = () => {
    onAdd(count);
    setChangeBtn(false);
  };
  return (
    <div>
      {!isCartList && <p>Stock : {stock} </p>}
      <p>Cantidad: {quantity ? quantity : count}</p>
      <br />
      <Button
        onClick={handleCountUp}
        disabled={stock <= 0}
        className="botonContador"
        variant="primary"
      >
        +
      </Button>
      {changeBtn ? (
        <button className="botonContador btn btn-primary" onClick={addToCart}>
          Agregar Al carrito
        </button>
      ) : (
        <div>
          <Link to="/cart">
            <br />
            <button className="botonContador btn btn-primary">
              Terminar Compra
            </button>
            <br />
          </Link>
          <Link to="/">
            <br />
            <button className="botonContador btn btn-primary">
              Seguir Comprando
            </button>
          </Link>
        </div>
      )}
      <br />
      <Button
        onClick={handleCountDown}
        disabled={count <= 0}
        className="botonContador"
        variant="primary"
      >
        -
      </Button>
    </div>
  );
};

export default ItemCount;
