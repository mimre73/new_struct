import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/core/infrastructure/datastore/redux";

export const useStoreSelector: TypedUseSelectorHook<RootState> = useSelector;