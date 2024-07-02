import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery'
import { Rating } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import { getTemplateById, getReviewsTemplate } from "../../redux/actions/templatesAction";
import "react-image-gallery/styles/css/image-gallery.css"
import 'react-toastify/dist/ReactToastify.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  let template = useSelector((state) => state.templates.detailTemplate);
  const reviews = useSelector((state) => state.templates.reviews);

  const [images, setImages] = useState([]);

  useEffect(() => {
    dispatch(getTemplateById(id))
      .then(() => {
        dispatch(getReviewsTemplate(id));
      });
  }, [id, dispatch]);

  useEffect(() => {
    if (template && template.images) {
      setImages(template.images);
    }
  }, [template]);

  return (
<div className=" ">
  {/* Modal */}
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
          <h2 className="ml-3 text-start text-sm text-bggris mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 tracking-wider  border-green-900">
            Category{" "}
            {template?.categories && template.categories.map((c) => <p key={c.id}>{c.name}</p>)}
          </h2>

          <h3 className="ml-3 text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 tracking-wider  border-green-900">
            {template?.description}
          </h3>
          <h3 className="ml-3 text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 tracking-wider  border-green-900">
            Technologies{" "}
            {template?.technologies && template.technologies.map((c) => <p key={c.id}>{c.name}</p>)}
          </h3>
        </div>

        <div className="ml-3 flex mb-4">
          <div className="flex items-center mt-3 mb-5 p-4">
            <button className="bg-[#06B6D4] text-white font-inter hover:scale-110 hover:bg-green-500 font-bold py-2 px-4 rounded-full">
              Add to cart
            </button>
          </div>
          <div className="flex items-center mt-3 mb-5 p-4">
            <button className="bg-[#06B6D4] text-white font-inter hover:scale-110 hover:bg-green-500 font-bold py-2 px-4 rounded-full">
              Buy now
            </button>
          </div>
        </div>
      </div>
    </div>

        {reviews && reviews.length > 0 && (
          <div className="bg-gray relative  mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row  mb-10 shadow-md border-2">
            <div className="bg-white mr-10 relative overflow-hidden  ml-10">
              <h2 className="ml-3 text-start text-xl  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors tracking-wider  border-green-900">
                Reviews
              </h2>

              {reviews.map((r) => {
                return (
                  <div key={r.id}>
                    <p>User: {r.autor}</p>
                    <Rating readOnly value={r.points} />
                    <p>{r.title}</p>
                    <span>{r.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Detail;