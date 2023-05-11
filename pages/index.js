import React from "react";

import { Navbar, Cart, Footer, FooterBanner, Layout, Product, HeroBanner } from "../components/index";
import { client } from "../lib/client";



const Home = ({ product, bannerData }) => {
  
  
 
  return (
    <div className="">
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of many variations</p>
      </div>

      <div className='products-container'>
        {product.length > 0 && product.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>

      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const product = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: {
      product,
      bannerData
    }
  }
}

export default Home;

