import { Review } from "types/review";
import { ReactComponent as StarImage } from 'assets/images/star.svg';
import './styles.css';

type Props = {
  reviews: Review[]
}

const ReviewListing = ( { reviews } : Props  ) => {

    return (
      <div className="review-listing-card">
          {reviews?.map(review => (
             <>
              <div className="review-listing-star">
                <StarImage />
                <h2>{review.user.name} </h2>
              </div>
              
              <div className="reviw-listing-message">
                <p>{review.text} </p>
              </div>
              </>   
            ))}
      </div>
    );
  };
  
  export default ReviewListing;