import { DispatchActionUseCaseParam } from "@/core/domain/usecases/store";

export interface Strategy {
    doStrategy(params: DispatchActionUseCaseParam): void;
  }