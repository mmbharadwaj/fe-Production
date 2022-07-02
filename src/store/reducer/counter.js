export const countStudio = function (
  state = {},
  action
) {
  switch (action.type) {
    case "cards":
      return { ...state, cards: action.payload }
    case "editor":
      return { ...state, editor: action.payload }
    default:
      return state;
  }
};