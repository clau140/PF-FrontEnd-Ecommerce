import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery'
import { Rating } from "@mui/material";
import TextField from "@mui/material/TextField";
import { ToastContainer, toast } from 'react-toastify';
import { getTemplateById, getCategories } from "../../redux/actions/templatesAction";

import "react-image-gallery/styles/css/image-gallery.css"
import 'react-toastify/dist/ReactToastify.css';
import { validate } from "./validation"

import imageExample1 from "./imageEj1.jpg"
import imageExample2 from "./imageEj2.jpg"
import imageExample3 from "./imageEj3.jpg"
import imageExample4 from "./imageEj4.jpg"
import { createReviewTemplate, getReviewsTemplate } from "../../redux/actions/reviewsAction";
import { addToCart } from "../../redux/actions/cartActions";

const Detail = () => {

  const { id } = useParams();
  const [images, setImages] = useState()
  const dispatch = useDispatch();
  const template = useSelector((state) => state.templates.detailTemplate);
  const reviews = useSelector((state) => state.reviews.reviews);
  const user = useSelector((state) => state.user.userInfo);
  //const userDetail = useSelector((state) => state.userDetail);
  
  //state Form
  const [ state, setState ] = useState({
    rating: "",
    content: "",
    templateId: id,

  });

  const opinar = () => toast.success('Gracias por tu opinion!');

  const [ errors, setErrors ] = useState({})

  //promedio rating
  function promedio(rating) {
    let i = 0
    let summ = 0;
    while (i < rating.length) {
      summ = summ + rating[ i++ ];
    }
    return Math.round(summ / rating.length);
  }
  let rating = reviews?.map((e) => e.rating);
  let resultRating = promedio(rating);


  useEffect(() => {
    dispatch(getTemplateById(id))
      .then(() => {
        dispatch(getCategories())
        dispatch(getReviewsTemplate(id))
      }
      )
  }, [ id, dispatch]);

  //Form
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReviewTemplate(state));
    setState({
      rating: "",
      content: "",
      templateId: id,


    });
  };

  // handle select valoracion
  const handleChange = (e) => {
    if (e.target.name === "rating") {
      setState({
        ...state,
        [ e.target.name ]: parseInt(e.target.value),
      });
    } else {
      setState({
        ...state,
        [ e.target.name ]: e.target.value,

        userId: user.id,
      });
    }
    setErrors(
      validate({
        ...state,
        [ e.target.name ]: e.target.value,
      })
    );
  };

  const getImages = () => {
    template.map(()=>{
      
    })
  }
  // const images = [

  //   {
  //     original: imageExample1

  //   },

  //   {
  //     original: imageExample2,

  //   },
  //   {
  //     original: imageExample3,

  //   },
  //   {
  //     original: imageExample4,

  //   },
  // ];

  return (
    <div>

      <div className=" p-4  shadow-md  font-inter font-semibold ">

        <div className="bg-gray relative  mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row  mb-10 shadow-md border-2">

          <div className="bg-white   w-[70%] mb-5 mt-10 mr-10 relative overflow-hidden flex items-center justify-center ml-10">

            <ImageGallery
              items={ images }
              showPlayButton={ false }
              showBullets={ true }
              autoPlay={ false }
            />
          </div>

          <div className="md:w-[50%] mr-10">
            <div className="flex justify-end text-2xl">

              <Link to={ "/home" }>
                <button className=" py-4 px-3 rounded-lg  text-2xl ">X</button>
              </Link>

            </div>
            <br />
            <h1 className="text-start text-xl  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors tracking-wider  border-green-900">
              { template.name }
            </h1>
            <br />
            <div className="flex items-center ">

              <div className="flex flex-row gap-4">
                <Rating
                  className="text-sm"
                  readOnly
                  value={ resultRating ? resultRating : 0 } />
              </div>


            </div>


            <br />
            <span className="font-bold text-2xl text-bgred text-start  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors  tracking-wider   border-green-900">
              { template.price }
            </span>
            <br />
            <br />
            <h2 className="text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4  tracking-wider  border-green-900">
              Categorias
              {
                template.categories && template.categories.map(c => <p>{ c.name }</p>)
              }

            </h2>

            <h3 className="text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4  tracking-wider  border-green-900">
              { template.description }
            </h3>
            <h3 className="text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4  tracking-wider  border-green-900">
              Tecnologias
              {
                template.technologies && template.technologies.map(c => <p>{ c.name }</p>)
              }

            </h3>

            <br />

            <div className="flex  mb-4">

              <div className="flex items-center mt-3 mb-10 w-1/2">


                <button onClick={ () => dispatch(addToCart(template.id)) } className="bg-black text-white font-inter 
                   hover:bg-gray-900 font-bold py-2 px-4 rounded-full"

                >Añadir a carrito
                </button>

              </div>
              <div className="flex items-center mt-3 mb-10 w-1/2">


                <button className="bg-black text-white font-inter 
                   hover:bg-gray-900 font-bold py-2 px-4 rounded-full"

                >Comprar ahora
                </button>

              </div>
            </div>

          </div>
        </div>

        {
          reviews.length ?

            <div className="bg-gray relative  mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row  mb-10 shadow-md border-2">
              <div className="bg-white mr-10 relative overflow-hidden  ml-10">

                <h2 className="text-start text-xl  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors tracking-wider  border-green-900">Reviews</h2>

                {
                  reviews.map(r => {
                    return (
                      <div key={ r.id }>

                        <Rating
                          readOnly
                          value={ r.rating } />
                        <p>{ r.date }</p>
                        <span>{ r.content }</span>
                      </div>


                    )
                  })
                }

              </div>

            </div> :

            <div className="bg-gray relative  mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row  mb-10 shadow-md border-2">

              <div className="bg-zinc-50 text-lg font-inter font-semibold p-3">
                <span> No existen opiniones de este producto</span>
              </div>
            </div>

        }

        <form onSubmit={ (e) => handleSubmit(e) }>

          <Rating
            name="rating"
            value={ Number(state?.rating) }
            onChange={ handleChange }
          />

          { errors.rating && (
            <p className='text-red-600'>
              { errors.rating }</p>
          ) }

          <TextField
            fullWidth
            name="content"
            value={ state?.content }
            onChange={ (e) => handleChange(e) }
            id="filled-textarea"
            label="Tu opinion"
            placeholder="Minimo 15 caracteres"
            multiline
            variant="filled"

          />

          { errors.content && (
            <p className='text-red-600'>
              { errors.content }</p>
          ) }

          <button
            disabled={
              Object.keys(errors).length > 0 ||
              state.content.length === 0
            }
            className=''
            type="submit"
            onClick={ opinar }
          >
            Opinar
          </button>

          <ToastContainer />

        </form>

      </div>

    </div>


  )

}

export default Detail;