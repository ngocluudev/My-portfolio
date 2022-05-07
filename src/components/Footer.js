import React from 'react';
import styled from 'styled-components';
import FooterCol from './FooterCol';
import PText from './PText';

const FooterStyles = styled.div`
  padding-top: 10rem;
  background-color: var(--deep-dark);
  .container {
    display: flex;
    gap: 3rem;
  }
  .footer__col1 {
    flex: 2;
  }
  .footer__col2,
  .footer__col3,
  .footer__col4 {
    flex: 1;
  }
  .footer__col1-title {
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }
  .copyright {
    background-color: var(--dark-bg);
    text-align: left;
    padding: 1rem 0;
    margin-top: 5rem;
    .para {
      margin-left: 0;
    }
  }
  @media only screen and (max-width: 768px) {
    .container {
      flex-direction: column;
      gap: 0rem;
      & > div {
        margin-top: 5rem;
      }
    }
    .footer__col1 .para {
      max-width: 100%;
    }
    .copyright {
      .container {
        div {
          margin-top: 0;
        }
      }
    }
  }
`;

export default function Footer() {
  return (
    <FooterStyles>
      <div className="container">
        <div className="footer__col1">
          <h1 className="footer__col1-title">Luu Xuan Ngoc</h1>
          <PText>
            I want to have more knowledge and experience in the website
            development field
          </PText>
        </div>
        <div className="footer__col2">
          <FooterCol
            heading="Important Links"
            links={[
              {
                title: 'Home',
                path: '/',
                type: 'Link',
              },
              {
                title: 'About',
                path: '/about',
                type: 'Link',
              },
              {
                title: 'Projects',
                path: '/projects',
                type: 'Link',
              },
              {
                title: 'Contact',
                path: '/contact',
                type: 'Link',
              },
            ]}
          />
        </div>
        <div className="footer__col3">
          <FooterCol
            heading="Contact info"
            links={[
              {
                title: '0372 514 388',
                path: 'tel:+8472514388',
              },
              {
                title: 'luuxuanngoc2312@gmail.com',
                path: 'mailto: webciafr@gamil.com',
              },
            ]}
          />
        </div>
        <div className="footer__col4">
          <FooterCol
            heading="Social"
            links={[
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/ngocluu2003/',
              },
              {
                title: 'Github',
                path: 'https://github.com/ngocluudev',
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/luu-ngoc-655752232/',
              },
            ]}
          />
        </div>
      </div>
      <div className="copyright">
        <div className="container">
          <PText>Created by Luu Xuan Ngoc</PText>
        </div>
      </div>
    </FooterStyles>
  );
}
