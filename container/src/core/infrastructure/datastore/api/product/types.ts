import { User } from "@/core/domain/entities";

export type ProductListResponse = {
  limit: number;
  skip: number;
  total: number;
};