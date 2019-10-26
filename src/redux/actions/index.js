import Data from '../../data';
import {
  GET_ROOMS,
  SET_FEATURED,
  GET_ROOM,
  SET_MAX_PRICE,
  SET_MIN_PRICE,
  SET_MAX_SIZE,
  SORT_ROOMS
} from '../types';

const formatData = items => items.map(item => {
  const id = item.sys.id;
  const images = item.fields.images.map(image => image.fields.file.url);
  return  {...item.fields, images, id}
});

export const getRooms = () => ({
  type: GET_ROOMS, payload: formatData(Data)
});

export  const setFeatured = () => ({
  type: SET_FEATURED
});

export  const getRoom = slug => ({
    type: GET_ROOM,
    payload: slug
  });


export  const setMaxPrice = () => {
  return {
    type: SET_MAX_PRICE
  }
};


export  const setMaxSize = () => {
  return {
    type: SET_MAX_SIZE
  }
};

export  const setMinPrice = () => ({
  type: SET_MIN_PRICE
});


