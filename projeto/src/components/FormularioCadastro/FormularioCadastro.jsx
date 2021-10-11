import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo="";
    this.texto="";
  }
  _handleMudaTitulo(evento){
    evento.stopPropagation()
    this.titulo = evento.target.value
  }
  _handleMudaTexto(evento){
    evento.stopPropagation()
    this.texto = evento.target.value
  }
  _criarCard(evento){
    evento.preventDefault()
    evento.stopPropagation()
    this.props.criarNota(this.titulo,this.texto)
  }
  render() {
    return (
      <form 
      className="form-cadastro"
      onSubmit = { this._criarCard.bind(this) }>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={ this._handleMudaTitulo.bind(this) }
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input textarea"
          onChange = { this._handleMudaTexto.bind(this) }
        />
        <button className="form-cadastro_submit">
          Criar Nota
        </button>
        <button 
        type="button"
        className = "form-cadastro_submit alert">
          limpar formulario
          </button>
      </form>
    );
  }
}

export default FormularioCadastro;
