import { FormEvent, useCallback, useState } from "react";
import ProductsTable from "./components/Products/Products";
import ProductSearch from "./components/ProductSearch/ProductSearch";
import "./styles.css";

const mockProductData = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];

export default function App() {
  const [productName, setProductName] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleProductNameChange = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const targetElement = e.target as HTMLInputElement;
      setProductName(targetElement.value);
    },
    []
  );

  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "500px",
        margin: "0 auto"
      }}
    >
      <ProductSearch
        onProductNameChange={handleProductNameChange}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductsTable
        productName={productName}
        products={mockProductData}
        showInStockOnly={inStockOnly}
      />
    </div>
  );
}
