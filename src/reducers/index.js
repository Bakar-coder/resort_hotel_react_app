import { combineReducers } from 'redux';
import movies from './moviesReducer';
import genres from './genreReducer';
const RootReducer = combineReducers({
  movies, genres
});

export default RootReducer;
