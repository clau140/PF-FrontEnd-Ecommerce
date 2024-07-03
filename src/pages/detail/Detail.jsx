import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery'
import { Rating } from "@mui/material";
import { getTemplateById, getCategories } from "../../redux/actions/templatesAction";
import "react-image-gallery/styles/css/image-gallery.css"
import 'react-toastify/dist/ReactToastify.css';
import ReviewForm from '../../components/reviews/ReviewForm';
import { getReviewsTemplate } from "../../redux/actions/reviewsAction";
import { promedio } from "./promedio";
import { addToCart } from "../../redux/actions/cartActions";
import { ToastContainer } from "react-toastify";


const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();
    const [ isModalOpen, setIsModalOpen ] = useState(false);

    const [ images, setImages ] = useState([]);
    let template = useSelector((state) => state.templates.detailTemplate);
    const reviews = useSelector((state) => state.templates.reviews);

    useEffect(() => {
        dispatch(getTemplateById(id))
            .then(() => {
                dispatch(getReviewsTemplate(id));
            });
    }, [ id, dispatch ]);

    useEffect(() => {
        if (template && template.images) {
            setImages(template.images);
        }
    }, [template]);

    useEffect(() => {
        dispatch(getTemplateById(id)).then((response) => {
            console.log('getTemplateById:', response); 
            if (response && response.payload && response.payload.reviews) {
                const userReview = response.payload.reviews.find(review => review.idUser === userId);
                console.log('User Review encontrado:', userReview);
                setHasUserReviewed(!!userReview);
            }
        });
        dispatch(getCategories());
        dispatch(getReviewsTemplate(id)).then((response) => {
            console.log("getReviewsTemplate:", response);
        });
    }, [id, dispatch, userId]);


    const categories = template.categories || [];
    const technologies = template.technologies || [];

    const allReviews = useSelector((state) => state.templates.detailTemplateCopy.reviews) || [];
    const ratings = allReviews.map((e) => e.rating) || [];
    let resultRating = ratings.length > 0 ? promedio(ratings) : 0;

    useEffect(() => {
        dispatch(getTemplateById(id));
        dispatch(getCategories());
        dispatch(getReviewsTemplate(id));
    }, [ id, dispatch ]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
          <ToastContainer />
          <div className="p-4 shadow-md">
    <div className="bg-gray relative object-cover mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row  mb-10 shadow-md border-2">
      <div className="bg-white w-[70%] object-cover mb-5 mt-10 mr-10 relative overflow-hidden flex items-center justify-center ml-10 ">
        <ImageGallery
          items={images}
          showPlayButton={false}
          showBullets={true}
          autoPlay={false}
        />
      </div>

      <div className="md:w-[40%] mr-10 flex flex-col justify-between">
        <div className="flex justify-end text-2xl">
          <Link to={"/home"}>
            <button className="py-4 px-3 rounded-lg text-2xl">X</button>
          </Link>
        </div>
        <div>
          <h1 className="ml-3 text-start text-xl mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors tracking-wider  border-green-900">
            {template?.name}
          </h1>
          <br />
          <div className="flex items-center ">
            <div className="flex flex-row gap-4">
              <Rating className="ml-2 text-sm" readOnly value={template?.rating} />
            </div>
          </div>

          <br />
          <span className="ml-3 font-bold text-2xl text-bgred text-start mr-8 mt-4 font-inter text-gray-800 pb-4 transition-colors  tracking-wider  border-green-900">
            {template?.price}
          </span>
          <br />
          <br />
          <h2 className="ml-3 text-start text-sm text-bggris mr-8 mt-4 font-normal text-gray-800 pb-4 tracking-wider">
            Category{" "}
            {template?.categories && template.categories.map((c) => <p key={c.id}>{c.name}</p>)}
          </h2>

          <h3 className="ml-3 text-start text-sm text-bggris  mr-8 mt-4 font-normal text-gray-800 pb-4 border-green-900">
            {template?.description}
          </h3>
                  <div className="flex flex-row flex-wrap">
          {template?.technologies &&
            template.technologies.map((c, index) => (
              <h3
              key={c.id}
              className={`m-2 text-start text-sm text-bggris p-2 font-normal text-gray-800 border border-green-500 rounded`}
            >
              {c.name}
            </h3>
            ))}
        </div>
        </div>
                        <br />
                        <div className="flex mb-4">
                            <div className="flex items-center mt-3 mb-10 w-1/2">
                                <button onClick={ () => dispatch(addToCart(template.id)) } className="bg-[#06B6D4] text-white font-inter hover:scale-110 hover:bg-green-500 font-bold py-2 px-4 rounded-full">
                                    Añadir a carrito
                                </button>
                            </div>
                            <div className="flex items-center mt-3 mb-10 w-1/2">
                                <button className="bg-[#06B6D4] text-white font-inter hover:scale-110 hover:bg-green-500 font-bold py-2 px-4 rounded-full">
                                    Comprar ahora
                                </button>
                            </div>
                        </div>

                    </div>
                </div>

                { allReviews.length > 0 ? (
                    <div className="bg-gray relative mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row mb-10 shadow-md border-2">
                        <div className="bg-white mr-10 relative overflow-hidden ml-10">
                            <h2 className="text-start text-xl mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors tracking-wider border-green-900">
                                Reviews
                            </h2>
                            { allReviews.map((r) => (
                                <div key={ r.id } className="mb-4">
                                    <Rating className="mb-2" readOnly value={ r.rating } />
                                    <p className="text-gray-600">{ r.date }</p>
                                    <span className="text-gray-800">{ r.content }</span>
                                </div>
                            )) }
                        </div>
                    </div>
                ) : (
                    <div className="bg-gray-100 relative mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row mb-10 shadow-md border-2">
                        <div className="bg-zinc-50 text-lg font-inter font-semibold p-3">
                            <span>No existen opiniones de este producto</span>
                        </div>
                    </div>
                ) }
                <div className=" relative mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row mb-10 ">
                    <button
                        onClick={ openModal }
                        className="bg-blue-500 text-white font-inter hover:bg-blue-700 font-bold py-2 px-4 rounded-full"
                    >
                        Opinar
                    </button>
                </div>

                { isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                            <button
                                onClick={ closeModal }
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 focus:outline-none"
                            >
                                X
                            </button>
                            <ReviewForm templateId={ id } />
                        </div>
                    </div>
                ) }
            </div>
        </div>
    );
}

export default Detail;