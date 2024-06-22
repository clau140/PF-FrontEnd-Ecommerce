
import { Rating } from "@mui/material";
import { Link } from "react-router-dom";

const UserReviewCard = ({id, nameTemplate, content, rating, date}) => {
    return (
        
            <div>
            {/*container*/}
            <div>
                {/*title*/}
                <div>
                    <Link to={`/detail/${id}`}>{nameTemplate}</Link>

                </div>
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
        </div>
    )
};

export default UserReviewCard;