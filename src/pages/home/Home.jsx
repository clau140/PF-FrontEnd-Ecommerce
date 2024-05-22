import {useState} from 'react';
import data from '../../data.json';
import Navbar from '../../components/navbar/Navbar';
import Cards from '../../components/cards/Cards';

const Home = () => {
    const [searchString, setSearchString] = useState("");

    const templates = data.templates;

    const handleChange = (event) => {
        event.preventDefault();
        setSearchString(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(getTemplateByName(searchString))
    }
    return (
        <div>
           <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
           <Cards templates={templates}/>
        </div>
    )
};

export default Home;