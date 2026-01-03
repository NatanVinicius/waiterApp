export const HomePageSkeleton = () => {
  return (
    <>
      <div className="w-full min-h-50 p-4 border border-black/20 rounded-md flex flex-col gap-6 bg-white">
        {/* Title skeleton */}
        <div className="relative mx-auto h-4 w-32 overflow-hidden rounded bg-gray-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>

        {/* Button skeleton */}
        <div className="relative h-24 overflow-hidden rounded bg-gray-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="w-full min-h-50 p-4 border border-black/20 rounded-md flex flex-col gap-6 bg-white">
        {/* Title skeleton */}
        <div className="relative mx-auto h-4 w-32 overflow-hidden rounded bg-gray-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>

        {/* Button skeleton */}
        <div className="relative h-24 overflow-hidden rounded bg-gray-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>
      </div>
      <div className="w-full min-h-50 p-4 border border-black/20 rounded-md flex flex-col gap-6 bg-white">
        {/* Title skeleton */}
        <div className="relative mx-auto h-4 w-32 overflow-hidden rounded bg-gray-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>

        {/* Button skeleton */}
        <div className="relative h-24 overflow-hidden rounded bg-gray-100">
          <div className="absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/60 to-transparent animate-shimmer" />
        </div>
      </div>
    </>
  );
};
