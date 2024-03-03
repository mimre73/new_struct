import { User } from "../domain/entities";

// INFO (serif) : Product State Types
export interface ProductItem {
    id: number;
    title: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    brand: string;
    category: string;
    thumbnail: string;
    images: string[];
  }
  
  // INFO (serif) : Counter State Types
  
  export interface CounterState {
    value: number;
  }
  export interface StateManager {
    stateManager: { [key: string]: string };
  }