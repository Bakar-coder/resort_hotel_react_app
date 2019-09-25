import { getMovies } from '../services/fakeMovieService';
import { getGenres } from '../services/fakeGenreService';

export const movies = getMovies();
export const genres = getGenres();
