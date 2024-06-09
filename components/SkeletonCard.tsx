
const SkeletonLoader = () => {
   return (
      <div className="card relative max-w-[320px] rounded-xl shadow-lg animate-pulse">
         <div className="swiper-container">
            <div className="w-full h-[300px] bg-gray-200 rounded-xl"></div>
         </div>
         <div className="card-body px-3 py-4 gap-2">
            <div className="h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6 mb-2"></div>
            <div className="flex gap-2">
               <div className="h-10 bg-gray-200 rounded w-1/2"></div>
               <div className="h-10 bg-gray-200 rounded w-1/2"></div>
            </div>
         </div>
      </div>
   );
};

export default SkeletonLoader;
