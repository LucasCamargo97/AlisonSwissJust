import "firebase/firestore";
import { Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const CartFinishScreen = () => {
  const { orderId } = useParams();
  return (
    <div>
      <div className='cartFinishScreen'>
        <h1>Listo! muchas gracias por su compra, su codigo de orden es: "{orderId}"</h1>
        <img className='imgFinishScreen' src="https://cdn-icons-png.flaticon.com/512/1289/1289348.png" alt=""/>
      </div>
      <div className='cartFinishScreen'>
        <Link to="/">
            <Button className='finishButton'>Volver al inicio</Button>
        </Link>
      </div>
    </div>
  );
};

export default CartFinishScreen;
