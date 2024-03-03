import { ProductListResponse } from "./types";

export const getProductList = async (): Promise<ProductListResponse> => {
  const response = await fetch("");
  const data = await response.json();
  return data;
};