// Cart.js
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteToCart, viewCart } from '../../redux/actions/cartActions';
import { checkoutSession } from '../../redux/actions/stripeAction';
import image from '../../assets/images/image-1.jpeg';
import { FaRegTrashAlt } from "react-icons/fa";

const CartPage = () => {
    const [ items, setItems ] = useState([])
    const [ message, setMessage ] = useState("")
    const [ loggedIn, setLoggedIn ] = useState(false)

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.InCart)
    const noFound = useSelector(state => state.cart.error)
    const isLogged = localStorage.getItem("token") ? true : false

    console.log(cart);
    useEffect(() => {
        if (isLogged) {
            setItems(cart.inCart)
            setMessage(noFound)
            setLoggedIn(isLogged)
        }
        dispatch(viewCart)
        return
    }, [ dispatch, cart, noFound, isLogged ]);

    return (
        <div className="relative">
            <div className='h-screen w-full p-8 flex'>
                { loggedIn ? (
                    <>
                        { message && !items?.length ? (
                            <div className='flex flex-col items-center justify-center h-screen w-screen p-4 bg-gray-100 text-center'>
                                <h2 className='font-bold text-xl'>{ message }</h2>
                                <p className="text-gray-500 ">Visita nuestra <a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>tienda</a></p>
                            </div>
                        ) : (
                            <>
                                <div className='h-full w-1/2'>
                                    <h1 className='font-bold text-2xl mb-4'>Tu carrito de compra</h1>
                                    { items?.map(t => (
                                        <div key={ t.id } className='flex border-b-2 w-full h-auto mb-1'>
                                            <div className='p-4'>
                                                <img className="h-48 object-cover" src={ image } alt={ t.name } />
                                            </div>
                                            <div className='mr-8'>
                                                <h2 className='font-bold text-xl'>{ t.name }</h2>
                                                <p className='text-sm text-gray-500'>{ t.description }</p>
                                                <button onClick={ () => dispatch(deleteToCart(t.id)) } className='mt-8'>
                                                    <FaRegTrashAlt size={ '24px' } />
                                                </button>
                                            </div>
                                            <div className='ml-8'>
                                                <h3 className='flex font-bold text-md mb-4'><span className='mr-1'> $ </span>{ t.price }</h3>
                                            </div>
                                        </div>
                                    )) }
                                </div>
                                <div className='flex flex-col w-1/2 h-auto ml-4'>
                                    <h1 className='font-bold text-2xl mb-2 ml-2'>Resumen de compra</h1>
                                    <div>
                                        <p>Total: {cart.total_amount}</p>
                                    </div>
                                </div>
                            </>
                        ) }
                    </>
                ) : (
                    <div className='flex flex-col items-center justify-center h-screen w-screen p-4 bg-gray-100 text-center'>
                        <h2 className='font-bold text-xl'>Unete a Vega para que puedas realizar compras</h2>
                        <p className="text-gray-500 "><a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>Registrate</a> o <a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>Inicia Sesión</a></p>
                    </div>
                ) }

            </div>
        </div>
    );
};

export default CartPage;
