import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'pages/Home/Login';

import './styles.css';

const Home = () => {
  return (

    <div className="home-container">
          <div className="home-info">
              <h1>Avalie Filmes</h1>
              <p>
                  Diga o que você achou do seu  
                  filme favorito
               </p>
               <MainImage className="main-image" />
          </div>

          <div className="home-login">
              <Login />
          </div>
    </div>

  );
};

export default Home;