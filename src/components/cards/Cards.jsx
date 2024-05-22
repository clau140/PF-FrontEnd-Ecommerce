import Card from "../card/Card";

const Cards = ({allTemplates}) => {
    const templates = allTemplates;
  return (
    <div className="mx-auto w-70 ">
    <div className="flex justify-end">
        <div className="grid grid-cols-3 gap-8 mt-12 mr-12 mb-12">
                {templates?.map((template) => (
                    <Card template={template} key={template.id} 
                    />
                ))}
        </div>
    </div>
</div>

  );
};

export default Cards;
