import React from 'react';

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="text-center mt-8 mb-8">
      <p className="text-2xl mb-2">{subHeading}</p>
      <h3 className="uppercase text-4xl font-bold pb-2 border-b-2">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
