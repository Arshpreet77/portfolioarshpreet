import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
      id: 1,
      image: "https://placebeard.it/640x360",
      title: "Project One",
      description: "This is a brief description of Project One."
    },
    {
      id: 2,
      image: "https://placebeard.it/640x360",
      title: "Project Two",
      description: "This is a brief description of Project Two."
    },
    {
      id: 3,
      image: "https://placebeard.it/640x360",
      title: "Project Three",
      description: "This is a brief description of Project Three."
    },
    {
      id: 4,
      image: "https://placebeard.it/640x360",
      title: "Project Four",
      description: "This is a brief description of Project Four."
    },
    {
        id: 5,
        image: "https://placebeard.it/640x360",
        title: "Project Five",
        description: "This is a brief description of Project Five."
    },
    {
        id: 6,
        image: "https://placebeard.it/640x360",
        title: "Project Six",
        description: "This is a brief description of Project Six."
    }
  ];


export default function ProjectsContainer (){
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} image={project.image} title={project.title} description={project.description} />
        ))}
      </div>
    </div>
  );
};

