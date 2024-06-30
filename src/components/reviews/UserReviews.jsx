import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import UserReviewCard from "./UserReviewCard";
import { getReviewsUser } from "../../redux/actions/reviewsAction";


const UserReviews = () => {

   const reviews = useSelector((state)=> state.reviews.reviewsUser) || []
    console.log(reviews)

    const user = useSelector((state) => state.user.userInfo) || [];
    
    console.log(user)
    
    const dispatch = useDispatch()
    
    useEffect (() => {
      
            dispatch(getReviewsUser());
        
    }, [dispatch]);


    return (
        <div>
      
            <div className="bg-white shadow-md mt-12 max-w-6xl mx-auto">
                <div className="bg-zinc-50 text-lg font-inter font-semibold p-4">
                    <h2>Mis opiniones</h2>
                </div>
                {
                    reviews?.map((e, index)=> (
                        <UserReviewCard
                        key={index}
                        id={e?.idTemplate}

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