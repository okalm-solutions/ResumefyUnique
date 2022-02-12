import {
  HeroDetails,
  HeroImage,
  HeroImageContainer,
  HeroSection,
} from './Hero.styles';
import {Link} from 'react-router-dom'

import { ButtonPrimary } from '../Buttons';

import ComputerImage from '../../assets/computer.png';

function Hero() {
  return (
    <HeroSection>
      <HeroDetails>
        <h1>
          Create a professional resume and{' '}
          <strong style={{ color: '#6683EB' }}>get hired!</strong>
        </h1>
        <p>
          The most efficient and supportive way for you to learn the most
          in-demand skills, get hired and advance your career.
        </p>
        <Link to='/profile'>
            <ButtonPrimary>Create Resume</ButtonPrimary>
        </Link>
      </HeroDetails>
      <HeroImageContainer>
        <HeroImage src={ComputerImage} alt='Computer' />
      </HeroImageContainer>
    </HeroSection>
  );
}

export default Hero;
