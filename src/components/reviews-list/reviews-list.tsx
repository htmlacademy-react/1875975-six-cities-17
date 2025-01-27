import { MAX_REVIEWS, START_INDEX } from '../../const';
import { ReviewType } from '../../types/types';
import { sortReviews } from '../../utils/utils';
import Review from '../review/review';

type ReviewsListProps = {
  reviews: ReviewType[];
}

function ReviewsList({reviews}: ReviewsListProps) {
  const showedReviews = sortReviews(reviews).slice(START_INDEX, MAX_REVIEWS);
  return (
    <ul className="reviews__list">
      {showedReviews.map((review) => (<Review key={review.id} {...review}/>))}
    </ul>
  );
}

export default ReviewsList;
