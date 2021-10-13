import React from 'react';
import ProjectItem from './ProjectItem';
// └── App
//     ├── NavBar
//     ├── Home
//     ├── About
//     |   └── Links
//     └── ProjectList
//         |   ProjectItem
//         |   ProjectItem
//         └── ProjectItem
function ProjectList({ projects }) {
  const projectList = projects.map((project) => {
    return (
      <ProjectItem
        name={project.name}
        about={project.about}
        technologies={project.technologies}
        key={project.id}
      />
    );
  });

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{projectList}</div>
    </div>
  );
}

export default ProjectList;
