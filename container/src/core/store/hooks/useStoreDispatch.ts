import { useDispatch } from "react-redux";
import { AppDispatch } from "@/core/infrastructure/datastore/redux";

export const useStoreDispatch: () => AppDispatch = useDispatch;