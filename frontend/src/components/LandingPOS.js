import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Pos.css';
import Swal from "sweetalert2";
import pos from '../images/pos.png';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import loaading from'../images/loading-gif.gif'
const LandingPOS = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/products/getProduct"
        );
        setProducts(response.data);
        console.log(response.data);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Calculate total whenever cart or products change
    let newTotal = 0;
    for (const productId in cart) {
      const product = products.find((p) => p.Product_id === parseInt(productId));
      if (product) {
        newTotal += product.Product_Price * cart[productId];
      }
    }
    setTotal(newTotal);
  }, [cart, products]);

  const addToCart = (productId) => {   //takes a productId as an argument, which represents the unique identifier of the product to be added
    setCart((prevCart) => ({  
      //prevCart: This parameter represents the previous state of the cart.
      ...prevCart,    // functional update. It takes the previous state (prevCart) as an argument and returns the new state.
      [productId]: (prevCart[productId] || 0) + 1,
      
    }
  ));
  };


  const alert2 = () => {

    if (total > "0") {
     
   Swal.fire({
  title: "Thank You for using my POS system",
  imageUrl: pos,
  imageWidth: 100,
  imageHeight: 100,
  imageAlt: "Custom image"
});
    }
    else{
      alert("Please Purchase something!")
    }

   
      
    
  }

  

  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const updatedCart = { ...prevCart };
      if (updatedCart[productId] > 0) {
        updatedCart[productId]--;
      }
      return updatedCart;
    });
  };

  return (
    <div className="bg">
      <h1>Products Available</h1>

    <br></br>

      {loading ? (
          <img style={{paddingTop: "40px"}} width={55} src={loaading}></img>   
      ) : products.length > 0 ? (
        <div style={{ display: "flex", paddingTop: "40px" } } className="head">
          <div style={{ display: "flex", flexWrap: "wrap" }} className="head2">


          <br></br>

            {products.map((product, index) => (
              <div key={index} style={{ flexBasis: "40%", padding: "10px" }}>


                {/* Table Content */}
                <button className="car" onClick={() => addToCart(product.Product_id)} style={{ padding: "4px 60px" }}>
                <img width={140} src={require(`../images/${product.Product_Image}`)} />
                  <h6 style={{color: "black", fontSize: "50px"}}>{product.Product_Name}</h6>
                  <p style={{color: "black"}}>KSH {product.Product_Price}</p>
                
                </button>
              </div>




            ))}
          </div>

            <div className="bg2">
              </div>

          <div style={{ backgroundColor: "", padding: "70px" }} className="cart">
            <h2>Cart</h2>
            {Object.keys(cart).map((productId) => {
              const product = products.find(
                (p) => p.Product_id === parseInt(productId)
              );
              return (
                <div key={productId}>
                  <p>
                    {product.Product_Name} - ${product.Product_Price} x{" "}
                    <button onClick={() => removeFromCart(productId)}>
                      -
                    </button>
                    {cart[productId]}{" "}
                    <button onClick={() => addToCart(productId)}>+</button>
                  </p>
                </div>
              );
            })}
            <h3>Total: KSH {total}</h3>
            <Button onClick={alert2} variant="danger"> PAY </Button>

          </div>
        </div>
      ) : (
        <p>No products available</p>
      )}
    </div>
  );
};

export default LandingPOS;
