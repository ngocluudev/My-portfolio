import React, { useState } from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';
import styled from 'styled-components';
import SectionTitle from './SectionTitle';
import experiences from '../assets/data/experiences';

const SummaryStyles = styled.div`
  width: 100%;
  max-width: 1200px;

  .title {
    margin-left: 14rem;
  }
  a {
    text-decoration: none;
  }
  h1,
  h2,
  h3,
  h4 {
    letter-spacing: 0.1rem;
    line-height: 1.25;
    margin-bottom: 0.75rem;
  }
  p {
    margin-bottom: 1.25rem;
    color: var(--gray-1);
  }
  @media screen and (min-width: 800px) {
    h1,
    h2,
    h3,
    h4 {
      line-height: 1;
    }
  }
  @media screen and (max-width: 1024px) {
    .title {
      margin: 0 auto;
    }
  }
  @media screen and (min-width: 992px) {
    width: 95vw;
  }
  .loading {
    text-align: center;
  }
  .jobs-center {
    width: 80vw;
    margin: 7rem auto 0 auto;
    max-width: 1200px;
    font-size: 1.6rem;
    line-height: 1.3em;
  }
  .btn-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 4rem;
    flex-wrap: wrap;
  }
  .job-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.25rem;
    letter-spacing: 0.1rem;
    margin: 0 0.5rem;
    transition: all 0.3s linear;
    cursor: pointer;
    padding: 0.25rem 0;
    line-height: 1;
    outline-color: var(--black);
    font-size: 1.8rem;
    &:hover {
      color: var(--white);
      box-shadow: 0 2px var(--white);
    }
  }
  .active-btn {
    color: var(--white);
    box-shadow: 0 2px var(--white);
  }

  .job-info h3 {
    font-weight: 300;
    font-size: 2.4rem;
  }
  .job-info h4 {
    text-transform: uppercase;
    color: var(--black);
    background: var(--gray-1);
    display: inline-block;
    padding: 0.4rem 0.9rem;
    border-radius: 0.25rem;
    margin: 5px 0 15px 0;
  }
  .job-date {
    letter-spacing: 0.1rem;
  }
  .job-desc {
    display: grid;
    grid-template-columns: auto 1fr;
    column-gap: 2rem;
    align-items: center;
    margin-bottom: 2.25rem;
  }
  .job-desc p {
    margin-bottom: 0;
    color: var(--gray-1);
  }
  .job-icon {
    width: 1.5rem;
    color: var(--gray-2);
  }
  @media screen and (min-width: 992px) {
    .jobs-center {
      min-width: 90vw;
      display: grid;
      grid-template-columns: 200px 1fr;
      column-gap: 4rem;
    }
    .btn-container {
      flex-direction: column;
      justify-content: flex-start;
    }
    .job-btn {
      margin-bottom: 1rem;
    }
    .active-btn {
      box-shadow: -2px 0 var(--white);
    }
    .job-btn:hover {
      box-shadow: -2px 0 var(--white);
    }
  }
`;

export default function SummarySection() {
  const [jobs, setJobs] = useState(experiences);
  const [value, setValue] = useState(0);
  const { title, date, position, duties } = jobs[value];
  return (
    <SummaryStyles>
      <div className="container">
        <div className="title">
          <SectionTitle heading="Experiences" subheading="" />
        </div>
        <div className="jobs-center">
          {/* btn container */}
          <div className="btn-container">
            {jobs.map((job, index) => (
              <button
                className={`job-btn ${index === value && 'active-btn'}`}
                key={index}
                onClick={() => setValue(index)}
                type="button"
              >
                {job.position}
              </button>
            ))}
          </div>
          {/* job info */}
          <article className="job-info">
            <h3>{title}</h3>
            <h4>{position}</h4>
            <p className="job-date">{date}</p>
            {duties.map((duty, index) => (
              <div className="job-desc" key={index}>
                <FaAngleDoubleRight className="job-icon" />
                <p>{duty}</p>
              </div>
            ))}
          </article>
        </div>
      </div>
    </SummaryStyles>
  );
}
