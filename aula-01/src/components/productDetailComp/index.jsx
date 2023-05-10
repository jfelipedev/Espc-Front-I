import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";

function ProductDetailComp() {
  const { id } = useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resultP = await axios.get("https://dummyjson.com/products");
      setProducts(resultP.data.products);
      console.log(resultP.data.products);
    };
    fetchData();
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`https://dummyjson.com/products/${id}`);
      setData(result.data);
      console.log(result.data);
    };
    fetchData();
  }, []);
  const relatedProducts = products.filter(product => product.id !== id).slice(0, 4);
  return (
    <div className="container">
      <div className="cards-detailed" key={data.id}>
        <img className="thumbnail-detailed" src={data.thumbnail} alt="" />
        <div className="card-description-detailed">
          <h2 className="product-title-detailed">{data.title}</h2>
          <p className="brand-name-detailed">{data.brand}</p>
          <p className="product-price-detailed">
            R${" "}
            {data.price > 1000
              ? data.price.toLocaleString("pt-BR")
              : data.price}
            ,00
          </p>
          <p className="product-description-detailed">{data.description}</p>
        </div>
      </div>
        <div className="more-products-section-title"><h1 className="product-title-detailed">Veja outros produtos</h1></div>
      <div className="more-products">
        {relatedProducts.map((item) => (
          <Link key={item.id} to={"/produtos/" + item.id}>
            <div className="cards">
              <img className="thumbnail" src={item.thumbnail} alt="" />
              <div className="card-description">
                <h2 className="product-title">{item.title}</h2>
                <p className="brand-name">{item.brand}</p>
                <p className="product-price">
                  R${" "}
                  {item.price > 1000
                    ? item.price.toLocaleString("pt-BR")
                    : item.price}
                  ,00
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ProductDetailComp;
