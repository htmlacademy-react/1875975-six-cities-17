import {ChangeEvent ,Fragment, useState } from 'react';

import { RATING_VALUE } from '../../const';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../hooks';
import { getOfferData } from '../../store/offer-process/selectors';
import { postCommentAction } from '../../store/api-actions';
import { Comment } from '../../types/types';

// ДОРАБОТАТЬ ВАЛИДАЦИЮ И БЛОКИРОВКУ!!!

function Form() {
  const [formData, setFormData] = useState<Comment>({
    rating: 0,
    comment: '',
  });
  const offer = useSelector(getOfferData);
  const dispatch = useAppDispatch();

  const handleValueChange = (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>):void => {
    const {value} = evt.target;
    setFormData(evt.target.name === 'review' ? {...formData, comment: value} : {...formData, rating: +value});
  };

  const handleFormSubmit = (evt: ChangeEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if(offer) {
      dispatch(postCommentAction({
        id: offer.id,
        comment: formData,
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            setFormData({
              rating: 0,
              comment: '',
            });
          }
        });
    }
  };

  return (
    <form className="reviews__form form" action="#" method="post" onSubmit={handleFormSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(RATING_VALUE).map(([value, title]) => (
          <Fragment key={value}>
            <input
              className="form__rating-input visually-hidden"
              name="rating"
              value={value}
              id={`${value}-stars`}
              type="radio"
              onChange={handleValueChange}
              checked = {formData.rating === +value}
            />
            <label
              htmlFor={`${value}-stars`}
              className="reviews__rating-label form__rating-label"
              title={title}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        )).reverse()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={formData.comment}
        onChange={handleValueChange}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
        To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit">Submit</button>
      </div>
    </form>
  );
}

export default Form;
