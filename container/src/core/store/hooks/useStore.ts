import { ActionName } from "../../domain/enums/ActionName";
import { DispatchActionUseCaseParam, IDispatchActionUseCase } from "@/core/domain/usecases/store";
import { ActionDispatcher } from "@/core/store/dispatcher/action-dispatcher";

export default function useStore() {
  const dispatcher = new ActionDispatcher();
  const dispatchAction = (appEvent: DispatchActionUseCaseParam) => {
    dispatcher.dispatch(appEvent);
  };

  return {
    dispatchAction,
    ActionName,
  };
}