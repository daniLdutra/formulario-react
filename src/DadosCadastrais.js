import React from 'react';

class DadosCadastrais extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { value, handleChange } = this.props;
    return (
      <>
        <h1>Dados cadastrais</h1>
        <form>
          <fieldset className="container">
            <label>
              Pessoa física:
              <input
                type="checkbox"
                name="checkbox"
                value={value.checkbox}
                onChange={handleChange}
              ></input>
              Pessoa jurídica:
              <input
                type="checkbox"
                name="checkbox"
                value={value.checkbox}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Nome:
              <input
                name="nome"
                value={value.nome}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Sobrenome:
              <input
                name="sobrenome"
                value={value.sobrenome}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Sexo:
              <select name="sexo" value={value.sexo} onChange={handleChange}>
                <option>Feminino</option>
                <option>Masculino</option>
              </select>
            </label>
            <label>
              CPF:
              <input
                name="CPF"
                value={value.CPF}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Telefone/Celular:
              <input
                name="phone"
                value={value.phone}
                onChange={handleChange}
              ></input>
            </label>
            <label>
              Nascimento:
              <input
                name="nascimento"
                value={value.nascimento}
                onChange={handleChange}
              ></input>
            </label>
            <button type="Submit">Cadastrar</button>
          </fieldset>
        </form>
      </>
    );
  }
}

export default DadosCadastrais;
