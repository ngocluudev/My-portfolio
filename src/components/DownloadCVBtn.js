import React from 'react';
import styled from 'styled-components';
import CV from '../assets/CV/CV.pdf';

const ButtonStyle = styled.div`
  margin-top: 2rem;
  a {
    text-decoration: none;
    color: black;
  }

  font-size: 2.2rem;
  background-color: var(--gray-1);
  padding: 0.7em 2em;
  border-radius: 8px;
  display: inline-block;
  border: 2px solid var(--gray-1);

  @media only screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;
export default function DownloadCVBtn() {
  return (
    <ButtonStyle>
      <a href={CV} download="Luu_Xuan_Ngoc-CV">
        Download CV
      </a>
    </ButtonStyle>
  );
}
