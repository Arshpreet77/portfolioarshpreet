import React from 'react';

const ExperienceCard = ({ title, company, description, timePeriod }) => {
  return (
    <div className="border border-gray-700 shadow-md shadow-gray-700 rounded-lg p-4 mb-6 transition duration-300 ease-in-out hover:shadow-xl hover:border-gray-600">
      <div className="bg-gray-900 text-white py-2 px-4 w-full hover:bg-gray-800">
        {title} - {company}
      </div>
      <p className="text-gray-500 mt-2">{timePeriod}</p>
      <p className="text-gray-800 dark:text-white mt-2">{description}</p>
    </div>
  );
}

export default ExperienceCard;
