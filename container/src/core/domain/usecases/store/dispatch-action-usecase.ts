import { ActionName } from "../../enums/ActionName";
import { IUseCase } from "../../generics";

export interface IDispatchActionUseCase
  extends IUseCase<void, DispatchActionUseCaseParam> {}
  export type DispatchActionUseCaseParam = {
    actionId: string,
    actionName: ActionName,
    appId: string,
    data: any,
  };
