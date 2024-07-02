import Card from "../card/Card";
import { Link } from "react-router-dom";

const Cards = ({allTemplates}) => {
    const templates = allTemplates;
    console.log(templates);
  return (
    <div className="mx-auto w-70 ">
    <div className="flex justify-end">
        <div className="grid grid-cols-3 gap-10 px-8 pt-8">
                {templates?.map((template) => (
                    <Link key={template.id}to={`/detail/${template.id}`}>
                    <Card template={template}/>
                    </Link>
                ))}
        </div>
    </div>
</div>

  );
};

export default Cards;
