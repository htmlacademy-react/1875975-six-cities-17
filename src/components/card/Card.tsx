import { Link } from 'react-router-dom';
import type { OfferType } from '../../types/types';
import { STARS_COUNT, MAX_PERCENT_WIDTH } from '../../const';
import { AppRoute } from '../../const';

type CardProps = OfferType & {
  onMouseEnter?: (id: string | null) => void;
  onMouseLeave?: () => void;
  category?: 'cities' | 'favorites' | 'near-places';
}

function Card({id, title, type, price, previewImage, rating, category = 'cities', onMouseEnter = () => void 0, onMouseLeave = () => void 0}: CardProps) {
  return (
    <article className={`${category}__card place-card`} onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      <div className={`${category}__image-wrapper place-card__image-wrapper`}>
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
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
