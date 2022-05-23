import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../../services/userAPI';
import LoadingImg from './LoadingImg';

class Header extends React.Component {
state ={
  userName: '',
  loadingText: false,
}

componentDidMount() {
  this.getUserInfo();
}

// função para pegar valores da getUser e atualizar o estado
getUserInfo = async () => {
  this.setState({ loadingText: true });
  const userData = await getUser();
  this.setState({ userName: userData.name, loadingText: false });
}

render() {
  const { userName, loadingText } = this.state;
  if (loadingText) return <LoadingImg />;
  return (
    <header className="header" data-testid="header-component">
      <img alt="calvitoria Sound" src="https://user-images.githubusercontent.com/95686401/169579022-13b34346-6434-473b-ae90-95331b4681e1.svg" />
      <img className="banner" alt="calvitoria Sound" src="https://user-images.githubusercontent.com/95686401/169417615-1dfd7c94-7864-4d23-90be-843b5bee5a31.png" />
      <div className="containerRightSide">
        <section className="nameContainer" data-testid="header-user-name">
          <h3>{ `Welcome, ${userName}` }</h3>
        </section>
        <nav>
          <Link className="a" data-testid="link-to-search" to="/search">Search</Link>
          <Link className="a" data-testid="link-to-favorites" to="/favorites">
            Favorites
          </Link>
          <Link className="a" data-testid="link-to-profile" to="/profile">About</Link>
        </nav>
      </div>
    </header>
  );
}
}

export default Header;
