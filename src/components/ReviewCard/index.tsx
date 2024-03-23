import { Link } from "react-router-dom";

import './styles.css';

const ReviewCard = ( ) => {

  return (

    <div>
        <p>
          <Link to='/movies/1' >
               <h2>Acessar /movies/1</h2>
          </Link>
         </p>
         <p>
          <Link to='/movies/2' >
                <h2>Acessar /movies/2</h2>
          </Link>
         </p>

    </div>
    
  );
};

export default ReviewCard;