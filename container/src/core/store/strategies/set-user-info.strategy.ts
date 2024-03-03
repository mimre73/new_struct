import { DispatchActionUseCaseParam, IDispatchActionUseCase } from "@/core/domain/usecases/store";
import { Strategy } from "../dispatcher/strategy.interface";
import { applyMixins } from "@/core/utils/functions/apply-mixins";
import { DispatchActionMixin } from "@/core/infrastructure/mixins/store";

export interface SetUserInfoStrategy extends DispatchActionMixin {}
export class SetUserInfoStrategy implements Strategy {
    public doStrategy(params: DispatchActionUseCaseParam) {
     this.dispatchAction(params)
    }
  }

applyMixins(SetUserInfoStrategy, [DispatchActionMixin]);