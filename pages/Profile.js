import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

class Profile extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div className="aboutMePage" data-testid="page-profile">
          <div className="pic">
            <img
              alt="profile picture"
              src="https://media0.giphy.com/media/4F6LJLckMdrUUR9pBn/giphy.gif?cid=790b7611b9d55763105d85d14204af53815fca71509d4a18&rid=giphy.gif&ct=g"
            />
          </div>
          <div className="aboutText">
            <h3>Hello there!</h3>
            <h2>My name is Vitória Calvi Meinerz</h2>
            <p>I'm a software development student at Trybe, based in Porto Alegre, Brazil. What motivates me towards web development is the opportunity to change the way people interact with technology in a daily basis, improving their experience by a well developed and designed product. </p>
            <h4> About this project </h4>
            <p>This is a special project for me. I had the chance to combine React, css and requested to APIs. 
              I love music and pop culture in general, so I had a great lot of fun making this fictitional music application.
              If you liked it, please consider to follow me on GitHub and linkedIn.
              </p>
          <div className="icons">
            <a href="https://www.instagram.com/calvitoria.art/">< img alt="instagram icon" src="https://user-images.githubusercontent.com/95686401/169665091-e30ea703-46e9-4264-9c5d-7a31ba7d1324.png" /></a>
            <a href="https://www.linkedin.com/in/calvitoria/">< img alt="linkedIn icon" src="https://user-images.githubusercontent.com/95686401/169665094-ac7207a3-a04f-4220-9af2-9dad172d900e.png" /></a>
            <a href="https://github.com/calvitoria">< img alt="github icon" src="https://user-images.githubusercontent.com/95686401/169665096-5055d5e5-6a7c-4666-9c2c-5cab16279b13.png" /></a>
          </div>

          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Profile;
