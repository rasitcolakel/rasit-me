import { useReducer, createContext, FC, ReactNode, useCallback } from "react";
import { Education, Post } from "src/models";
import { reducer } from "src/reducers/app";
interface InitialState {
  posts: Post[];
  educations: Education[];
}
const initialState: InitialState = {
  posts: [],
  educations: [],
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

  const value = { state, dispatch };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export { Context, Provider };
