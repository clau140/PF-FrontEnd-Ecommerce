import Card from "../card/Card";
import { Link } from "react-router-dom";

const Cards = ({allTemplates}) => {
    const templates = allTemplates;
    console.log(templates);
  return (
    <div className="mx-auto w-70 ">
    <div className="flex justify-end">
        <div className="lg:grid lg:grid-cols-3 lg:gap-5 lg:px-5 pt-12 md:grid-cols-2 md:grid md:gap-4 md:px-6 md:mx-auto w-50 ">
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
