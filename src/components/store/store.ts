import { CombinedState, configureStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";

import { StateSchema, ThunkExtraArg } from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import { $api } from "../../shared/api/api";
import { bookReducer } from "./slices/bookSlice/bookSlice";
import { useDispatch } from "react-redux";

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    book: bookReducer,
  };

  const reducerManager = createReducerManager(rootReducers);

  const extraArg: ThunkExtraArg = { api: $api };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: true,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
        serializableCheck: false,
      }),
  });

  // As we connect reducerManager for async reducers, we have to ignore the type error (based on the tutorial by Ulbi TV)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  store.reducerManager = reducerManager;

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"];

export const useAppDispatch = () => useDispatch<AppDispatch>();
