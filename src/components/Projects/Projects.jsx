import React from "react";
import {
  ProjectsContainer,
  ProjectsForm,
  ProjectsInput,
  Heading,
} from "./Projects.styles";
import { useDispatch, useSelector } from "react-redux";
import { setProjects } from "../../pages/Resume/ResumeSlice";

const Projects = () => {
  const dispatch = useDispatch();

  const handlechange = (e) => {
    dispatch(setProjects(e.target));
  };
  const projects = useSelector((state) => state.resume.values.projects);

  return (
    <ProjectsContainer>
      <Heading>Projects</Heading>
      <ProjectsForm>
        <label>Name</label>
        <ProjectsInput
          type="text"
          name="name"
          value={projects[0].name}
          onChange={handlechange}
        />
        <label>Description</label>
        <ProjectsInput
          type="text"
          name="description"
          value={projects[0].description}
          onChange={handlechange}
        />
        <label>Url</label>
        <ProjectsInput
          type="text"
          name="url"
          value={projects[0].url}
          onChange={handlechange}
        />
      </ProjectsForm>
    </ProjectsContainer>
  );
};

export default Projects;
