import { FC, ReactNode, useEffect } from "react";
import { Reducer } from "@reduxjs/toolkit";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager, StateSchemaKey } from "../../../store/StateSchema";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

interface DynamicModuleLoaderProps {
  reducers: ReducersList;
  children?: ReactNode;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { reducers, removeAfterUnmount = true, children } = props;
  const store = useStore() as ReduxStoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([name, reducer]) => {
      if (!store.getState()[name as StateSchemaKey]) {
        store.reducerManager.add(name as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${name} reducer` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([name]) => {
          store.reducerManager.remove(name as StateSchemaKey);
          dispatch({ type: `@DESTROY ${name} reducer` });
        });
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
