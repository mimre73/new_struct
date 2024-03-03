import { Container } from "inversify";
import { TYPES } from "./types";
import { IStoreRepository } from "@/core/domain/repositories";

import { StoreRepositoryImpl } from "@/core/infrastructure/repositories";

import { IDispatchActionUseCase } from "../domain/usecases/store";
import { DispatchActionUseCaseImpl } from "../application/usecases/store/dispatch-action-usecase-impl";

export const container = new Container();

// repository
container.bind<IStoreRepository>(TYPES.storeRepository).to(StoreRepositoryImpl);
    // store
    container
    .bind<IDispatchActionUseCase>(TYPES.dispatchActionUseCase)
    .to(DispatchActionUseCaseImpl);

