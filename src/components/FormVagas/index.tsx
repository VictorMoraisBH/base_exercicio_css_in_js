import React, { FormEvent, useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 0;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  flex: 1;
  margin-right: 10px;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

type Props = {
  aoPesquisar: (termo: string) => void;
};

const FormVagas: React.FC<Props> = ({ aoPesquisar }) => {
  const [termo, setTermo] = useState<string>('');

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    aoPesquisar(termo.toLocaleLowerCase());
  };

  return (
    <FormContainer onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <Button type="submit">Pesquisar</Button>
    </FormContainer>
  );
};

export default FormVagas;
