import ItemCount from './ItemCount';
import {Card} from 'react-bootstrap';
import {useCartContext} from '../context/cartContext'

const ItemDetail = ({item}) => {

    const {addToCart} = useCartContext()

    const onAdd=(cant)=>{
        addToCart({item: item, cantidad: cant})
    }



    return (
        <div>
            <div className='d-flex align-items-center'>
                <Card style={{ width: '20rem' }}>
                <div key= {item.id} className='card w-10 mt-3'>
                    <div className='card-header'>{item.title}</div>
                    <div className='card-body'>
                    <Card.Img variant="top" src={item.foto}/>
                    </div>
                    <div className='card-body'> Precio : {item.price}</div>
                    <div className='card-footer'>
                        <ItemCount initial={1} stock={5} onAdd={onAdd} />
                    </div>
                </div>
                </Card>
            </div>
        </div>
    )
}

export default ItemDetail
