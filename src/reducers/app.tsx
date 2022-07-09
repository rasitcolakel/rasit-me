const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    case "SET_EDUCATIONS":
      return {
        ...state,
        educations: action.educations,
      };
    case "SET_EXPERIENCES":
      return {
        ...state,
        experiences: action.experiencess,
      };
    default:
      return state;
  }
};

export { reducer };
