import React from 'react';
import './Projects.scss';
import Project from './Project';
import projects from './projects.json';

export interface ProjectsProps {}

const Projects: React.SFC<ProjectsProps> = () => (
  <main className="Projects">
    <h1 className="Projects__header">Moje projekty</h1>
    <section className="Projects__container">
      {projects.map((project, index) => (
        <Project project={project} index={index} key={project.name} />
      ))}
    </section>
  </main>
);
export default Projects;
