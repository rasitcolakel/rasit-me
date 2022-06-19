const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TAB":
      return {
        ...state,
        activeTab: action.activeTab,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export { reducer };
