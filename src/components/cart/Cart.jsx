// Cart.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToCart, viewCart } from '../../redux/actions/cartActions';
import { checkoutSession } from '../../redux/actions/stripeAction';

const Cart = () => {
  const [ isCartOpen, setCartOpen ] = useState(false);
  const [ items, setItems ] = useState([])
  const [ message, setMessage ] = useState("")
  const dispatch = useDispatch()
  // const inCart = useSelector(state => state.cart.templatesInCart)
  // const noFound = useSelector(state => state.cart.error)

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
  };

  // useEffect(() => {
  // }, [ dispatch ]);

  // useEffect(() => {
  //   if (!inCart.length) {
  //     dispatch(viewCart())
  //     return setMessage(noFound)
  //   }
  //   dispatch(viewCart())
  //   setItems(inCart)
  // }, [ dispatch, noFound, inCart ]);

  return (
    <div className="relative">
      <button
        onClick={ toggleCart }
        className="text-green-500 bg-white rounded-full p-2"
      >
        🛒
        <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          3
        </span>
      </button>

      { isCartOpen && (
        <div className="fixed top-0 right-0 h-screen w-2/5 bg-gray-200 z-50">
          { message ? <p>{ message }</p> : (
            <>
              { items?.map(t => (
                <>
                  <p>{ t.name }</p>
                  <button onClick={ () => dispatch(deleteToCart(t.id)) }>Delete</button>
                </>
              )) }

            </>
          ) }
          <button
            onClick={ toggleCart }
            className="absolute top-0 right-0 p-2 text-gray-600"
          >
            X
          </button>
          <button onClick={ () => dispatch(checkoutSession()) }>Comprar</button>
        </div>
      ) }
    </div>
  );
};

export default Cart;
