import { DispatchActionUseCaseParam, IDispatchActionUseCase } from "@/core/domain/usecases/store";
import { Strategy } from "../dispatcher/strategy.interface";
import { applyMixins } from "@/core/utils/functions/apply-mixins";
import { DispatchActionMixin } from "@/core/infrastructure/mixins/store";

export interface SetTokenStrategy extends DispatchActionMixin {}
export class SetTokenStrategy implements Strategy {
    public doStrategy(params: DispatchActionUseCaseParam) {
     this.dispatchAction(params)
    }
  }

applyMixins(SetTokenStrategy, [DispatchActionMixin]);