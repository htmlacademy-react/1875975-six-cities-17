import { Link } from 'react-router-dom';
import type { OfferType } from '../../types/types';
import { AppRoute } from '../../const';
import { getStarsRatingWidth, capitalizeWord } from '../../utils/utils';
import FavoriteButton from '../favorite-button/favorite-button';

type CardProps = OfferType & {
  onMouseEnter?: (id: string | null) => void;
  onMouseLeave?: () => void;
  category?: 'cities' | 'favorites' | 'near-places';
}

function Card({id, title, type, price, previewImage, rating, isPremium, category = 'cities', onMouseEnter = () => {}, onMouseLeave = () => {}}: CardProps) {
  return (
    <article className={`${category}__card place-card`} onMouseEnter={() => onMouseEnter(id)} onMouseLeave={onMouseLeave}>
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className={`${category}__image-wrapper place-card__image-wrapper`}>
        <Link to={`${AppRoute.Offer}/${id}`}>
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <FavoriteButton id={id} place='place-card'/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: getStarsRatingWidth(rating) }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`${AppRoute.Offer}/${id}`}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeWord(type)}</p>
      </div>
    </article>
  );
}

export default Card;
