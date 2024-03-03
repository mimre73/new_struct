import { inject, injectable } from "inversify";
import "reflect-metadata";
import { TYPES } from "@/core/di/types";
import type { IStoreRepository } from "@/core/domain/repositories";

import { DispatchActionUseCaseParam, IDispatchActionUseCase } from "@/core/domain/usecases/store";

@injectable()
export class DispatchActionUseCaseImpl implements IDispatchActionUseCase {
  private readonly repository: IStoreRepository;

  constructor(@inject(TYPES.storeRepository) repository: IStoreRepository) {
    this.repository = repository;
  }

  execute(
    param: DispatchActionUseCaseParam
  ) {
    this.repository.set(param);
  }
}
