import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItemFromCart,addItemToCart,clearCart } from '../reduxStore/cartSlice'; 

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveItem = (id) => {
    dispatch(removeItemFromCart(id));
  };


  const handleIncreaseQuantity = (id) => {
    dispatch(addItemToCart(id));
  };


  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div>
          <div className="table-responsive">
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item._id}>
                    <td>
                      <img
                        src="./uploads/item.image"
                        alt={item.name}
                        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                      />{' '}
                      {item.name}
                    </td>
                    <td>{item.price} Rs</td>
                    <td>
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleRemoveItem(item._id)}
                      >
                        -
                      </button>{' '}
                      {item.quantity}{' '}
                      <button
                        className="btn btn-secondary btn-sm"
                        onClick={() => handleIncreaseQuantity(item._id)}
                      >
                        +
                      </button>
                    </td>
                    <td>{item.price * item.quantity} Rs</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => clearCart(item._id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>


          <div className="d-flex justify-content-between mt-4">
            <h4>Total Price: {totalPrice} Rs</h4>
            <div>
              <button className="btn btn-success">Proceed to Checkout</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
