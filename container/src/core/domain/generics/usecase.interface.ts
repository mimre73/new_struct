export interface IUseCase<T, Param> {
  execute(param: Param): T;
}
