import { RowTable } from "./RowTable";
import { LoadingSpinner } from "../../components/ui/loadingSpinner";
import type { Product } from "../../types/product";
import { CategoriesButton } from "../../components/ui/CategoriesButton";
import { useProductsByCategorie } from "../../hooks/useProductsByCategorie";
import { useCategories } from "../../hooks/useCategories";
import { CategoriesLoadingSkeleton } from "./CategoriesLoadingSkeleton";
import type { CategoryType } from "../../types/category";
import { useState } from "react";
import { CategoryModalConfig } from "./CategoryModalConfig";
import { IoMdAdd } from "react-icons/io";
import { TbTrash } from "react-icons/tb";
import { BiFoodMenu } from "react-icons/bi";
import { ConfirmationModal } from "../../components/ui/ConfirmationModal";
import { useDeleteCategoryById } from "../../hooks/useDeleteCategoryById";

export const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<{
    id: string;
    name: string;
  }>({ id: "692e75ba907d6fe940a19268", name: "Pizzas" });
  const [isCategoryConfigModalOpen, setIsCategoryConfigModalOpen] =
    useState(false);
  const [modalDeleteCategory, setModalDeleteCategory] = useState(false);

  const { data: productsData, isLoading: productsLoading } =
    useProductsByCategorie(selectedCategory.id);
  const { data: categoriesData, isLoading: categoriesLoading } =
    useCategories();
  const { mutate: deleteCategoryById, isPending: deletingCategory } =
    useDeleteCategoryById();

  const handleToggleSelectedCategory = (
    categoryId: string,
    categoryName: string
  ) => {
    setSelectedCategory({ id: categoryId, name: categoryName });
  };

  const handleDeleteCategoryById = () => {
    deleteCategoryById(selectedCategory.id);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-3">
            <BiFoodMenu size={21} />
            <h1 className="font-bold text-2xl">Cardápio</h1>
          </div>
          <p className="mt-4 text-black opacity-60">Crie um novo pedido</p>
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-3">
        <h2 className="font-bold">
          Produtos{" "}
          <span className="font-normal bg-[#ccc]/20 px-2">
            {productsData?.products?.length}
          </span>
        </h2>

        <div className="relative flex items-center gap-3">
          {categoriesData?.map((category: CategoryType, index: number) =>
            categoriesLoading ? (
              <CategoriesLoadingSkeleton key={index} />
            ) : (
              <CategoriesButton
                categoryData={category}
                isCategorySelected={category._id === selectedCategory.id}
                handleToggleSelectedCategory={handleToggleSelectedCategory}
                key={index}
              />
            )
          )}
          <div className="absolute right-0 flex gap-2">
            <IoMdAdd
              size={20}
              className="text-[#D73035] cursor-pointer"
              onClick={() => setIsCategoryConfigModalOpen(true)}
            />
            <TbTrash
              size={20}
              className="text-[#D73035] cursor-pointer"
              onClick={() => setModalDeleteCategory(true)}
            />
          </div>
        </div>
        <div className="flex items-center justify-center overflow-hidden rounded-xl border-[#ccc]/20 shadow-xs ">
          {productsLoading ? (
            <LoadingSpinner />
          ) : (
            <table className="table-auto w-full">
              <thead className="w-full bg-[#cccccc]/20 ">
                <tr className="text-sm text-[#333]">
                  <th className="p-2 text-start">Imagem</th>
                  <th className="p-2 text-start">Nome</th>
                  <th className="p-2 text-start">Categoria</th>
                  <th className="p-2 text-start">Preço</th>
                </tr>
              </thead>
              <tbody>
                {productsData.products.map(
                  (product: Product, index: number) => (
                    <RowTable
                      product={product}
                      category={selectedCategory.name}
                      key={index}
                    />
                  )
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
      {(isCategoryConfigModalOpen && (
        <CategoryModalConfig
          setModalCreateCategory={setIsCategoryConfigModalOpen}
        />
      )) ||
        (modalDeleteCategory && (
          <ConfirmationModal
            text={`Deseja realmente excluir a categoria de ${selectedCategory.name}?`}
            isLoading={deletingCategory}
            onConfirm={handleDeleteCategoryById}
            labelConfirm="Sim, deletar categoria"
            labelRefuse="Cancelar"
            setHandleOpenModal={setModalDeleteCategory}
          />
        ))}
    </>
  );
};
