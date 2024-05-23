import React from "react";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import ImageGallery from 'react-image-gallery'
import { Rating } from "@mui/material";
import { ToastContainer, toast } from 'react-toastify';
import { getTemplateById } from "../../redux/actions/index";
import "react-image-gallery/styles/css/image-gallery.css"
import 'react-toastify/dist/ReactToastify.css';

import Navbar from "../../components/navbar/Navbar";

import imageExample1 from "./imageEj1.jpg"
import imageExample2 from "./imageEj2.jpg"
import imageExample3 from "./imageEj3.jpg"
import imageExample4 from "./imageEj4.jpg"

const Detail = () => {

    const { id } = useParams();
    const dispatch = useDispatch();

    let template = useSelector((state) => state.detailTemplate);

    useEffect(() => {
        dispatch(getTemplateById(id));
        
      }, [dispatch]);

      const images = [

        {
            original: imageExample1
            
        },
        
        {
          original: imageExample2,
          
        },
        {
          original: imageExample3,
          
        },
        {
          original: imageExample4,
            
        },
      ];

    return (
        <div className=" ">
          <Navbar />
       
      
        {/* Modal */}
        <div className=" p-4  shadow-md">
        
          {/* Contenido del modal */}
          
          <div className="bg-gray relative  mx-auto min-w-[20rem] w-full rounded-2xl flex flex-col md:flex-row  mb-10 shadow-md border-2">
            {/* Imagen a la izquierda en pantallas grandes */}
              <div className="bg-white   w-[70%] mb-5 mt-10 mr-10 relative overflow-hidden flex items-center justify-center ml-10">
              
              <ImageGallery 
                   items={images}
                   showPlayButton= {false}
                   showBullets={true}
                   autoPlay={false}
                   
                />
              
              </div>
    
              
              <div className="md:w-[50%] mr-10">
              <div className="flex justify-end text-2xl">

              <Link to={"/home"}>
              <button className=" py-4 px-3 rounded-lg  text-2xl ">X</button>                
              </Link>
          
              </div>
                <br />
                <h1 className="text-start text-xl  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors tracking-wider  border-green-900">
                  {template.name}
                </h1>
                <br />
                <div className="flex items-center ">
                 
                  
                  
                  <div className="flex flex-row gap-4">
                  <Rating 
                  className="text-sm"
                  readOnly 
                  value='' />
                  </div>
                  
    
                </div>
    
               
                <br />
                <span className="font-bold text-2xl text-bgred text-start  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4 transition-colors  tracking-wider   border-green-900">
                  {template.price}
                </span>
                <br />
                <br />
                <h2 className="text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4  tracking-wider  border-green-900">
                  Category 
                  {
                      template.categories.map(c => <p>{c.name}</p>)
                    }
                  
                </h2>

                <h3 className="text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4  tracking-wider  border-green-900">
                  {template.description}
                  </h3>
                <h3 className="text-start text-sm text-bggris  mr-8 mt-4 font-inter font-bold text-gray-800 pb-4  tracking-wider  border-green-900">
                  Technologies
                  {
                      template.technologies.map(c => <p>{c.name}</p>)
                    }
                  
                  </h3>
                
                <br />
               
                <div className="flex  mb-4">
              
                <div className="flex items-center mt-3 mb-10 w-1/2">
                
                
                <button className="bg-black text-white font-inter 
                   hover:bg-gray-900 font-bold py-2 px-4 rounded-full"

                >Add to cart 
              </button>

              </div>
              <div className="flex items-center mt-3 mb-10 w-1/2">
                
                
                <button className="bg-black text-white font-inter 
                   hover:bg-gray-900 font-bold py-2 px-4 rounded-full"

                >Buy now
              </button>

              </div>
            </div>
              
              </div>
            </div>
          </div>
        </div>
            
        
    )

}

export default Detail;