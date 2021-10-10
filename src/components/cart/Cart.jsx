import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import ItemCart from "../items/ItemCart";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase/app";
import "firebase/firestore";
import { Form, Row, Col, Button} from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
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
        history.push(`/purchased/${resp.id}`);
      })
      .catch((err) => console.error(err))
      .finally(() => {
        cleanList();
      });

    const itemsUpdate = db.collection('items').where(
      firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.item.id)
    ) 
    const batch = db.batch();
      
    itemsUpdate.get()
    .then( collection=>{
      collection.docs.forEach(docSnapshot => {
          batch.update(docSnapshot.ref, {
              stock: docSnapshot.data().stock - cartList.find(item => item.item.id === docSnapshot.id).cantidad
          })
      })

      batch.commit().then(res =>{
          console.log('res batch:', res)
      })
  })

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
          <div>
            <h1>Tu carrito esta vacio!!</h1>
            <div><img src="https://draidmg.com/wp-content/themes/butiko/images/empty-cart-bg.png" alt=""/></div>
          </div>
          
        ) : (
          <div>
            <h1>Aqui estan sus productos:</h1>{" "}
            {cartList.map((item) => (
              <div className='ItemCart'>
                <ItemCart
                key={item.item.id}
                product={item.item}
                quantity={item.cantidad}
                isCartList
              ></ItemCart>
              </div>

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
            <div>
          <div className="divForm1">
            <div className="divForm2">
              <h2>Datos para la compra:</h2>
              <Form onSubmit={theSubmit} onChange={onChangeFunc}>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label className='formTitleText'>Nombre:</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      placeholder="Ingrese su nombre"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label className='formTitleText'>Celular:</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      placeholder="Ingrese su celular"
                      required
                    />
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label className='formTitleText'>Email:</Form.Label>
                    <Form.Control
                      type="text"
                      name="email"
                      placeholder="Ingrese su email"
                      required
                    />
                  </Form.Group>
                  <Form.Group as={Col}>
                    <Form.Label className='formTitleText'>Repetir Email:</Form.Label>
                    <Form.Control
                      type="text"
                      name="email2"
                      placeholder="Ingrese su email nuevamente"
                      required
                    />
                  </Form.Group>
                </Row>
                <Button type="submit" variant="primary">
                  Terminar Compra
                </Button>
              </Form>
            </div>
          </div>
          </div>
        </div>
      )}
        
      </center>
    </div>
  );
};

export default Cart;
