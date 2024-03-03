declare module "container/store/hooks" {
  function useStore(): {
    dispatchAction: ({
      actionId: string,
      actionName: ActionName,
      appId: string,
      data: any,
    }) => void;
  };

  export default useStore;
}

declare module "container/store/types" {
  export interface StateManagerState {
    stateManager: { [key: string]: any };
  }
}
declare module "container/enums" {
  export enum ActionName {
    setUserInfo,
    setToken,
  }
}
declare module "container/store/selectors" {
  import type { StateManagerState } from "container/store/types";
  export type RootState = {
    stateManager: StateManagerState;
  };

  export interface TypedUseSelectorHook<TState> {
    <TSelected>(selector: (state: TState) => TSelected): TSelected;
    <Selected = unknown>(selector: (state: TState) => Selected): Selected;
  }

  export const useStoreSelector: TypedUseSelectorHook<RootState>;
}

declare module "container/store/provider" {
  import React from "react";

  type Props = {
    children: React.ReactNode;
  };
  export default function StoreProvider({ children }: Props): JSX.Element;
}
