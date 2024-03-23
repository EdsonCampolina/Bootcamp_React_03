import ReviewCard from "components/ReviewCard";

import './styles.css';

const MovieCatalog = () => {
  return (
    <div className="catalog-container">
        <h1>Tela listagem de filmes</h1>
        < ReviewCard />
    </div>
  );
};

export default MovieCatalog;