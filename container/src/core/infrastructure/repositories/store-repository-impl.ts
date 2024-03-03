import "reflect-metadata";
import { IStoreRepository } from "@/core/domain/repositories";
import { injectable } from "inversify";
import {store} from "../datastore/redux"
import { set } from "../datastore/redux/features/stateManagerSlice";
import { DispatchActionUseCaseParam } from "@/core/domain/usecases/store";

@injectable()
export class StoreRepositoryImpl implements IStoreRepository {
  set(params:DispatchActionUseCaseParam): void {
    // const temp = {...params,data:params.data + 200}
    store.dispatch(set(params))
  }
}