import image from "../../assets/images/banner-home2.avif";

const Landing = () => {

    return (
        <div>
        <img
          src={image}
          alt="image plantillas"
          className="w-full object-cover max-h-[600px] mt-4"
        />
      </div>
  
    )
};

export default Landing;