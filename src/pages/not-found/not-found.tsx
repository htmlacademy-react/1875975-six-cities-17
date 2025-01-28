import styles from './not-found.module.css';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound() {
  return (
    <section>
      <div className={styles.notfound__container}>
        <img className={styles.notfound__img} src="img/cat.svg" alt="Cat." width="861" height="770" />
        <Link to={AppRoute.Index} className={styles.notfound__link}>Go to main page</Link>
      </div>
    </section>
  );
}

export default NotFound;
