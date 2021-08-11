import { OPEN_LEFT_MENU, CLOSE_LEFT_MENU, TOGGLE_LEFT_MENU } from "./constants";

export const openLeftMenu = () => ({ type: OPEN_LEFT_MENU });
export const closeLeftMenu = () => ({ type: CLOSE_LEFT_MENU });
export const toggleLeftMenu = () => ({ type: TOGGLE_LEFT_MENU });
