import WeatherAppImg from '../images/weather-app.png';
import cocktailImg from '../images/cocktailImg.png';
import PortfolioImg from '../images/portfolioImg.png';

const projects = [
  {
    id: 1,
    name: 'Weather Search App',
    desc:
      'An application to search the weather by the name of the city. This use HTML CSS and JS only ',
    img: WeatherAppImg,
    link: 'https://weather-app-search.vercel.app/',
    source: 'https://github.com/ngocluudev/jsprojects',
  },
  {
    id: 2,
    name: 'Cocktail Search App',
    desc:
      'A website to search your favorite cocktail.React js and fetch API is used in this project. ',
    img: cocktailImg,
    link: 'https://cocktail-search-app.vercel.app/',
    source: 'https://github.com/ngocluudev/react-project',
  },
  {
    id: 3,
    name: 'My Portfolio',
    desc:
      'My personal portfolio website using React js, Styled-components, swiper and responsive design.  ',
    img: PortfolioImg,
    link: 'https://ngocluu-portfolio.vercel.app/',
    source: 'https://github.com/ngocluudev/My-portfolio',
  },
];

export default projects;
