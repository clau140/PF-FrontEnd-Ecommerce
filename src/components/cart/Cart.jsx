import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch} from "react-redux";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const localURL = 'http://localhost:3001'
// si el usuario le da click al carrito y no este loggeado (o no tiene token)
// entonces se debe mostrar un mensaje adecuado o redirigir al login.

const Cart = () => {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState("");
  const [showResults, setShowResults] = useState(false);

  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]); 
  const [error, setError] = useState(''); // mostrar errores al usuario
  const [successMessage, setSuccessMessage] = useState(''); // mostrar mensaje verde

  const token = localStorage.getItem('token');
  // ver carrito
  const handleCartClick = () => {
    setShowCart(!showCart);
    if (showCart && token) {
      viewCartItems();
    }
  };


  const hideSuccessMessage = () => {
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000); 
  };

  const addCartItem = async () => {
    try {
      const response = await fetch(`${localURL}/cart/additem`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ template_id: template_id }) 
      });

      if (response.status === 400) {
        setError('Este template ya se encuentra en el carrito');
        return;
      }

      setSuccessMessage('Template agregado al carrito con exito');
      hideSuccessMessage(); 

    } catch (error) {
      console.log(`Error mostrando productos del carrito: ${error}`);
      setError('Error trayendo items');
    }
  };


  const clearCart = async () => {
    try {
      
      const response = await fetch(`${localURL}/cart/clearcart`, {
        method: 'DELETE',
        headers: {
          // aqui va el JWT & application/json
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (data.noCartFound) {
        setError('Tu carrito actualmente esta vacio')
        return
      };

      setSuccessMessage('Carrito limpiado con exito')

    } catch (error) {
      console.log(`Error limpiando carrito: ${error}`);
    }
  };

  // falta arreglar esta.
  const deleteItemFromCart = async (templateId) => {
    try {
      
      const response = await fetch(`${localURL}/cart/deleteitem`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ template_id: templateId }) 
      });

      const data = await response.json();

      if (data.missingTemplate) {
        setError(data.missingTemplate)
        return
      };

      if (data.cartNotFound) {
        setError(data.cartNotFound)
        return
      };

      if (data.templateNotFound) {
        setError(data.templateNotFound)
        return
      };

      setSuccessMessage('Template eliminado con exito')
      console.log('template eliminado con exito');

    } catch (error) {
      console.log(`Error eliminando template del carrito: ${error}`);
    }
  };


  const viewCartItems = async () => {
    try {
      
      const response = await fetch(`${localURL}/cart/viewcart`, {
        method: 'GET',
        headers: {
          // JWT
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();

      if (data.noCartFound) {
        setError(data.noCartFound)
        return
      };

      setCartItems(data);

    } catch (error) {
      console.log(`Error viendo carrito: ${viewCartItems}`);
    }
  };


  // esto redigira al usuario a la pagina/componente /checkout el cual aun no esta creado.
  // dentro de este componente/pagina ya podran realizar la compra con Stripe.
  const handleCheckout = () => {
    window.location.href = '/checkout'
  };

  
  return (
    <nav className="bg-white p-4 border-b-2 border-inherit shadow">
      <div className="max-w-[100rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <button
                onClick={handleCartClick}
                className="bg-white border-[1px] border-slate-800 font-inter text-gray-800 px-3 py-2 rounded-md text-sm font-medium mr-8 flex items-center"
              >
                <ShoppingCartIcon sx={{ mr: 1 }} />
                Cart
              </button>
              {showCart && token && (
                <div className="cart-sidebar">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 border-b border-gray-300">
                      <span>{item.template_id}</span>
                      <button onClick={() => deleteItemFromCart(item.template_id)} className="text-red-500">Delete template</button>
                    </div>
                  ))}
                  <div className="flex justify-between p-2 border-b border-gray-300">
                    <button onClick={clearCart} className="text-sm text-red-500 hover:text-red-700">Clear Cart</button>
                    <button onClick={handleCheckout} className="bg-blue-500 text-white px-3 py-1 rounded-md">Checkout</button>
                  </div>
                  {error && <p className="text-red-500">{error}</p>}
                  {successMessage && <p className="text-green-500">{successMessage}</p>}
                </div>
              )}
              {!token && (
                <div className="bg-red-500 text-white p-3 rounded-md">
                  Please log in to view your cart
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );


}

export default Cart;
