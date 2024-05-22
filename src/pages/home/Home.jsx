import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getTemplates } from '../../redux/actions';
import Navbar from '../../components/navbar/Navbar';
import Cards from '../../components/cards/Cards';

const Home = () => {
    const allTemplates = useSelector((state) => state.allTemplates);
    const dispatch = useDispatch();
    const [searchString, setSearchString] = useState("");

    const handleChange = (event) => {
        event.preventDefault();
        setSearchString(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getTemplateByName(searchString))
    };

    useEffect(() => {
        dispatch(getTemplates())
    }, [dispatch])

    return (
        <div>
           <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
           <Cards allTemplates={allTemplates}/>
        </div>
    )
};

export default Home;