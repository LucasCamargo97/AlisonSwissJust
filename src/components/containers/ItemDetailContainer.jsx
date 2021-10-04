import { useState, useEffect } from "react";
import ItemDetail from "../items/ItemDetail";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

const ItemDetailContainer = () => {
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const dbQuery = getFirestore();
    dbQuery
      .collection("items")
      .doc(id)
      .get()
      .then((resp) => setItem({ id: resp.id, ...resp.data() }))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  });
  // Sin Firebase
  // useEffect(() => {
  //     newFetch
  //         .then((res)=> {
  //             if (id){
  //                 const itemFil = res.filter((item) => item.id
  //                 === parseInt(id))
  //                 setItem(itemFil)
  //                 .finally(()=> setLoading(false))
  //             } else {
  //                 setItem(res)
  //             }
  //         })
  //         .catch((err) => console.error(err))
  //         .finally(()=> setLoading(false))
  //     },[id])

  return (
    <>{loading ? <h2>Cargando...</h2> : item && <ItemDetail item={item} />}</>
  );
};

export default ItemDetailContainer;
