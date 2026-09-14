import './Movie.css'
import type { MovieCompType } from '../types/movie-types';
import { useFavorites } from '../context/FavoritesContext';

const Movie: React.FC<MovieCompType> = ({id, title, genre, year, description, rating, addFavorite}) => {
  const {favorites} = useFavorites();

  return (
    <article>
      <h3>Film címe: {title}</h3>
      <p>{genre} * {year} </p>
      <p>Értékelés: {rating}</p>
      <p>{description}</p>
      <button type='button' id={id.toString()}
      onClick={() => addFavorite(id)}
      disabled={favorites.includes(title)}
      >Kedvenc</button>
    </article>
  )
}

export default Movie