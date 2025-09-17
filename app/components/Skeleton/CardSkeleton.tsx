export default function CardSkeleton() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-start ">
        <div>
          <p className="skeleton text-sm font-medium text-gray-500 w-18 h-3.5" />
          <p className="skeleton mt-2 text-2xl font-semibold text-gray-900 animate-pulse h-6 w-6" />
        </div>
        <div className="skeleton w-8 h-8 p-2 rounded-md bg-gray-50" />
      </div>
      <div className="mt-4">
        <div className="h-3 w-40 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
}
