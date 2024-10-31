import React from 'react';
import styled from 'styled-components';

const HeroForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
  background-color: #f0f0f0;
`;

const Container = styled.div`
  text-align: center;
`;

const HeroTitle = styled.h2`
  font-size: 2em;
  color: #333;
`;

const Hero: React.FC = () => (
  <HeroForm>
    <Container>
      <HeroTitle>
        As melhores vagas para tecnologia, design e artes visuais.
      </HeroTitle>
    </Container>
  </HeroForm>
);

export default Hero;
