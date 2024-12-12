import { fetchAPI } from "../utils/api";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const selectedDate = new Date(action.payload); // Convertir la date
      return fetchAPI(selectedDate); // Appeler fetchAPI avec la date
    default:
      return state;
  }
};
