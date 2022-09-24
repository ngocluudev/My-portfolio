import CryptoAppImg from '../images/cryptoApp.png';
import cocktailImg from '../images/cocktailImg.png';
import PortfolioImg from '../images/portfolioImg.png';

const projects = [
  {
    id: 1,
    name: 'Cocktail Search App',
    desc:
      'A website to search your favorite cocktail.React js and fetch API is used in this project. ',
    img: cocktailImg,
    link: 'https://cocktail-search-app.vercel.app/',
    source: 'https://github.com/ngocluudev/react-project',
  },
  {
    id: 2,
    name: 'My Portfolio',
    desc:
      'My personal portfolio website using React js, Styled-components, swiper and responsive design.  ',
    img: PortfolioImg,
    link: 'https://ngocluu-portfolio.vercel.app/',
    source: 'https://github.com/ngocluudev/My-portfolio',
  },
  {
    id: 3,
    name: 'Cryptocurrency App',
    desc:
      'A website that help you to know more about cryptocurrencies. This website was made from React, Redux, Typescript, antd and more',
    img: CryptoAppImg,
    link: 'https://ngocluu-crypto-app.vercel.app/',
    source: 'https://github.com/ngocluudev/Crypto-App',
  },
];

export default projects;
