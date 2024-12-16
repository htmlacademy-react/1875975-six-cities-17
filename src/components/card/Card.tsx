import type { OfferType } from '../../types/types';
import { STARS_COUNT, MAX_PERCENT_WIDTH } from '../../const';

type CardProps = OfferType & {
  onMouseEnter: (id: string | null) => void;
  onMouseLeave: () => void;
}

function Card({id, title, type, price, previewImage, rating, onMouseEnter, onMouseLeave}: CardProps) {
  return (
    <article className="cities__card place-card" onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${Math.round(rating) * MAX_PERCENT_WIDTH / STARS_COUNT}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href='#'>{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
