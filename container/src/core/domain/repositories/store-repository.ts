import { DispatchActionUseCaseParam } from "../usecases/store";

export interface IStoreRepository {
  set(params: DispatchActionUseCaseParam): void;
}

