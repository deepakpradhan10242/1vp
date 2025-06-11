import TickIcon from "../assets/icons8-tick.svg";
import cross from "../assets/cross.svg";

const ServiceCard = ({
  title,
  description,
  Icon,
  features,
  price,
  notIncluded,
}) => {
  return (
    <div className="flex flex-col w-full max-w-xs sm:w-80 md:w-96 mx-auto sm:mx-5 rounded-2xl p-3 mb-10 sm:mb-36">
      <div className="flex flex-col h-full bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 p-4 sm:p-6 relative group">
        {/* Icon and Title */}
        <div className="flex items-center mb-4">
          <div className="bg-indigo-100 p-2 rounded-lg mr-4 text-indigo-600">
            {Icon && <Icon className="w-6 h-6 text-blue-500" aria-hidden="true" />}
          </div>
          <h3 className="text-xl sm:text-3xl font-bold text-gray-800">{title}</h3>
        </div>

        {/* Description */}
        <p className="text-gray-600 mb-4 text-sm sm:text-base">{description}</p>

        {/* Price */}
        <div className="mb-5 pr-2">
          <span className="text-2xl sm:text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {price}
          </span>
          <span className="text-gray-500 text-base sm:text-lg ml-1">per project</span>
        </div>

        {/* Features */}
        <ul className="mb-8 space-y-2 flex-grow">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-gray-700 text-sm sm:text-base"
              title={feature}
            >
              <img
                src={TickIcon}
                alt=""
                className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}

          {notIncluded?.map((feature, index) => (
            <li
              key={index}
              className="flex items-start text-gray-500 line-through text-sm sm:text-base"
              title={`${feature} not included`}
            >
              <img
                src={cross}
                alt=""
                className="w-5 h-5 mr-2 mt-1 flex-shrink-0"
                aria-hidden="true"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <button
          className="w-full px-4 py-3 mt-auto rounded-lg bg-gray-100 text-gray-800 font-medium transition group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-purple-600 group-hover:text-white flex justify-center items-center gap-2 text-base sm:text-lg focus:outline-none"
          aria-label={`Get started with ${title}`}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default ServiceCard;
