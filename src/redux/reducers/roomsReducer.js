import {
  GET_ROOMS,
  SET_FEATURED,
  GET_ROOM,
  SORT_ROOMS,
  SET_MAX_PRICE,
  SET_MAX_SIZE
} from "../types";

const roomsState = {
  rooms: [],
  singleRoom: null,
  featuredRooms: [],
  sortedRooms: [],
  loading: true,
  type: "all",
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
        sortedRooms: payload,
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
    case SET_MAX_PRICE:
      return {
        ...state,
        maxPrice: Math.max(...state.rooms.map(item => item.price))
      };
    case SET_MAX_SIZE:
      return {
        ...state,
        maxSize: Math.max(...state.rooms.map(item => item.size))
      };
    default:
      return state;
  }
};
