import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserReviewCard from "./UserReviewCard";
import { getReviewsUser } from "../../redux/actions/reviewsAction";


const UserReviews = () => {

   const reviews = useSelector((state)=> state.reviews.reviewsUser) || []
   // const reviews = useSelector((state) => state.templates.detailTemplateCopy.reviews) || [] ;
   // const idUser = useSelector((state) => state.user.userInfo.id) || [];
    console.log(reviews)
   

    const user = useSelector((state) => state.user.userInfo) || [];
    
    console.log(user)
    
    const dispatch = useDispatch()
    
    useEffect (() => {
      
            dispatch(getReviewsUser());
        
    }, [dispatch]);


    return (
        <div>
         {/*container*/}
            <div className="bg-white shadow-md mt-12 max-w-6xl mx-auto">
                {/*containerTitle*/}
                <div className="bg-zinc-50 text-lg font-inter font-semibold p-4">
                    <h2>Mis opiniones</h2>
                </div>
                {
                    reviews?.map((e, index)=> (
                        <UserReviewCard
                        key={index}
                        id={e?.id}
                        //img={e?.image}
                        
                        content={e?.content}
                        rating={e?.rating}
                        date= {e?.date}
                         />
                    )) 
                }

            </div>
        </div>
    )
};

export default UserReviews;