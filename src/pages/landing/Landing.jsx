import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import logoVega from "../../assets/images/VEGA logo.svg";
import typeVega from "../../assets/images/VEGA type.svg";

const Landing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/Home');
    }, 3000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className='w-full h-full flex justify-center' style={{ background: 'linear-gradient(to bottom, silver, white)' }}>
      
      <div className='mt-[5rem]'>
        <motion.img
          src={logoVega}
          alt="logo"
          className="w-[350px] h-[350px]"
          initial={{ rotate: 0 }}
          animate={{ rotate: 90 }}
          transition={{ duration: 1.5, ease: "linear" }}
          // onAnimationComplete={() => navigate('/Home')}
        />
        <img
          src={typeVega}
          alt="type"
          className="w-[400px] h-[400px] mt-[-8rem]"
        />
      </div>
    </div>
  );
};

export default Landing;
