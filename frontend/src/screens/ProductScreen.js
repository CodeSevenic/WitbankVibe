import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Rating from '../components/Ratings';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import { productDetails } from '../actions/productActions';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const [qty, setQty] = useState(1);
  const prodDetails = useSelector((state) => state.prodDetails);
  const { loading, error, product } = prodDetails;

  useEffect(() => {
    dispatch(productDetails(productId));
  }, [dispatch, productId]);

  const addToCardHandler = () => {
    props.history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <React.Fragment>
      {loading ? (
        <LoadingBox />
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
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
                    {product.countInStock > 0 && (
                      <>
                        <li>
                          <div className="row">
                            <div>Qty</div>
                            <div>
                              <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                              >
                                {[...Array(product.countInStock).keys()].map(
                                  (x) => (
                                    <option key={x + 1} value={x + 1}>
                                      {x + 1}
                                    </option>
                                  )
                                )}
                              </select>
                            </div>
                          </div>
                        </li>
                        <li>
                          <button
                            onClick={addToCardHandler}
                            className="primary block"
                          >
                            Add to Cart
                          </button>
                        </li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </React.Fragment>
  );
}
