import "./Favorites.css";
import { useFavorites } from "../context/FavoritesContext";

const Favorites = () => {
  const {favorites, deleteFavorite} = useFavorites();
  
  return (    
    <div className="favorites">
      <header>
        <h1>Kedvenc filmek</h1>
      </header>
      <main>
        <ul>
          {/* li-map-pelés */}
          {favorites.length > 0 && favorites.map((t,i)=>
            <li key={i}>{t}
            <a onClick={() => deleteFavorite(t)}>Törlés</a>
            </li>
          )}
        </ul>
      </main>
    </div>
  )
}

export default Favorites