import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader/loader';
import NotFound from '../not-found/not-found';
import Header from '../../components/header/header';
import FavoriteButton from '../../components/favorite-button/favorite-button';
import Form from '../../components/form/form';
import Map from '../../components/map/map';
import { useAppDispatch } from '../../hooks';
import { fetchNearbyOffersAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-actions';
import { getNearbyOffers, getOfferData, getOfferLoadingStatus } from '../../store/offer-process/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { getReviews } from '../../store/reviews-process/selectors';
import { AuthorizationStatus, MAX_NEARBY_OFFERS, START_INDEX } from '../../const';
import { capitalizeWord, pluralizeWord, getStarsRatingWidth, getCommonTypeOffers } from '../../utils/utils';
import Card from '../../components/card/card';
import ReviewsList from '../../components/reviews-list/reviews-list';

function Offer() {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const offer = useSelector(getOfferData);
  const isLoading = useSelector(getOfferLoadingStatus);
  const nearbyOffers = useSelector(getNearbyOffers).slice(START_INDEX, MAX_NEARBY_OFFERS);
  const reviews = useSelector(getReviews);
  const authorizationStatus = useSelector(getAuthorizationStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchOfferAction(id));
      dispatch(fetchNearbyOffersAction(id));
      dispatch(fetchReviewsAction(id));
    }
  }, [id, dispatch]);

  if (isLoading) {
    return <Loader />;
  }

  if (!offer) {
    return <NotFound />;
  }

  const commonTypeOffers = getCommonTypeOffers(offer, nearbyOffers);

  const {images, isPremium, title, rating, type, bedrooms, maxAdults, price, goods, host, description} = offer;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--offer">
        <section className="offer">
          <div className="offer__gallery-container container">
            <div className="offer__gallery">
              {images.map((image) => (
                <div className="offer__image-wrapper" key={image}>
                  <img className="offer__image" src={image} alt="Photo." />
                </div>
              ))}
            </div>
          </div>
          <div className="offer__container container">
            <div className="offer__wrapper">
              {isPremium && (<div className="offer__mark"><span>Premium</span></div>)}
              <div className="offer__name-wrapper">
                <h1 className="offer__name">
                  {title}
                </h1>
                {id && <FavoriteButton id={id} place='offer' />}
              </div>
              <div className="offer__rating rating">
                <div className="offer__stars rating__stars">
                  <span style={{width: getStarsRatingWidth(rating)}}></span>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="offer__rating-value rating__value">{rating}</span>
              </div>
              <ul className="offer__features">
                <li className="offer__feature offer__feature--entire">
                  {capitalizeWord(type)}
                </li>
                <li className="offer__feature offer__feature--bedrooms">
                  {bedrooms} {pluralizeWord('Bedroom', bedrooms)}
                </li>
                <li className="offer__feature offer__feature--adults">
                  Max {maxAdults} {pluralizeWord('adult', maxAdults)}
                </li>
              </ul>
              <div className="offer__price">
                <b className="offer__price-value">&euro;{price}</b>
                <span className="offer__price-text">&nbsp;night</span>
              </div>
              <div className="offer__inside">
                <h2 className="offer__inside-title">What&apos;s inside</h2>
                <ul className="offer__inside-list">
                  {goods.map((good) => (
                    <li className="offer__inside-item" key={good}>
                      {good}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="offer__host">
                <h2 className="offer__host-title">Meet the host</h2>
                <div className="offer__host-user user">
                  <div className={`offer__avatar-wrapper ${host.isPro ? 'offer__avatar-wrapper--pro' : ''} user__avatar-wrapper`}>
                    <img className="offer__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="offer__user-name">
                    {host.name}
                  </span>
                  <span className="offer__user-status">
                    {host.isPro && <span className="offer__user-status">Pro</span>}
                  </span>
                </div>
                <div className="offer__description">
                  <p className="offer__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="offer__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList reviews={reviews} />
                {authorizationStatus === AuthorizationStatus.Auth && <Form/>}
              </section>
            </div>
          </div>
          <Map city={offer.city} offers={commonTypeOffers} activeCardId={id ?? null} mapPlace={'offer'} />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {nearbyOffers.map((nearbyOffer) => <Card key={nearbyOffer.id} {...nearbyOffer} category="near-places"/>)}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Offer;
