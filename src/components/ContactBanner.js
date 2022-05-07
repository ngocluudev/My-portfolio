import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import PText from './PText';
import Footer from './Footer';

const ContactBannerStyles = styled.div`
  padding: 10rem 0;
  .contactBanner__wrapper {
    background-color: var(--deep-dark);
    border-radius: 12px;
    padding: 5rem 0rem;
    text-align: center;
  }
  .contactBanner__heading {
    font-size: 4rem;
    margin-bottom: 2rem;
  }
  @media only screen and (min-width: 768px) {
    .contactBanner__heading {
      font-size: 2.8rem;
    }
  }
`;

export default function ContactBanner() {
  return (
    <>
      <ContactBannerStyles>
        <div className="container">
          <div className="contactBanner__wrapper">
            <PText>If you have something to ask me</PText>
            <h3 className="contactBanner__heading">Click here</h3>
            <Button btnText="Contact Now" btnLink="/contact" />
          </div>
        </div>
      </ContactBannerStyles>
      <Footer />
    </>
  );
}