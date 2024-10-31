import React from 'react';
import styled from 'styled-components';

const VagaContainer = styled.li`
  border: 1px solid #ccc;
  padding: 15px;
  margin: 10px 0;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const VagaTitle = styled.h3`
  font-size: 1.5em;
  margin-bottom: 10px;
`;

const VagaDetails = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 10px 0;
`;

const VagaLink = styled.a`
  display: inline-block;
  margin-top: 10px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #0056b3;
  }
`;

type Props = {
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const Vaga: React.FC<Props> = (props) => (
  <VagaContainer>
    <VagaTitle>{props.titulo}</VagaTitle>
    <VagaDetails>
      <li>Localização: {props.localizacao}</li>
      <li>Nível: {props.nivel}</li>
      <li>Tipo de contratação: {props.modalidade}</li>
      <li>
        Salário: {props.salarioMin} - {props.salarioMax}
      </li>
      <li>Requisitos: {props.requisitos.join(', ')}</li>
    </VagaDetails>
    <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
  </VagaContainer>
);

export default Vaga;
