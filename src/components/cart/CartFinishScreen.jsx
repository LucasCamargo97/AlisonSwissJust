import { getFirestore } from "../../services/getFirebase";
import "firebase/firestore";
import {Link} from "react-router-dom";
import {Button}  from 'react-bootstrap'

function CartFinishScreen() {
    const db = getFirestore();
    const ordersCollection = db.collection("orders")
    return (
        <div>
            <h1>el ID de su compra es ${ordersCollection.doc.id}</h1>
            <h2>GRACIAS POR SU COMPRA!</h2>
            <Link to='/'>
                <Button variant= "primary">Volver al inicio</Button>
            </Link>
            
        </div>
    )
}

export default CartFinishScreen
