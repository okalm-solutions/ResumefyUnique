import styled from 'styled-components';

export const SectionContainer = styled.div`
  display: flex;
  justify-content: center;
  max-width: 1200px;
  height: 70vh;
  margin: 0 auto;

  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;

  label {
    font-size: 24px;
  }

  & > div {
    flex: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Heading = styled.h1`
  font-size: 36px;
  line-height: 42px;
  margin-top: 2rem;
  /* @media (min-width: 800px) {
    font-size: 3.4rem;
  } */
  width: 100%;
  text-align: center;
`;

export const FormInput = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.1rem;

  padding: 0.2rem;
  font-size: 16px;
  padding: 10px;
  border: 1px solid #6683e8;
  box-sizing: border-box;
  border-radius: 12px;
  width: 90%;
`;
