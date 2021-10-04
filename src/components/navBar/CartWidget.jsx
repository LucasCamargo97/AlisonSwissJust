import {Cart4} from 'react-bootstrap-icons';
import {useCartContext} from "../context/cartContext";
import {useEffect} from'react';

function CartWidget() {
    const {cartList, totalCount, setTotalCount} = useCartContext()

    useEffect(()=> {
        let cantidadTotal = 0
        cartList?.forEach(i => (cantidadTotal += i.cantidad))
        setTotalCount(cantidadTotal)
    }, [cartList, setTotalCount] )

    return (
        <div>
                <Cart4 size={30}/>
                <div className="cartWidgetCantDiv"><h2 className="cartWidgetCantText">{totalCount}</h2></div>
        </div>
    )
}

export default CartWidget
