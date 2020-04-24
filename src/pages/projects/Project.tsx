/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import { FiGithub } from 'react-icons/fi';

import { MdZoomOutMap } from 'react-icons/md'; // , MdZoomIn
import { motion } from 'framer-motion';

import './Project.scss';
// import { Link } from 'react-router-dom';

export interface ProjectProps {
  project: {
    name: string;
    param: string;
    links: {
      code: string;
      demo?: string;
    };
    image: string;
    technologies: string[];
    description: string;
  };
  index: number;
}

const Project: React.SFC<ProjectProps> = ({ project, index }) => (
  <motion.article
    className="Project"
    animate={{ x: ['-100%', '0%'] }}
    transition={{ delay: index * 0.1 }}
  >
    <img className="Project__image" src={require(`./image/${project.image}.png`)} alt="" />

    <div className="Project__info">
      <div className="Project__icons">
        <a href={project.links.code}>
          <FiGithub className="Project__icon" />
        </a>
        {project?.links?.demo && (
          <a href={project.links.demo}>
            <MdZoomOutMap className="Project__icon" />
          </a>
        )}
        {/* <Link to={`/projects/${project.param}`}>
          <MdZoomIn className="Project__icon" />
          <MdZoomOutMap className="Project__icon" />
        </Link> */}
      </div>
      <h2 className="Project__h2">{project.name}</h2>
    </div>
  </motion.article>
);

export default Project;
