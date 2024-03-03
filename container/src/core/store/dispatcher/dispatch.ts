import { DispatchActionUseCaseParam } from "@/core/domain/usecases/store";
import { Strategy } from "./strategy.interface";

export class Dispatch {
    private strategy: Strategy;
    constructor(strategy: Strategy) {
      this.strategy = strategy;
    }
    public setStrategy(strategy: Strategy) {
      this.strategy = strategy;
    }
    public doLogic(params: DispatchActionUseCaseParam): void {
      const result = this.strategy.doStrategy(params);
    }
  }