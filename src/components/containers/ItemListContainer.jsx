import { useState, useEffect } from "react";
import ItemList from "../items/ItemList";
import { useParams } from "react-router-dom";
import { getFirestore } from "../../services/getFirebase";

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState();
  const [loading, setLoading] = useState(true);
  const { idCategoria } = useParams();

  useEffect(() => {
    if (idCategoria) {
      const dbQuery = getFirestore();
      dbQuery
        .collection("items")
        .where("categoria", "==", idCategoria)
        .get()
        .then((resp) => {
          setProducts(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    } else {
      const dbQuery = getFirestore();
      dbQuery
        .collection("items")
        .get()
        .then((resp) => {
          setProducts(
            resp.docs.map((product) => ({ id: product.id, ...product.data() }))
          );
        })
        .catch((err) => console.log(err))
        .finally(() => setLoading(false));
    }

  }, [idCategoria]);

  return (
    <div>
      <h1 className="greeting">Hola, bienvenido/a a nuestra tienda!</h1>
      <div className="grid-responsive">
        {loading ? (
          <h2 className="greeting">Cargando...</h2>
        ) : (
          <ItemList className="grid-responsive" products={products} />
        )}
      </div>
    </div>
  );
}

export default ItemListContainer;
