import React from 'react';

const ProjectCard = ({ title, image, description }) => {
  return (
    <div>
      <div className="bg-transparent border-current border-gray-700 border rounded-lg shadow-lg p-4 shadow-gray-700 transition duration-300 ease-in-out hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-xl hover:scale-105">
        <img src={image} alt={title} className="w-full h-40 object-cover" />
        <h3 className="text-xl font-bold mt-5">{title}</h3>
        <p className="text-gray-800 dark:text-white mt-2">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;