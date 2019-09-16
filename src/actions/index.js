import {IS_OPEN} from "../types";


export const handleToggle = isOpen => ({
  type: IS_OPEN,
  payload:isOpen
});