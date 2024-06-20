import Card from "../card/Card";
import { Link } from "react-router-dom";

const Cards = ({allTemplates}) => {
    const templates = allTemplates.data;
    console.log(templates);
  return (
    <div className="mx-auto w-70 ">
    <div className="flex justify-end">
        <div className="grid grid-cols-3 gap-8 mt-12 mr-12 mb-12">
                {templates?.map((template) => (
                    <Link to={`/detail/${template.id}`}>
                    <Card template={template} key={template.id}/>
                    </Link>
                ))}
        </div>
    </div>
</div>

  );
};

export default Cards;
