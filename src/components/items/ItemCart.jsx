import { useCartContext } from "../context/cartContext";
import {Table} from "react-bootstrap";
import { Link } from "react-router-dom";

const ItemCart = ({ product, quantity }) => {
  const {cleanOnce} = useCartContext();

  return (
      <div className='divItemCart'>
          <Table striped bordered hover>
                <thead>
                  <tr>
                    <th></th>
                    <th>Articulo</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><img className='imgCart' src={product.foto} alt="" /></td>
                    <td>{product.title}</td>
                    <td>{quantity}</td>
                    <td>{product.price}</td>
                    <td className='TdItemCart'>
                      <Link to={`/Item/${product.id}`}>
                        <button className="btn btn-primary btn-block">Detalles</button>
                      </Link>
                      <button
                        className="botonContador btn btn-danger"
                        onClick={() => cleanOnce(product)}>
                        Eliminar
                      </button>
                    </td>
                  </tr>
                </tbody>
          </Table>
      </div>
  )}

export default ItemCart;