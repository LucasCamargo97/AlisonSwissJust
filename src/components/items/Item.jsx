import { useCartContext } from "../context/cartContext";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const Item = ({ product, isCartList, quantity }) => {
  const { addToCart, cleanOnce } = useCartContext();

  const onAdd = (cant) => {
    addToCart({ item: product, cantidad: cant });
  };

  return (
    <>
      <div className="d-flex align-items-center">
        <Card style={{ width: "20rem" }}>
          <div key={product.id} className="card w-10 mt-3">
            <div className="card-header">{product.title}</div>
            <div className="card-body">
              <Card.Img variant="top" src={product.foto} />
            </div>
            <div className="card-body"> Precio : {product.price}</div>
            <div className="card-footer">
              <Link to={`/Item/${product.id}`}>
                <button className="btn btn-primary btn-block">Detalles</button>
              </Link>
              <ItemCount
                isCartList={isCartList}
                quantity={quantity}
                initial={1}
                stock={product.stock}
                onAdd={onAdd}
              />
              {isCartList && (
                <button
                  className="botonContador btn btn-danger"
                  onClick={() => cleanOnce(product)}
                >
                  Eliminar
                </button>
              )}
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Item;
