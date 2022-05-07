import React from 'react';
import styled from 'styled-components';
import projectImg from '../assets/images/weather-app.png';

const ProjectItemStyles = styled.div`
  .projectItem__img {
    width: 100%;
    height: 400px;
    overflow: hidden;
    border-radius: 12px;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc {
    font-size: 1.6rem;
    font-family: 'RobotoMono Regular';
    margin-top: 1rem;
  }
  .source-btn {
    padding: 0.6rem 2.6rem;
    color: var(--black);
    background-color: var(--gray-1);
    border-radius: 5px;
    display: inline-block;
    margin: 15px 0 6px 0;
    font-size: 1.6rem;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
    .source-btn {
      width: 100%;
    }
  }
`;

export default function ProjectItem({
  img = projectImg,
  title = 'Project Name',
  desc = 'Lorem ipsum is simply a dummy text ',
  link = '#',
  source = '#',
}) {
  return (
    <ProjectItemStyles>
      <a
        href={link}
        target="_blank"
        className="projectItem__img"
        rel="noreferrer"
      >
        <img src={img} alt="project" />
      </a>
      <div className="projectItem__info">
        <a target="_blank" href={link} rel="noreferrer">
          <h3 className="projectItem__title">{title}</h3>
        </a>
        <p className="projectItem__desc">{desc}</p>
        <a
          target="_blank"
          href={source}
          rel="noreferrer"
          className="source-btn"
        >
          Source Code
        </a>
      </div>
    </ProjectItemStyles>
  );
}
