import { Dispatch, FormEvent, useState } from "react";

interface IProductSearchProps {
  onProductNameChange: (e: FormEvent<HTMLInputElement>) => void;
  onInStockOnlyChange: Dispatch<React.SetStateAction<boolean>>;
}

const ProductSearch = ({
  onProductNameChange,
  onInStockOnlyChange: onShowInStockOnlyChange
}: IProductSearchProps) => {
  return (
    <form action="#" style={{ margin: "10px 0" }}>
      <input
        type="text"
        placeholder="Search..."
        onChange={onProductNameChange}
      />
      <label
        htmlFor="showInStock"
        style={{ display: "block", marginTop: "10px" }}
      >
        <input
          type="checkbox"
          name="showInStock"
          id="showInStock"
          onChange={() =>
            onShowInStockOnlyChange((prevShowInStock) => !prevShowInStock)
          }
        />
        <span style={{ marginLeft: "10px" }}>Only show products in stock</span>
      </label>
    </form>
  );
};

export default ProductSearch;
