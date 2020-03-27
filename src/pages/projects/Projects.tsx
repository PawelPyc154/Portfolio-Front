import React from 'react';
import './Projects.scss';

import Project from './Project';

export interface ProjectsProps {}

const Projects: React.SFC<ProjectsProps> = () => {
  const projects = [
    {
      name: '2019',
    },
    {
      name: 'Project 6',
    },
    {
      name: 'Project 8',
    },
    {
      name: 'Memoryy game',
    },
    {
      name: 'Kalkulator walut',
    },
    {
      name: 'G-code translator',
    },
  ];
  return (
    <main className="Projects">
      <h1 className="Projects__header">Moje projekty</h1>
      <section className="Projects__container">
        {projects.map((project, index) => (
          <Project project={project} index={index} key={project.name} />
        ))}
      </section>
    </main>
  );
};

export default Projects;
