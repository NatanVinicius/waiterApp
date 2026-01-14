import type { CategoryType } from "../../types/category";

interface CategoriesButtonTypes {
  categoryData: CategoryType;
  isCategorySelected: boolean;
  handleToggleSelectedCategory: (
    categoryId: string,
    categoryName: string
  ) => void;
}

export const CategoriesButton = ({
  categoryData,
  isCategorySelected,
  handleToggleSelectedCategory,
}: CategoriesButtonTypes) => {
  return (
    <>
      <button
        className={`px-4 py-2 border border-[#ccc] rounded-md  shadow-xs cursor-pointer transition text-[#333] hover:bg-[#D73035] hover:text-white ${
          isCategorySelected && "bg-[#D73035] text-white border-[#D73035]"
        }`}
        onClick={() =>
          handleToggleSelectedCategory(categoryData._id, categoryData.name)
        }
      >
        {categoryData.name}
      </button>
    </>
  );
};
