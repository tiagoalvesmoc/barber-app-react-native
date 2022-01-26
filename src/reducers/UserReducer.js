export const initialState = {
  avatar: "",
  favorits: "",
  appointments: "",
};

export const UserReduce = (state, action) => {
  switch (action.type) {
    case "setAvatar":
      return { ...state, avatar: action.payload.avatar };
      break;
    default:
      return state;
  }
};
