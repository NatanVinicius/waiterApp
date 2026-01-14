import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";

type CategorySectionProps = {
  product: Product;
  category: string;
};

export const RowTable = ({ product, category }: CategorySectionProps) => {
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
        <td className="p-2 text-sm text-[#333]bg-white">{category}</td>
        <td className="p-2 text-sm text-[#333]bg-white">
          {formatCurrency(product.price)}
        </td>
      </tr>
    </>
  );
};
