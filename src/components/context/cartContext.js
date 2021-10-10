import {useState, createContext, useContext} from 'react';

export const cartContext = createContext([])

export const useCartContext = () => useContext(cartContext)

export default function CartContextProvider ({children}) {
    const [cartList, setCartList] = useState ([])
    const [totalCount, setTotalCount] = useState (0)

    const addToCart = (data) => {
        let prevCart = [...cartList]

        if (prevCart.some(i => i.item.id === data.item.id)) {
            prevCart.find(i => i.item.id === data.item.id).cantidad += data.cantidad
            setCartList(prevCart)
        } else {
            setCartList([...cartList, data])
        }
    }
    function cleanList() {
        setCartList([])
    }
    function cleanOnce(product) {
        setCartList (cartList.filter(item => item.item.id !== product.id))
    }

    const totalPrice =()=>{
        return cartList.reduce((acum, valor)=>(acum + (valor.cantidad * valor.item.price)), 0) 
    }
    

    return(
        <cartContext.Provider value= { {
            cartList: cartList,
            totalCount: totalCount,
            totalPrice,
            setTotalCount,
            addToCart,
            cleanList,
            cleanOnce
        }} >
            {children}
        </cartContext.Provider>
    )
}

