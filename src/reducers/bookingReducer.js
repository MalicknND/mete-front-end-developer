export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // Pour l'instant, retourne les mêmes horaires peu importe la date
      return state;
    default:
      return state;
  }
};
