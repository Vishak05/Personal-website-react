import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get('https://api.github.com/users/your-username/repos');
      setProjects(response.data);
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects">
      <h2>Projects</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <a href={project.html_url} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
