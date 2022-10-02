import { IProduct } from "../Product.types";
import ProductItem from "../ProductItem/ProductItem";
import { IProductsProps } from "./Products.types";
// const PRODUCT_FILTER_KEY = "category";

const ProductsTable = ({
  products: productData,
  showInStockOnly,
  productName
}: IProductsProps) => {
  const rows: Array<JSX.Element> = [];
  let lastCategory: string | null = null;

  // const instockProducts =
  //   showInStockOnly &&
  //   productData.filter((product) => {
  //     if (product.stocked) {
  //       return { ...product };
  //     }
  //   });
  // const productDataByName = (instockProducts || productData).filter(
  //   (product) =>
  //     product.name.toLowerCase().indexOf(productName.toLowerCase()) !== -1
  // );
  // const normalizedProductData = _.groupBy(
  //   productDataByName,
  //   PRODUCT_FILTER_KEY
  // );

  productData.forEach((product: IProduct) => {
    if (product.name.toLowerCase().indexOf(productName.toLowerCase()) === -1)
      return;

    if (showInStockOnly && !product.stocked) return;

    if (product.category !== lastCategory) {
      rows.push(<ProductTableHead category={product.category} />);
    }

    rows.push(<ProductItem {...product} />);

    lastCategory = product.category;
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <div style={{ display: "flex" }}>
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <div style={{ margin: "10px 0", textAlign: "center" }}>{rows}</div>
    </div>
  );
};

const ProductTableHead = ({ category }: { category: string }) => (
  <h3>{category}</h3>
);

export default ProductsTable;
