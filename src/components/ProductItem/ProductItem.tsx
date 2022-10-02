import { IProduct } from "../Product.types";
interface IProductItemProps extends Omit<IProduct, "category"> {}

const ProductItem = ({ name, stocked, price }: IProductItemProps) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "100%"
      }}
    >
      <span style={{ color: !stocked ? "red" : "inherit" }}>{name}</span>
      <span>{price}</span>
    </li>
  );
};

export default ProductItem;
