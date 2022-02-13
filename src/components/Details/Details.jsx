import { ButtonSecondary } from '../Buttons';
import {
  DetailSection,
  DetailSectionOneContent,
  DetailSectionOne,
  DetailSectionTwo,
  DetailSectionTwoContent,
} from './Details.styles';

import ResumeImage from '../../assets/resume.png';

import 'styled-components/macro';

function Details() {
  return (
    <DetailSection>
      {/* Detail Section One */}
      <DetailSectionOne>
        <DetailSectionOneContent>
          <h1>
            <strong style={{ color: '#86ECA3' }}>Free</strong> to use
          </h1>
          <p>
            The most efficient and supportive way for you to learn the most
            in-demand skills, get hired and advance your career.
          </p>
        </DetailSectionOneContent>
        <DetailSectionOneContent>
          <h1>
            <strong style={{ color: '#6683E8' }}>Easy</strong> to use
          </h1>
          <p>
            The most efficient and supportive way for you to learn the most
            in-demand skills, get hired and advance your career.
          </p>
        </DetailSectionOneContent>
        <DetailSectionOneContent>
          <h1>
            <strong style={{ color: ' #B538C9' }}>Fun</strong> to use
          </h1>
          <p>
            The most efficient and supportive way for you to learn the most
            in-demand skills, get hired and advance your career.
          </p>
        </DetailSectionOneContent>
      </DetailSectionOne>
      {/* Detail Section Two */}
      <DetailSectionTwo>
        <DetailSectionTwoContent>
          <h1>Templates already made so you can focus on your content</h1>
          <ButtonSecondary>Create Resume</ButtonSecondary>
        </DetailSectionTwoContent>
        <DetailSectionTwoContent>
          <img src={ResumeImage} alt='Resume' />
        </DetailSectionTwoContent>
      </DetailSectionTwo>
    </DetailSection>
  );
}

export default Details;
