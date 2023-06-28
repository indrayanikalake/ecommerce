import React, { useEffect, useState } from 'react';
import { commerce } from './lib/commerce';
import { Cart, Checkout, NavNar, Products } from './components';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import { set } from 'react-hook-form';
import { async } from 'q';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddCart = async (productId, quantity) =>{
    const item= await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  }

  

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const item = await commerce.cart.update(lineItemId, { quantity });

    setCart(item.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const item = await commerce.cart.remove(lineItemId);

    setCart(item.cart);
  };

  const handleEmptyCart = async () => {
    const item = await commerce.cart.empty();
    console.log(item);
    setCart(item.cart);
  };
 console.log(cart);

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [cart]);

  useEffect(() => {
    console.log(cart); // Verify the cart state after each update
  }, [cart]);
  

  return (
    <Router>
      <div>
        <NavNar totalItems={cart.total_items} />
        <Routes>
        <Route exact path='/' element={<Products products={products}  onAddToCart={handleAddCart}  handleUpdateCartQty />}/>
        <Route exact path='/cart' element={<Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart}/>}/>
        <Route exact path='/checkout' element={<Checkout cart={cart}/>}/>
        </Routes>
      </div>
      </Router>
  );
};

export default App;
