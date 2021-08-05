import React, { Component } from 'react';

//componentes
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/listaDeNotas';
import "./assets/App.css";
import './assets/index.css';

class App extends Component {

  constructor(){
    super();
    this.notas = [];
    this.state = {
      notas:[]
    };
  }

  criarNota(titulo, texto){
    if(texto.length>500 || texto.length<=0|| titulo.length>80 || titulo.length<=0){ 
      alert('numero de caracteres inválido')
      return 0}

    const novaNota = {titulo, texto}
    const novoArrayNotas = [...this.state.notas,novaNota]
    const novoEstado = {
      notas:novoArrayNotas
    }
    this.setState(novoEstado)

  }
  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota = { this.criarNota.bind(this) }/>
        <ListaDeNotas notas={this.state.notas}/>
      </section>
    );
  }
}

export default App;
