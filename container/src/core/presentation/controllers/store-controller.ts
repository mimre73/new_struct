import { applyMixins } from "@/core/utils/functions/apply-mixins";
import { DispatchActionMixin } from "@/core/infrastructure/mixins/store";


export default class StoreController extends DispatchActionMixin {}
applyMixins(StoreController, [DispatchActionMixin]);
