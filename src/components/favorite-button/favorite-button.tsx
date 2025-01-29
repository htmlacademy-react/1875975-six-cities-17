import { useMemo } from 'react';
import { AuthorizationStatus, AppRoute } from '../../const';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { changeFavoriteStatusAction } from '../../store/api-actions';
import { useNavigate } from 'react-router-dom';
import { getFavoriteStatusById } from '../../store/favorites-process/selectors';

type FavoriteButtonProps = {
  id: string;
  place: string;
};

function FavoriteButton({id, place}: FavoriteButtonProps) {
  const width = place === 'offer' ? 31 : 18;
  const height = place === 'offer' ? 33 : 19;

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isAuthorized = useMemo(() => authorizationStatus === AuthorizationStatus.Auth, [authorizationStatus]);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isFavorite = useAppSelector((state) => getFavoriteStatusById(state, id));
  const handleFavoriteButtonClick = () => {
    if (isAuthorized) {
      dispatch(changeFavoriteStatusAction({id, wasFavorite: isFavorite}));
    } else {
      navigate(AppRoute.Login);
    }
  };

  return (
    <button
      className={`${place}__bookmark-button button ${isFavorite && isAuthorized ? `${place}__bookmark-button--active` : ''}`}
      type="button"
      onClick={handleFavoriteButtonClick}
    >
      <svg className={`${place}__bookmark-icon`} width={width} height={height}>
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className='visually-hidden'>{isFavorite ? 'In' : 'To'} bookmarks</span>
    </button>
  );
}

export default FavoriteButton;
