/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React from 'react';
import './ProjectView.scss';
import { useParams, Link } from 'react-router-dom';
import { MdKeyboardArrowLeft, MdZoomOutMap } from 'react-icons/md';
import { FiGithub } from 'react-icons/fi';

import { motion } from 'framer-motion';
import projects from './projects.json';

export interface ProjectViewProps {}

const ProjectView: React.SFC<ProjectViewProps> = () => {
  const { projectParam } = useParams();

  const projectData = projects.find(project => project.param === projectParam);

  return (
    <div className="ProjectView">
      <div className="ProjectView__imageContainer">
        <motion.div className="ProjectView__icons" animate={{ y: [-100, 0] }}>
          {projectData?.links?.demo && (
            <a className="ProjectView__linkIcon" href={projectData.links.demo}>
              <FiGithub className="ProjectView__icon" />
            </a>
          )}
          <a href="#" className="ProjectView__linkIcon">
            <MdZoomOutMap className="ProjectView__icon" />
          </a>

          <Link className="ProjectView__back" to="/projects">
            <MdKeyboardArrowLeft className="ProjectView__icon--back" />
          </Link>
        </motion.div>
        <motion.img
          className="ProjectView__image"
          src={require(`./${projectData?.image}.png`)}
          alt=""
          animate={{ scale: [0, 1] }}
        />
      </div>
      <div className="ProjectView__info">
        <motion.h1 className="ProjectView__title" animate={{ y: [-500, 0] }}>
          {projectData?.name}
        </motion.h1>
        <motion.p className="ProjectView__description" animate={{ y: [-500, 0] }}>
          {projectData?.description}
        </motion.p>
        <motion.h2 className="ProjectView__technology" animate={{ y: [-500, 0] }}>
          Technologie:
        </motion.h2>

        {projectData?.technologies.map((technology, index) => (
          <motion.p
            className="ProjectView__technology__item"
            animate={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ delay: 0.5 + index * 0.2 }}
          >
            {technology}
          </motion.p>
        ))}
      </div>
    </div>
  );
};

export default ProjectView;
