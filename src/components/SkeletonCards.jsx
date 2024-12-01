export const SkeletonCards = () => {
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 p-4">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="bg-gray-300 animate-pulse p-4 rounded-lg">
          <div className="w-full h-32 bg-gray-400 rounded-md"></div>
          <div className="mt-2 w-full h-6 bg-gray-400 rounded-md"></div>
          <div className="mt-2 w-3/4 h-4 bg-gray-400 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};
