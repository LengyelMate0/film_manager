import './Movie.css'
import type { MovieCompType } from '../types/movie-types';

const Movie: React.FC<MovieCompType> = ({id, title, genre, year, description, rating, addFavorite}) => {
  return (
    <article>
      <h3>Film címe: {title}</h3>
      <p>{genre} * {year} </p>
      <p>Értékelés: {rating}</p>
      <p>{description}</p>
      <button type='button' id={id.toString()}
      onClick={() => addFavorite(id)}
      >Kedvenc</button>
    </article>
  )
}

export default Movie