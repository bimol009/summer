import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SectionTitle from '../../Components/SectionTile/SectionTitle';

const ErrorPage = () => {
  const navHandler = () => {
    window.history.back();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
       <Helmet>
          <title>Academy of Dance | Error</title>
          <link rel="canonical" href="https://www.tacobell.com/" />
        </Helmet>
      <SectionTitle heading="This Is Error Page" />
      <img
        className="w-full h-auto max-w-lg rounded-lg shadow-lg mt-8"
        src="https://i.ibb.co/TLJC9cC/visuals-Jp-TY4g-Uvi-JM-unsplash.jpg"
        alt="Error"
      />
      <button
        onClick={navHandler}
        className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go to Home
      </button>
    </div>
  );
};

export default ErrorPage;
