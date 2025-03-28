import React from 'react';
import styled from 'styled-components';
import { Projects as projectList } from '../../data/constants';  // Adjust the import path as necessary

const PContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const PWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Title = styled.h2`
  margin-bottom: 20px;
`;

const Desc = styled.p`
  margin-bottom: 40px;
`;

const Button = styled.a`
  -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  margin-bottom: 10px;
  text-decoration: none;
  width: 100%;
  max-width: 300px;
  text-align: center;
  padding: 16px 0;
  cursor: pointer;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  box-shadow: 20px 20px 60px #1f2634, -20px -20px 60px #1f2634;
  border-radius: 50px;
  font-weight: 600;
  font-size: 20px;

  &:hover {
    transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow: 20px 20px 60px #1f2634;
    filter: brightness(1);
  }

  @media (max-width: 640px) {
    padding: 12px 0;
    font-size: 18px;
  }
  color: white;
`;

const Projects = () => {
  return (
    <PContainer id="Projects">
      <Title>PROJECTS</Title>
      <Desc>My Some of the Project details are as follows.</Desc>
      <PWrapper>
        {projectList.map((project, index) => (
          <Button key={index} href={project.link} target="_blank" rel="noopener noreferrer">
            {project.name}
          </Button>
        ))}
      </PWrapper>
    </PContainer>
  );
}

export default Projects;
