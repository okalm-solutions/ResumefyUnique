import styled from "styled-components";

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const ProjectsForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 18rem;
`;

export const Heading = styled.h1`
  font-size: 2rem;
  margin-top: 2rem;
  @media (min-width: 800px) {
    font-size: 3.4rem;
  }
`;

export const ProjectsInput = styled.input`
  margin-bottom: 1rem;
  margin-top: 0.1rem;
  padding: 0.2rem;
  border: 1.4px solid gray;
`;
