import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #282c34;
  padding: 20px;
  text-align: center;
  color: white;
`;

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
`;

const Cabecalho: React.FC = () => (
  <HeaderContainer>
    <Title>EBAC Jobs</Title>
  </HeaderContainer>
);

export default Cabecalho;
