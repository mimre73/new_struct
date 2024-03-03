import { container } from "@/core/di/inversify.config";
import { TYPES } from "@/core/di/types";
import {
  DispatchActionUseCaseParam,
  IDispatchActionUseCase,
} from "@/core/domain/usecases/store";

export class DispatchActionMixin {
  dispatchAction(params: DispatchActionUseCaseParam) {
    container
      .get<IDispatchActionUseCase>(TYPES.dispatchActionUseCase)
      .execute(params);
  }
}
