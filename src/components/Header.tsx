import { useFavorites } from '../context/FavoritesContext'
import './Header.css'
import { useThemes } from '../context/ThemesContext';

const Header = () => {
    const {favorites} = useFavorites();
    const {theme, changeTheme} = useThemes(); 
  
    return (
    <div className='header'>
        <h1>Film-kezelő alkalmazás</h1>
        <button type='button'
        onClick={changeTheme}
        >{theme === "light" ? "🌙" : "☀️"}</button>
        <h3>Kedvencek száma: {favorites.length} db</h3>
    </div>
  )
}

export default Header