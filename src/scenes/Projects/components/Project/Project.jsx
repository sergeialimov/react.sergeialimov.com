import React from 'react';
import { NavLink } from 'react-router-dom';

import './project.css';

const Project = (props) => {
  const { classNm, content, path, src } = props;
  return (
    <NavLink
      to={path}
      target="_blank"
      rel="noopener noreferrer"
      className='project-link'
    >
      <div className={classNm}>
        <img className="project-pic" src={src} alt={content}/>
        <p className="project-name">{content}</p>
      </div>
    </NavLink>
  );
}

export default Project;