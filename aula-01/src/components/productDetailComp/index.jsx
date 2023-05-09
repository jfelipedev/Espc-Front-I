// import { useParams, useState, useEffect } from "react-router-dom";
// import axios from "axios";

function ProductDetailComp() {
  // const { id } = useParams();

  // const [data, setData] = useState({
  //   title: null,
  //   descritpion: null,
  //   price: null,
  //   images: null,
  // });

  // const fetchData = async () => {
  //   const response = await fetch(`https://dummyjson.com/products/${id}`);
  //   const jsonData = await response.json();
  //   setData({
  //     title: jsonData.products.title,
  //     descritpion: jsonData.products.description,
  //     price: jsonData.products.price,
  //     images: jsonData.products.images,
  //   });
  // };
  // useEffect(() => {
  //   fetchData();
  // }, []);

  

  return (
    <div className="container">
      <h1>teste</h1>
      {/* {data.map((item) => (
        <div key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
          <p>Preço: R$ {item.price}</p>
        </div>
      ))} */}
    </div>
  );
}

export default ProductDetailComp;
