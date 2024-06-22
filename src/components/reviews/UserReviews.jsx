import { useState } from "react";
import { useSelector } from "react-redux";

import UserReviewCard from "./UserReviewCard";


const UserReviews = () => {

    const user = useSelector((state)=> state.user.userDetailId)
    const products = useSelector((state)=> state.templates.allTemplates)
    
    let reviews = user?.Reviews;

    let productsReview = reviews?.map((e) => {
        for (let i = 0; i < products?.length; i++) {
            if (e.templateId === products[i]?.id)
              return {
                content: e.content,
                rating: e.rating,
                date: e.date,
                idTemplate: products[i]?.id,
                //img: products[i]?.image,
                nameTemplate: products[i]?.name,
              };
          }
    })

    return (
        <div>
         {/*container*/}
            <div className="bg-white shadow-md mt-12 max-w-6xl mx-auto">
                {/*containerTitle*/}
                <div className="bg-zinc-50 text-lg font-inter font-semibold p-4">
                    <h2>Mis opiniones</h2>
                </div>
                {
                    productsReview?.map((e, index)=> (
                        <UserReviewCard
                        key={index}
                        id={e?.id}
                        //img={e?.image}
                        nameTemplate={e?.name}
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