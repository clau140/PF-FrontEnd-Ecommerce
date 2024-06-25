// Cart.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToCart, viewCart } from '../../redux/actions/cartActions';
import { checkoutSession } from '../../redux/actions/stripeAction';

const Cart = ({ isLogged }) => {
  const [ isCartOpen, setCartOpen ] = useState(false);
  const [ items, setItems ] = useState([])
  const [ message, setMessage ] = useState("")
  const [ loggedIn, setLoggedIn ] = useState(false)
  const dispatch = useDispatch()
  const inCart = useSelector(state => state.cart.templatesInCart)
  const noFound = useSelector(state => state.cart.error)

  const toggleCart = () => {
    setCartOpen(!isCartOpen);
    // if (!isCartOpen) return dispatch(viewCart())

  };


  useEffect(() => {
    if (isLogged) {
      setItems(inCart)
      setMessage(noFound)
      setLoggedIn(isLogged)
    }
    dispatch(viewCart)
    return
  }, [ dispatch, inCart, noFound, isLogged ]);

  return (
    <div className="relative">
      <button
        onClick={ toggleCart }
        className="text-green-500 bg-white rounded-full p-2"
      >
        <svg viewBox="0 0 22 22" width="28" height="28" fill="#4b5563">
          <path d="M19.45 15.24a.86.86 0 00.848-.719l1.69-10.14a.86.86 0 00-.848-1H4.91L4.229.65A.86.86 0 003.395 0H.858a.86.86 0 100 1.719h1.865l.673 2.696L5.07 14.45v2.6a2.553 2.553 0 00-1.69 2.4A2.552 2.552 0 005.93 22c1.744 0 2.981-1.726 2.41-3.38h7.01c-.572 1.655.667 3.38 2.41 3.38a2.552 2.552 0 002.55-2.55 2.552 2.552 0 00-2.55-2.55H6.79v-1.66zm.676-10.141l-1.404 8.422H6.658L5.254 5.099zM6.76 19.45a.832.832 0 01-1.661 0 .832.832 0 011.661 0m11 .831a.832.832 0 010-1.661.832.832 0 010 1.661"></path>
        </svg>
        <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
          { items.length }
        </span>
      </button>

      { isCartOpen && (
        <div className="flex flex-col fixed top-0 right-0 h-screen w-1/5 pb-8 pt-8 bg-gray-200 z-50 shadow-2xl">
          <div className='bg-white h-full shadow-xl'>
            { loggedIn ? (
              <>
                { message && !items.length ? (
                  <div className='flex flex-col items-center justify-center h-full p-4 bg-gray-100 text-center'>
                    <h2 className='font-bold text-xl'>{ message }</h2>
                    <p className="text-gray-500 ">Visita nuestra <a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>tienda</a></p>
                  </div>
                ) : (
                  <div>
                    { items?.map(t => (
                      <div key={ t.id } className='border-b-2'>
                        <h3 className="text-lg font-bold">{ t.name }</h3>
                        <p className='text-sm'>{ t.description }</p>
                        <button className='border' onClick={ () => dispatch(deleteToCart(t.id)) }>Delete</button>
                      </div>
                    )) }

                  </div>
                ) }
              </>
            ) : (
              <div className='flex flex-col items-center justify-center h-full p-4 bg-gray-100 text-center'>
                <h2 className='font-bold text-xl'>Unete a Vega para que puedas realizar compras</h2>
                <p className="text-gray-500 "><a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>Registrate</a> o <a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>Inicia Sesión</a></p>
              </div>
            ) }

          </div>
          <button
            onClick={ toggleCart }
            className="absolute top-0 right-0 p-2 text-gray-600"
          >
            X
          </button>
          <button className='border border-green-500' onClick={ () => dispatch(checkoutSession()) }>Comprar</button>
        </div>
      ) }
    </div>
  );
};

export default Cart;
