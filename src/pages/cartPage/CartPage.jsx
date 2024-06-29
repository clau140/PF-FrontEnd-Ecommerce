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

    useEffect(() => {
        if (isLogged) {
            setItems(cart.inCart)
            setMessage(noFound)
            setLoggedIn(isLogged)
        }
        dispatch(viewCart)
        console.log(items);
        return
    }, [ dispatch, cart, noFound, isLogged ]);

    return (
        <div >
            <div>
                { loggedIn ? (
                    <>
                        { message && !items?.length ? (
                            <div className='flex flex-col items-center justify-center h-screen w-screen p-4 bg-gray-100 text-center'>
                                <h2 className='font-bold text-xl'>{ message }</h2>
                                <p className="text-gray-500 ">Visita nuestra <a href="/home" className='text-green-500 font-bold hover:text-blue-500 hover:opacity-100 hover:transition-opacity duration-300 cursor-pointer'>tienda</a></p>
                            </div>
                        ) : (
                            <div className='relative h-screen w-full p-8 flex'>
                                <div className='h-full w-2/3'>
                                    <h1 className='font-bold text-2xl mb-4'>Tu carrito de compra</h1>
                                    { items?.map(t => {
                                        // Encontrar la imagen que tiene isCover como true
                                        const coverImage = t.images.find(image => image.isCover);

                                        return (
                                            <div key={ t.id } className='flex border-b-2 w-full h-auto mb-1'>
                                                <div className='w-1/3 p-4'>
                                                    { coverImage && (
                                                        <img className="h-48 object-cover" src={ coverImage.original } alt={ t.name } />
                                                    ) }
                                                </div>
                                                <div className='w-1/3 mr-8'>
                                                    <h2 className='font-bold text-xl'>{ t.name }</h2>
                                                    <p className='text-sm text-gray-500'>{ t.description }</p>
                                                    <button onClick={ () => dispatch(deleteToCart(t.id)) } className='mt-8'>
                                                        <FaRegTrashAlt size={ '24px' } />
                                                    </button>
                                                </div>
                                                <div className='ml-16 w-1/3'>
                                                    <h3 className='flex font-bold text-xl mb-4'><span className='mr-1'>$</span>{ t.price }</h3>
                                                </div>
                                            </div>
                                        );
                                    })
                                    }
                                </div>
                                <div className='flex flex-col w-1/3 h-auto ml-4'>
                                    <h1 className='font-bold text-2xl mb-2 ml-2'>Resumen de compra</h1>
                                    <div className='p-8 border-t-2'>
                                        <p className='flex justify-between text-xl border-t-2 border-b-2 p-2'>Total: <span>$ { cart.total_amount }</span></p>
                                    </div>
                                    <button onClick={ () => dispatch(checkoutSession()) } className='p-2 bg-green-500 text-xl font-bold text-white '> Pagar </button>
                                </div>
                            </div>
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
