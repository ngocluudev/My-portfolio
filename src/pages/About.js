import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import AboutImg from '../assets/images/coder.jpg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import DownloadCVBtn from '../components/DownloadCVBtn';

const AboutStyles = styled.div`
  padding: 20rem 0 0rem 0;
  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
      filter: grayscale(100%);
    }
  }
  .about__info-items {
    margin-top: 15rem;
  }
  .about__info-item {
    margin-bottom: 10rem;
  }
  .about__info-heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0 0 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__info-heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Luu Xuan Ngoc</span>
              </p>
              <h2 className="about__heading">A Front end Web developer</h2>
              <div className="about__info">
                <PText>
                  I have learned to code for 6 months.I love it and now I
                  looking forward to having an opportunity to work in
                  professional conditions. I want to upgrade my knowledge and
                  gain experience as much as possible.
                  <br />
                  <br />
                  I want to start as an intern because I think my knowledge is
                  not good enough and I have no experience in the working
                  environment. If you want to hire me, go to the contact
                  section. Thank you !!
                  <br />
                  <br />
                </PText>
              </div>
              <DownloadCVBtn />
            </div>
            <div className="right">
              <img src={AboutImg} alt="img" />
            </div>
          </div>
          <div className="about__info-items">
            <div className="about__info-item">
              <h1 className="about__info-heading">Education</h1>
              <AboutInfoItem
                title="School"
                items={['Dai Hoc Kinh te Ky thuat Cong nghiep']}
              />
            </div>
            <div className="about__info-item">
              <h1 className="about__info-heading">My Skills</h1>
              <AboutInfoItem
                title="Frontend"
                items={['HTML', 'CSS', 'JS', 'REACTJS']}
              />
              <AboutInfoItem
                title="Other"
                items={['Git', 'Styled Components', 'React Router V6']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutStyles>
    </>
  );
}
