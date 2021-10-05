import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import ItemCart from "../items/ItemCart";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { Form, Row, Col, Button } from "react-bootstrap";
import {Link} from "react-router-dom";

const Cart = () => {
  const { cartList, cleanList, totalCount, totalPrice } = useCartContext();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const theSubmit = (e) => {
    e.preventDefault();
    let order = {};
    order.date = firebase.firestore.Timestamp.fromDate(new Date());
    order.buyer = formData;
    order.total = totalCount;
    order.items = cartList.map((cartItem) => {
      const id = cartItem.item.id;
      const title = cartItem.item.title;
      const price = cartItem.item.price * cartItem.cantidad;
      const quantity = cartItem.cantidad;
      return { id, title, price, quantity };
    });
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    ordersCollection
      .add(order)
      .then((resp) => {
        console.log(resp.id);
      })
      .catch((err) => console.error(err));
  };

  function onChangeFunc(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div>
      <center>
        {cartList.length === 0 ? (
          <h1>Tu carrito esta vacio!!</h1>
        ) : (
          <div>
            <h1>Aqui estan sus productos:</h1>
            {" "}
            {cartList.map((item) => (
              <ItemCart
                key={item.item.id}
                product={item.item}
                quantity={item.cantidad}
                isCartList
              ></ItemCart>
            ))}
            <button
              className="botonContador btn btn-danger"
              onClick={cleanList}
            >
              Eliminar todos los articulos
            </button>
            <div>
              <h1>Total a pagar $ {totalPrice()}</h1>
            </div>
          </div>
        )}
        <div>
          <div className="divForm1">
            <div className="divForm2">
              <h2>Datos para la compra</h2>
              <Form onSubmit={theSubmit} onChange={onChangeFunc}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Ingrese su nombre"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Cel</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Ingrese su celular"
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Ingrese su email"
                    />
                  </Form.Group>
                </Row>
                <Link to='/CartFinishScreen'>
                  <Button type="submit" onClick={cleanList} variant="primary">
                    Terminar Compra
                  </Button>
                </Link>
              </Form>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Cart;
