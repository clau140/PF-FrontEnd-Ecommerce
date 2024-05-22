import React from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getTemplateById } from "../../redux/actions/index";


export default function Detail () {

    const { id } = useParams();
    const dispatch = useDispatch();

    let template = useSelector((state) => state.detailTemplate);

    useEffect(() => {
        dispatch(getTemplateById(id));
        
      }, [dispatch]);

    return (
        <div>
            <h1>Detail</h1>
            <h2>Name</h2>
            <h3>Category</h3>
            <h3>Technologies:</h3>
            <h3>$</h3>
        </div>
            
        
    )

}