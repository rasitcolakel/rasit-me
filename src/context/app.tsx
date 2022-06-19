import { useReducer, createContext, FC, ReactNode, useCallback } from "react";
import { BlogPost } from "src/models/BlogPost";
import { reducer } from "src/reducers/app";
interface InitialState {
  activeTab: number;
  posts: BlogPost[];
}
const initialState: InitialState = {
  activeTab: 0,
  posts: [],
};

const Context = createContext({});

const combineReducers =
  (
    ...reducers: {
      (state: any, action: any): any;
    }[]
  ) =>
  (state: any, action: any) => {
    for (let i = 0; i < reducers.length; i++)
      state = reducers[i](state, action);
    return state;
  };

interface Props {
  children?: ReactNode;
}
const Provider: FC<Props> = ({ children, ...props }) => {
  const [state, dispatch] = useReducer(combineReducers(reducer), initialState); // pass more reducers combineReducers(user, blogs, products)
  const changeTab = useCallback((activeTab: number) => {
    dispatch({ type: "SET_TAB", activeTab });
  }, []);
  const value = { state, dispatch, changeTab };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
