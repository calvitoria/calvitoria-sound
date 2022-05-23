import React from 'react';
import PropTypes from 'prop-types';
import { createUser } from '../services/userAPI';
// import Loading from './components/Loading';
import LoadingImg from './components/LoadingImg';
import Header from './components/Header';
import Footer from './components/Footer';

class Login extends React.Component {
  state = {
    userName: '',
    isButtonDisabled: true,
    loadingText: false,
  }

  // função para validar o botão de entrar
  validateEnterBtn = () => {
    const { userName } = this.state;
    const min = 3;
    if (userName.length >= min) {
      this.setState({ isButtonDisabled: false });
    } else {
      this.setState({ isButtonDisabled: true });
    }
  }

  // função para atualizar o estado a medida que o input muda.
  handleChange = ({ target: { value, name } }) => {
    this.setState({ [name]: value }, this.validateEnterBtn);
  }

  // função para onCLick >> chama função createUser
  handleClick = async () => {
    const { userName } = this.state;
    const { history } = this.props;
    this.setState({ loadingText: true });
    await createUser({ name: userName });
    this.setState({ loadingText: false });
    history.push('/search');
  }

  render() {
    const { isButtonDisabled, loadingText } = this.state;
    if (loadingText) {
      return <LoadingImg />;
    } return (
      <div className="loginPage" data-testid="page-login">
        <Header />
        <main>
          <form className="loginForm">
            <img alt="calvitoria Sound" src="https://user-images.githubusercontent.com/95686401/169610524-2bf5715c-c91f-4f5d-a679-42fa19a6ab03.svg" />
            <h3> Hello there! </h3>
            <label htmlFor="nameLogin">
              Would you mind telling me what's your name? <br></br>
              <input
                onChange={ this.handleChange }
                id="nameLogin"
                name="userName"
                data-testid="login-name-input"
                type="text"
                placeholder="pleeease? 🥺"
              />
            </label>
            <button
              onClick={ this.handleClick } // chama função que cria um username >> createUser({name: "Nome digitado"});
              data-testid="login-submit-button"
              type="button"
              disabled={ isButtonDisabled }
            >
              Entrar
            </button>
            <p>
              This is a project made by 
              <span className="calvitoria"> @calvitoria</span>
              {' '}
              to improve her skills using react and css. the application you're about to enter is made using itunes api. the calvitoria sound project is one of the first projects of calvitoria made using react, therefore feedbacks are much appreciated. enjoy!
            </p>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
