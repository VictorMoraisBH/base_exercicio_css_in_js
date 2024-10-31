import React from 'react';
import Header from './components/Cabecalho';
import Hero from './components/Hero';
import ListaVagas from './containers/ListaVagas';
import FormVagas from './components/FormVagas';


function App() {
  const aoPesquisar = (termo: string) => {
    console.log('Pesquisando por:', termo);
  };

  return (
    <>
      <Header />
      <Hero />
      <FormVagas aoPesquisar={aoPesquisar} /> 
      <div className="container">
        <ListaVagas />
      </div>
    </>
  );
}

export default App;
