import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTemplateBySearch, getFilteredTemplates } from "../../redux/actions/templatesAction";
import Searchbar from "../../components/searchbar/Searchbar";
import Cards from "../../components/cards/Cards";
import Card from "../../components/card/Card";
import banner from "../../assets/images/banner-home2.avif";
import image from "../../assets/images/image-1.jpeg";
import Filters from "../../components/filters/Filters";
import SortOptions from "../../components/filters/SortOptions";
import Pagination from "../../components/pagination/Pagination";


const Home = () => {
  const allTemplates = useSelector((state) => state.templates.templates);
  const totalPages = useSelector((state) => state.templates.totalPages);
  const itemsPerPage = 5
  const dispatch = useDispatch();
  const [ searchString, setSearchString ] = useState("");
  const [ showResults, setShowResults ] = useState(false);

  const [ currentPage, setCurrentPage ] = useState(1);
  const [ sortBy, setSortBy ] = useState('');
  const [ order, setOrder ] = useState('');
  const [ selectedTechnologies, setSelectedTechnologies ] = useState([]);
  const [ selectedCategories, setSelectedCategories ] = useState([]);
  useEffect(() => {
    dispatch(getFilteredTemplates(selectedTechnologies, selectedCategories, sortBy, order, currentPage, itemsPerPage));
}, [dispatch, selectedTechnologies, selectedCategories, sortBy, order, currentPage]);
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleChange = (event) => {
    event.preventDefault();
    setSearchString(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchString) {
      dispatch(getTemplateBySearch(searchString));
      setShowResults(true);
    }
  };

  // useEffect(() => {
  //   dispatch(getTemplates());
  // }, [ dispatch ]);

  return (
    <div>
      <Searchbar handleChange={ handleChange } handleSearch={ handleSearch } />
      { showResults && allTemplates.length > 0 && (
        <div className="relative mx-auto border border-gray-300 bg-white w-2/5 z-10 rounded shadow-lg">
          { allTemplates.map((template) => (
            <div
              key={ template.id }
              className="flex items-center p-2 border-b border-gray-200 hover:bg-gray-100 ml-8"
            >
              <p className="flex-grow truncate">{ template.name }</p>
              <div className="w-28 h-16 mr-12">
                <img
                  className="w-full h-full object-cover"
                  src={ image }
                  alt={ template.name }
                />
              </div>
            </div>
          )) }
        </div>
      ) }
      { showResults && allTemplates.length === 0 && (
        <div className="relative mx-auto border border-gray-300 bg-white mt-2 w-3/5 z-10 rounded shadow-lg">
          <p className="p-2">No hay ninguna coincidencia para su búsqueda.</p>
        </div>
      ) }
      <img
        src={ banner }
        alt="image plantillas"
        className="w-full object-cover max-h-[600px] mt-4"
      />
      <div className="flex w-full">
        <div className="w-1/4 pt-8">
          <Filters
            setSelectedTechnologies={ setSelectedTechnologies }
            setSelectedCategories={ setSelectedCategories }
            selectedTechnologies={ selectedTechnologies }
            selectedCategories={ selectedCategories } />
        </div>
        <div className="w-3/4 pt-8 ">
          <SortOptions setSortBy={ setSortBy } setOrder={ setOrder } />
          <Cards allTemplates={ allTemplates } />
          <Pagination currentPage={ currentPage } totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
};

export default Home;
