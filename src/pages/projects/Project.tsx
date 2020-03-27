import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { FaCode } from 'react-icons/fa';
import { MdZoomOutMap } from 'react-icons/md';
import { motion } from 'framer-motion';

import './Project.scss';

const ID500x333px = require('./Layer_15.png');

export interface ProjectProps {
  project: { name: string };
  index: number;
}

const Project: React.SFC<ProjectProps> = ({ project, index }) => (
  <motion.article className="Project" animate={{ x: ['-100%', '0%'] }} transition={{ delay: index * 0.2 }}>
    <img className="Project__img" src={ID500x333px} alt="" />
    <div className="Project__info">
      <div className="Project__icons">
        <FiGithub className="Project__icon" />
        <FaCode className="Project__icon" />
        <MdZoomOutMap className="Project__icon" />
      </div>
      <h2 className="Project__h2">{project.name}</h2>
    </div>
  </motion.article>
);

export default Project;
