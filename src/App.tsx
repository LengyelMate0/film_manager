import './App.css'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router';
import Home from './components/Home';
import MovieList from './components/MovieList';
import Favorites from './components/Favorites';
import { FavoritesProvider } from './context/FavoritesContext';
import Header from './components/Header';
import { ThemesProvider } from "./context/ThemesContext"

function App() {

  return(
    <ThemesProvider>
      <FavoritesProvider>
      
      <BrowserRouter>
      <Header/>
      <nav>
        <NavLink to="/">Főoldal</NavLink>
        <NavLink to="/movielist">Filmek</NavLink>
        <NavLink to="/favorites">Kedvencek</NavLink>
      </nav>

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/movielist' element={<MovieList/>}></Route>
      <Route path='/favorites' element={<Favorites/>}></Route>
    </Routes>

    </BrowserRouter>
    </FavoritesProvider>
    </ThemesProvider>
    
  ) 
}

export default App
