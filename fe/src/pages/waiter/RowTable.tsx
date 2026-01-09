import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/formatCurrency";

type CategorySectionProps = {
  categoryName: string;
  products: Product[];
};

export const RowTable = ({ categoryName, products }: CategorySectionProps) => {
  return (
    <>
      {products.map((product, index) => (
        <tr key={index}>
          <td className="p-2 text-sm text-[#333]bg-white">
            <img
              src={`http://localhost:3001/uploads/${product.imagePath}`}
              alt="category-img"
              className="w-12 h-8 rounded-md"
            />
          </td>
          <td className="p-2 text-sm text-[#333]bg-white">{product.name}</td>
          <td className="p-2 text-sm text-[#333]bg-white">{categoryName}</td>
          <td className="p-2 text-sm text-[#333]bg-white">
            {formatCurrency(product.price)}
          </td>
        </tr>
      ))}
    </>
  );
};
