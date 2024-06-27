
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const UserReviewCard = ({id, content, rating, date}) => {
    return (
        
            <div>
            {/*container*/}
            <div className="max-w-xs rounded relative overflow-hidden shadow-custom transition-transform transform hover:scale-105">
            

                <div>
                  <span>Tu opinion: </span>  
                </div>
                {/*rating*/}
                <div>
                    <Rating  
                    value={rating}
                    readOnly
                    />
                </div>
                <div>{content}</div>
                <div>{date}</div>


            
              

            </div>
            <br />
        </div>
    )
};

export default UserReviewCard;