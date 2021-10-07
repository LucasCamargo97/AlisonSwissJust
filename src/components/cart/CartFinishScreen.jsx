import { useState } from "react";
import { useCartContext } from "../context/cartContext";
import { getFirestore } from "../../services/getFirebase";
import firebase from "firebase/app";
import "firebase/firestore";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";

const CartFinishScreen = () => {
  const {cleanList} = useCartContext();

  return (
    <div>
      <h1>Listo su codigo de orden es: {}</h1>
      <Link to='/'>
        <Button onClick={cleanList()}></Button>
      </Link>
      
    </div>
  )
  }

export default CartFinishScreen;
