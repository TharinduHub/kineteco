import React, { useState, useEffect } from 'react';
import { generateClient, get } from "aws-amplify/api";
import ProductItem from './ProductItem';

const client = generateClient();

export const listProducts = `
  query ListProducts {
    listProducts {
      items {
        id
        dynamicSlug
        productName
      }
    }
  }
`;

const Products = () => {

  const [productData, setProductData] = useState([]);

  const loadProductData = async () => {
    
    const { data } = await client.graphql(
      { query: listProducts, authMode: 'apiKey' }
    );

    setProductData(data?.listProducts?.items);

    const { body } = await get({
      apiName:"kinetecocv6p1",
      path:"/cvinfo",
    }).response;
    const json = await body.json();
    console.log(json);
  }

  useEffect(() => {
    loadProductData();
  }, []);

  return (
    <section id="products" className="section">
      <header className="imageheader"></header>
      <div className="container">
        <h2 className="headline">Products</h2>
        <p>H+ Sport is <em>dedicated to creating</em> eco-friendly, high-quality, nutrient-rich, nutritional products that <em>enhance active lifestyles</em>. We <a href="#guarantee">guarantee</a> it. Take a look at some of our products.</p>
      </div>
      <ul className="product-list">
        {
          productData?.map((product) => <ProductItem dynamicSlug={`${product.dynamicSlug}`} productName={`${product.productName}`} />)
        }
      </ul>
    </section>
  );
}

export default Products;