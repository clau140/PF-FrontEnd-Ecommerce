import Cards from '../../components/cards/Cards';
import { useSelector } from "react-redux";

const Favorites = () => {
    const { myFavorites } = useSelector((state) => state);
    
    return (
        <div>
            <Cards templates={myFavorites} />
        </div>
    )
};

export default Favorites;