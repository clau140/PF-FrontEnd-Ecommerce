import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getCategories, getTechnologies } from "../../redux/actions";

const Filters = () => {
  const { technologies, categories } = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const [ selectedTechnologies, setSelectedTechnologies ] = useState([]);
  const [ selectedCategories, setSelectedCategories ] = useState([]);

  useEffect(() => {
    dispatch(getTechnologies())
    dispatch(getCategories())
  }, [ dispatch ]);

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
  };

  return (
    <div>
      <div>
        <h3>Tecnologías</h3>
        { technologies.map((tech, index) => (
          <div key={ index }>
            <input
              type="checkbox"
              id={ tech.id }
              checked={ selectedTechnologies.includes(tech.name) }
              onChange={ () => handleTechnologyChange(tech.name) }
            />
            <label htmlFor={ `tech-${tech.name}` }>{ tech.name }</label>
          </div>
        )) }
      </div>
      <div>
        <h3>Categorías</h3>
        { categories.map((cat, index) => (
          <div key={ index }>
            <input
              type="checkbox"
              id={ cat.id }
              checked={ selectedCategories.includes(cat.name) }
              onChange={ () => handleCategoryChange(cat.name) }
            />
            <label htmlFor={ `tech-${cat.name}` }>{ cat.name }</label>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Filters