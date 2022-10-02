import { IProduct } from "../Product.types";

export interface IProductsProps {
  products: IProduct[];
  showInStockOnly: boolean;
  productName: string;
}

export interface IProductTableProps {
  title: string;
  products: IProduct[];
}
