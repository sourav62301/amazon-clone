import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <>
      <div className="home">
        <div className="home_container">
          <img
            className="home_image"
            src="https://i.gadgets360cdn.com/large/amazon_best_movies_apr_2021_1618911475061.jpg"
            alt="Prime Video"
          />

          <div className="home_row">

            <Product id="123545439" title='The Echo Dot' price={1000} image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/CC_Echo-dot_1x._SY304_CB648538971_.jpg"  rating={4} />

            <Product id="432567093" image="https://m.media-amazon.com/images/I/71iG+7Mv-zL._AC_SX960_SY720_.jpg" price={111990} title="MSI GF75 Intel Core i7Gaming Laptop Windows 10 Black"  rating={5} />

            <Product id="213678903" title="Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)" image="https://m.media-amazon.com/images/I/71os5DRhuSL._AC_UY327_FMwebp_QL65_.jpg" price = {25000} rating={5} />


          </div>

          <div className="home_row">
            <Product id="123545439" title='The Echo Dot' price={1000} image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/CC_Echo-dot_1x._SY304_CB648538971_.jpg"  rating={4} />



            <Product id="432567093" image="https://m.media-amazon.com/images/I/71iG+7Mv-zL._AC_SX960_SY720_.jpg" price={111990} title="MSI GF75 Intel Core i7Gaming Laptop Windows 10 Black"  rating={5} />

              

            <Product id="213678903" title="Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)" image="https://m.media-amazon.com/images/I/71os5DRhuSL._AC_UY327_FMwebp_QL65_.jpg" price = {25000} rating={5} />
          </div>  

          <div className="home_row">
            <Product id="432567093" image="https://m.media-amazon.com/images/I/71iG+7Mv-zL._AC_SX960_SY720_.jpg" price={111990} title="MSI GF75 Intel Core i7Gaming Laptop Windows 10 Black"  rating={5} />

                          

            <Product id="213678903" title="Samsung Galaxy M32 5G (Sky Blue, 8GB RAM, 128GB Storage)" image="https://m.media-amazon.com/images/I/71os5DRhuSL._AC_UY327_FMwebp_QL65_.jpg" price = {25000} rating={5} />
          </div>

        </div>
      </div>
    </>
  );
}

export default Home;
