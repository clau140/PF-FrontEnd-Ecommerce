import { useDispatch, useSelector} from 'react-redux'
import { addFav, removeFav } from '../../redux/actions';
import image from '../../assets/images/image-1.jpeg';
import './Card.css';

const Card = ({ template, id }) => {
const myFavorites = useSelector((state) => state.myFavorites);
const dispatch = useDispatch();

const isFavorite = myFavorites.includes(id);

  const handleClick = (event) => {
    event.preventDefault();
    if (isFavorite) {
      dispatch(removeFav(id))
    }
    else {
      dispatch(addFav(id))
    } 
  };

  return (
    <div
      className="max-w-xs rounded relative overflow-hidden shadow-custom transition-transform transform hover:scale-105"
      key={template.id}
    >
        <div className="flex items-center ml-4 mt-4 mb-2">
            {[...Array(5)].map((_, index) => (
              <svg
                key={index}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="none"
                stroke="#f7c948"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 1l2.705 5.674L18 7.5l-4.073 4.096L15.5 18 10 14.8 4.5 18l1.573-6.404L2 7.5l5.295-.826z"
                />
              </svg>
            ))}
          </div>
      <img className="w-full" src={template.image} alt={template.name} />
      <div className="absolute top-0 right-0 m-2 z-10 opacity-1 transition-opacity duration-300">
        
        
          <svg onClick={handleClick}
            className="h-4 w-4 text-slate-800 mt-1"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor" 
          >
          { isFavorite ? (
            <path 
            fill='black'
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          ) : (
            <path
            fill='white'
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          )}
          </svg>
      </div>
      <div className="px-6 py-4">
        <div className="font-inter text-l">{template.name}</div>
        <div className="flex justify-between items-center">
          <p className="text-gray-700 text-lg font-bold ml-auto">${template.price}</p>
        </div>
      </div>
      <div className="px-6 py-4">
        <button className="w-full bg-slate-700 hover:bg-slate-800 text-white font-bold py-2 px-4 rounded">
          Add To Cart 
        </button>
      </div>
    </div>
  );
};

export default Card;
