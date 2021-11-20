import React from 'react';
import DadosCadastrais from './DadosCadastrais';

class Formulario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox: false,
      nome: '',
      sobrenome: '',
      sexo: '',
      CPF: 0,
      phone: 0,
      nascimento: 0,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <DadosCadastrais value={this.state} handleChange={this.handleChange} />
      </>
    );
  }
}

export default Formulario;
