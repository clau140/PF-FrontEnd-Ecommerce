import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getFilteredTemplates, getTechnologies } from "../../redux/actions";
import DropdownMenu from "../dropDownMenu/DropDownMenu";

const Filters = () => {
  const { technologies, categories } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const [ selectedTechnologies, setSelectedTechnologies ] = useState([]);
  const [ selectedCategories, setSelectedCategories ] = useState([]);

  useEffect(() => {
    dispatch(getTechnologies())
    dispatch(getCategories())
  }, [ dispatch ]);

  useEffect(() => {
    dispatch(getFilteredTemplates(selectedTechnologies, selectedCategories))
  }, [ selectedCategories, selectedTechnologies, dispatch]);

  const handleTechnologyChange = (technology) => {
    setSelectedTechnologies(prevSelected =>
      prevSelected.includes(technology)
        ? prevSelected.filter(t => t !== technology)
        : [ ...prevSelected, technology ]
    );
  };

  const handleCategoryChange = (category) => {
    setSelectedCategories(prevSelected =>
      prevSelected.includes(category)
        ? prevSelected.filter(c => c !== category)
        : [ ...prevSelected, category ]
    );
    console.log(selectedCategories);
  };

  return (
    <div className="sticky top-0 bg-white z-10 gap-8 mt-12 mr-12 mb-12">
      <DropdownMenu
        title="Tecnologías"
        items={ technologies }
        selectedItems={ selectedTechnologies }
        handleItemChange={ handleTechnologyChange } />
      <DropdownMenu
        title="Categorías"
        items={ categories }
        selectedItems={ selectedCategories }
        handleItemChange={ handleCategoryChange }
      />
    </div>
  )
}

export default Filters