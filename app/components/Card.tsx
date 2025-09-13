export interface CardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

export default function Card({ title, value, icon }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>
          <p className="mt-2 text-2xl font-semibold text-gray-900">{value}</p>
        </div>
        <div className="p-2 rounded-md bg-gray-50">{icon}</div>
      </div>
      <div className="mt-4">
        {/* <span
                className={`inline-flex items-center text-xs font-medium ${
                  stat.positive ? "text-green-600" : "text-red-600"
                }`}
              >
                {stat.change}
                <span className="ml-1">from previous period</span>
              </span> */}
      </div>
    </div>
  );
}
