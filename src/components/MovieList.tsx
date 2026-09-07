import "./MovieList.css";
import type { MovieType, MovieCompType } from "../types/movie-types";
import { getAllFilms } from "../services/app";
import { useEffect, useState, useMemo, useRef } from "react";
import Movie from "./Movie";

const MovieList = () => {
    const [movies, setMovies] = useState<MovieType[]>([]);
    const [searchInput, setSearchInput] = useState("");
    const [favorites, setFavorites] = useState<string[]>([]);
    const inputRef = useRef<HTMLInputElement | null>(null);
    useEffect(() => {
        (async () => {
            setMovies(await getAllFilms());
        })();
        inputRef.current?.focus();
    }, []);

    const searchableMovies = useMemo(() => {
        if (!searchInput) return movies; // Biztonsági lépés
        return movies.filter(m => m.title.toLowerCase().includes(searchInput.toLowerCase()));
    }, [searchInput, movies])

    function addFavorite(id: number) {
        const favoriteFilm = movies.find(f => f.id === id)
        if (favoriteFilm) {
            setFavorites(prev => prev.includes(favoriteFilm?.title)
                ? prev
                : [...prev, favoriteFilm?.title])
        }

    }

    return (
        <>
            <header>
                <h1>Filmek listája</h1>
                <input type="search" name="" id="" placeholder="Film címe..."
                    ref={inputRef}
                    onChange={e => setSearchInput(e.target.value)} />
                <h3>Kedvenc filmek száma: {favorites.length} db</h3>
            </header>
            <main>
                {searchableMovies.length > 0 && searchableMovies.map((m, i) => (
                    <Movie key={i} {...m} addFavorite={addFavorite} />
                ))}
            </main>
            <footer></footer>
        </>
    )
}

export default MovieList