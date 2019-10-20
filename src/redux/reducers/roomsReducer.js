import { GET_ROOMS, SET_FEATURED, GET_ROOM, SORT_ROOMS } from '../types';

const roomsState = {
  rooms: [],
  singleRoom: null,
  featuredRooms: [],
  sortedRooms: [],
  loading: true,
  capacity: 1,
  price: 0,
  maxPrice: 0,
  maxSize: 0,
  minSize: 0,
  breakfast: false,
  pets: false
};

export default (state = roomsState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_ROOMS:
      return {
        ...state,
        rooms: payload,
        loading: false
      };
    case GET_ROOM:
      return {
        ...state,
        singleRoom: [...state.rooms].find(room => room.slug === payload)
      };
    case SET_FEATURED:
      return {
        ...state,
        featuredRooms: [...state.rooms].filter(room => room.featured)
      };
    default:
      return state;
  }
}