import { ActionName } from "@/core/domain/enums";
import { DispatchActionUseCaseParam } from "@/core/domain/usecases/store";
import { Dispatch } from "./dispatch";
import { SetTokenStrategy } from "../strategies/set-token.strategy";
import { SetUserInfoStrategy } from "../strategies/set-user-info.strategy";


export class ActionDispatcher {
    public dispatch(params: DispatchActionUseCaseParam) {
      switch (params.actionName) {
        case ActionName.setToken: {
          const dispatch = new Dispatch(new SetTokenStrategy());
          dispatch.doLogic(params);
        }
        case ActionName.setUserInfo:{
          const dispatch = new Dispatch(new SetUserInfoStrategy());
          dispatch.doLogic(params);
        }
      }
    }
  }