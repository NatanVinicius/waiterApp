export const CategoriesLoadingSkeleton = () => {
  return (
    <>
      <div className="relative w-23 h-10 overflow-hidden rounded bg-gray-100">
        <div className="absolute px-4 py-2 rounded-md  shadow-xs inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
      </div>
    </>
  );
};
