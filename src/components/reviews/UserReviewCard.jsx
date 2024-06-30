
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const UserReviewCard = ({id, content, rating, date}) => {
    
    return (
        
            <div className="">
            
            <div className="max-w-xs rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white p-4">

                <Link to={`/detail/${id}`}>
                <div className="mb-4">
                  <span className="font-semibold text-lg">Tu opinion: </span>  
                </div>
                {/*rating*/}
                <div className="mb-4">
                    <Rating  
                    value={rating}
                    readOnly
                    />
                </div>
                <div className="text-gray-800 mb-4">{content}</div>
                <div className="text-gray-600 text-sm">{date}</div>
                </Link>

            </div>
            <br />
        </div>
    )
};

export default UserReviewCard;