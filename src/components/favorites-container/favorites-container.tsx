import FavoriteCardList from '../favorite-card-list/favorite-card-list';

function FavoritesContainer() {
  return (
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <FavoriteCardList />
      </section>
    </div>
  );
}

export default FavoritesContainer;
