/* eslint-disable react/jsx-key */
import { useState, useEffect } from "react";
import axios from "axios";
import "./styles.scss";
import { Link } from "react-router-dom";

function ShopProductsComp() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get("https://dummyjson.com/products");
      setData(result.data.products);
      console.log(result.data.products);
    };
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="cards-container">
        {data.slice(0, 20).map((item) => (
          <Link to={"/produtos/" + item.id}>
            <div className="cards" key={item.id}>
              <img className="thumbnail" src={item.thumbnail} alt="" />
              <div className="card-description">
                <h2 className="product-title">{item.title}</h2>
                <p className="brand-name">{item.brand}</p>
                <p className="product-price">R$ {item.price > 1000 ? item.price.toLocaleString('pt-BR') : item.price},00</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ShopProductsComp;
