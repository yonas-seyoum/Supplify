import { features } from "@/app/utils/constants/Landing";

export default function FeaturesSection() {

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Everything you need to manage your inventory
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Our comprehensive platform provides all the tools you need to
            optimize your supply chain operations.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`absolute top-0 right-0 w-24 h-24 ${feature.color} rounded-bl-full opacity-20`}
              ></div>
              <div
                className={`p-4 rounded-xl ${feature.color} inline-block mb-4`}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
