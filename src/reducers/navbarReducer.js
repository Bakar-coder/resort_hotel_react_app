import { IS_OPEN } from '../types';

const navState = {
  isOpen: false
};

export default (state= navState, action) => {
  const { type, payload } = action;
  switch (type) {
    case IS_OPEN:
      return {
        ...state,
        isOpen: payload
      };
    default:
      return state;
  }
}
