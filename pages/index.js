import React from 'react';
import { client } from '../lib/client';

import { FooterBanner, HeroBanner, Product } from '../components';

const Home = ({ productData, bannerData }) => {
  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />

      <div className='products-heading'>
        <h2>Best Selling Products</h2>
        <p>Speakers of different Variations</p>
      </div>

      <div className='products-container'>
        {productData.map((product) => <Product key={product._id} product={product} />)}
        {console.log(productData)}
      </div>
      

      <FooterBanner footerBanner={bannerData.length && bannerData[0]} />
    </>
  )
}

export const getServerSideProps = async () => {
  // Fetch all the products data
  const productQuery = '*[_type == "product"]';
  const productData = await client.fetch(productQuery);

  // Fetch all the banner data
  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  console.log(bannerData)
  console.log(productData)

  return {
    props: { productData, bannerData }
  }
}

export default Home;