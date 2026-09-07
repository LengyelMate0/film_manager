import type { MovieType } from "../types/movie-types";
import axios from 'axios'; 

/* export async function getAllFilms(): Promise<MovieType[]>{
    try{
        const res = await fetch("/movie.json");
        if (!res.ok) throw new Error("Bad request.");
        return await res.json();
    } catch(error){
        console.error("Request error.")
        return[]
    }
} */

const app = axios.create({
    baseURL: "/",
    timeout: 3000,
})

export async function getAllFilms(){
    const res = await app.get("movies.json");
    return res.data;
}

