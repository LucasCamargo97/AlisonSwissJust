import { getFirestore } from "../../services/getFirebase";
import "firebase/firestore";
import {Link} from "react-router-dom";
import {Button}  from 'react-bootstrap'
import {useState, useEffect} from 'react'

function CartFinishScreen() {
    const [order, setOrder] = useState();

    useEffect(() => {
        const dbQuery = getFirestore();
      dbQuery
        .collection("orders")
        .get()
        .then((resp) => {
          setOrder(
            resp.docs.map((order) => ({ id: order.id, ...order.data() }))
          )}
        })
    
    return (
        <div>
            <h1>el ID de su compra es {`${order.id}`} </h1>
            <h2>GRACIAS POR SU COMPRA!</h2>
            <Link to='/'>
                <Button variant= "primary">Volver al inicio</Button>
            </Link>
        </div>
    )
}


export default CartFinishScreen
