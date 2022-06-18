interface InitialState {
  tab: number;
}
const initial: InitialState = { tab: 0 };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "SET_TAB":
      return {
        ...state,
        tab: action.tab,
      };
    default:
      return state;
  }
};

export { reducer, initial };
