import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../components/Ratings';
import data from '../data';

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  return (
    <React.Fragment>
      <Link to="/">Back to results</Link>
      <div className="product-contents">
        <div className="product_img">
          <img className="" src={product.image} alt={product.name} />
        </div>
        <div className="product-details-wrap">
          <div className="product-details">
            <ul>
              <li>
                <h1>{product.name}</h1>
              </li>
              <li>
                <Rating
                  rating={product.rating}
                  numReviews={product.numReviews}
                />
              </li>
              <li>Price: R {product.price}</li>
              <li>
                Description: <p>{product.description}</p>
              </li>
            </ul>
          </div>
          <div className="product-details">
            <div className="product-details-card card-body">
              <ul>
                <li>
                  <div className="row">
                    <div>Price:</div>
                    <div className="price">R {product.price}</div>
                  </div>
                </li>

                <li>
                  <div className="row">
                    <div>Status:</div>
                    <div>
                      {product.countInStock > 0 ? (
                        <span className="success">In Stock</span>
                      ) : (
                        <span className="danger">Not Available</span>
                      )}
                    </div>
                  </div>
                </li>

                <li>
                  <button className="primary block">Add to Cart</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
