import {IS_OPEN} from "../types";


export const handleToggle = isOpen => {
  return {
    type: IS_OPEN,
    payload:isOpen
  }
};