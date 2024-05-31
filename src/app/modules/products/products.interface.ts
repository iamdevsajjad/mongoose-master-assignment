export interface IVariant {
  type: string;
  value: string;
}

export interface IInventory {
  quantity: number;
  inStock: boolean;
}

export interface IProducts {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: IVariant[];
  inventory: IInventory;
}
