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
            <div className='d-flex align-items-center itemDetail'>
                <Card style={{ width: '25rem' }}>
                <div key= {item.id} className='card w-10 mt-3'>
                    <div className='cardText card-header'>{item.title}</div>
                    <div className='cardText card-body'>
                    <Card.Img className='zoom' variant="top" src={item.foto}/>
                    </div>
                    <div className='cardText card-body'>{item.descripcion}</div>
                    <div className='cardText card-body'> Precio : ${item.price}</div>
                    <div className='cardText card-footer'>
                        <ItemCount initial={1} stock={item.stock} onAdd={onAdd} />
                    </div>
                </div>
                </Card>
            </div>
        </div>
    )
}

export default ItemDetail
