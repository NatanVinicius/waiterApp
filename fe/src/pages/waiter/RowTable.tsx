import { useEffect } from "react";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";

interface RowTableProps {
  product: Product;
}

export const RowTable = ({ product }: RowTableProps) => {
  useEffect(() => {
    console.log(product);
  }, [product]);

  return (
    <>
      <tr>
        <td className="p-2 text-sm text-[#333]bg-white">
          <img
            src={`http://localhost:3001/uploads/${product.imagePath}`}
            alt="category-img"
            className="w-12 h-8 rounded-md"
          />
        </td>
        <td className="p-2 text-sm text-[#333]bg-white">{product.name}</td>
        <td className="p-2 text-sm text-[#333]bg-white">{product.category}</td>
        <td className="p-2 text-sm text-[#333]bg-white">
          {formatCurrency(product.price)}
        </td>
      </tr>
    </>
  );
};
