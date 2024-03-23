import './styles.css';
import 'bootstrap/js/src/collapse.js';

import { Link } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import history from 'util/history';
import { AuthContext } from 'AuthContext';
import { removeAuthData } from 'util/storage';
import { getTokenData, isAuthenticated } from 'util/auth';

const Navbar = () => {

  const { authContextData, setAuthContextData} = useContext(AuthContext);

  
  useEffect(() => {

    if ( isAuthenticated())
    {
      setAuthContextData({
        authenticated: true,
        tokenData: getTokenData()
      });
    } 
    else
    {
      setAuthContextData({authenticated: false})
    } 
  }, [setAuthContextData])


  const handleLogoutClick = ( event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    removeAuthData();
    setAuthContextData({authenticated: false});
    history.replace('/')
  }

  return (
    <nav className="navbar navbar-expand-mb bg-warning main-nav" >
      <div className="nav-container" >
        <Link to="/" className="nav-logo-text">
          <h2>MovieFlix</h2>
        </Link>
        
        <div>

          { authContextData.authenticated ? (
            <>
              <a 
                 href='#logout' 
                 className="btn btn-outline-dark nav-btn-sair"
                 onClick={handleLogoutClick} >
                SAIR
              </a>
            </>
            ): (
              <></>
            )
          }

        </div>
      </div>
    </nav>
  );
};

export default Navbar;