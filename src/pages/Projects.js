import React, { useState, useEffect } from 'react';
import { MdSearch } from 'react-icons/md';
import styled from 'styled-components';

import SectionTitle from '../components/SectionTitle';
import ProjectItem from '../components/ProjectItem';
import ProjectInfo from '../assets/data/projects';

const ProjectStyles = styled.div`
  padding: 10rem 0;
  .projects__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
  .projects__searchBar {
    position: relative;
    width: 300px;
    margin-top: 5rem;
    .icon {
      position: absolute;
      width: 2rem;
      right: 1rem;
    }
    .icon path {
      color: var(--deep-dark);
    }
  }
  .projects__searchBar input {
    width: 100%;
    font-size: 2rem;
    padding: 0.8rem;
    color: var(--black);
    border-radius: 10px;
    outline: none;
    border: none;
  }
  @media only screen and (max-width: 768px) {
    .projects__searchBar,
    .projects__searchBar form,
    .projects__searchBar input {
      width: 100%;
    }
  }
`;

export default function Projects() {
  const [searchText, setSearchText] = useState('');
  const [projects, setProjects] = useState(ProjectInfo);
  useEffect(() => {
    if (searchText === '') return;
    setProjects(() =>
      ProjectInfo.filter((item) =>
        item.name.toLowerCase().match(searchText.toLowerCase())
      )
    );
  }, [searchText]);
  const handleChange = (e) => {
    setSearchText(e.target.value);
    if (!e.target.value > 0) {
      setProjects(ProjectInfo);
    }
  };

  return (
    <ProjectStyles>
      <div className="container">
        <SectionTitle heading="Projects" subheading="some of my recent wirks" />
        <div className="projects__searchBar">
          <form>
            <input type="text" placeholder="Search" onChange={handleChange} />
            <MdSearch className="icon" />
          </form>
        </div>
        <div className="projects__allItems">
          {projects.map((item, index) => (
            <ProjectItem
              key={index}
              title={item.name}
              img={item.img}
              desc={item.desc}
              link={item.link}
              source={item.source}
            />
          ))}
        </div>
      </div>
    </ProjectStyles>
  );
}
