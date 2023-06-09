import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTile/SectionTitle';
import './ErrorPage.css'

const ErrorPage = () => {
    const location = useLocation();
    console.log(location)

   

   

    const navigate = useNavigate();
    const navHandler =()=>{
      navigate(-1)
    }
    return (
        
        <div className='grid justify-items-center border'>
            <SectionTitle heading={"This Is Error Page"}></SectionTitle>
            <img className='imgError
            bg-gradient-to-r from-purple-300 to-pink-400' src="https://i.ibb.co/TLJC9cC/visuals-Jp-TY4g-Uvi-JM-unsplash.jpg" alt="" />
            <div className='button'>
            <button onClick={navHandler} className='btn btn-error text-3xl mt-5 mb-5 font-bold'>go to home</button>
            </div>
        </div>
    );
};

export default ErrorPage;