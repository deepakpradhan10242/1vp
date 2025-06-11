import ServiceCard from "../components/ServiceCard";
import { posters, podcasts, videography } from "../utils/Constants";
import Coming from "../assets/Coming.jpg";

const ServiceSection = ({ title, services }) => (
  <section className="w-full mb-16 px-4 sm:px-6">
    <h2 className="text-center font-serif text-black text-2xl sm:text-4xl font-bold my-10 drop-shadow">
      {title}
    </h2>
    <div className="flex flex-col sm:flex-row flex-wrap justify-around gap-y-12 gap-x-6">
      {services?.map((service, index) => (
        <ServiceCard
          key={service.id || index}
          title={service.title}
          description={service.description}
          features={service.features}
          notIncluded={service.notIncluded}
          Icon={service.icon}
          price={service.price}
        />
      ))}
    </div>
  </section>
);

const Service = () => {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="flex flex-col items-center px-4 sm:px-6">
        <h1 className="text-2xl sm:text-3xl font-bold my-8 text-center">
          Our Marketing Services
        </h1>

        <ServiceSection title="Posters" services={posters} />
        <ServiceSection title="Podcast Shooting" services={podcasts} />
        <ServiceSection title="Videography" services={videography} />

        {/* Coming Soon Section */}
        <section className="w-full mb-20 px-4 sm:px-6">
          <h2 className="font-serif text-xl sm:text-3xl font-bold text-center text-black my-10 drop-shadow">
            SEO Optimization, Web Designing, SEM and More ...
          </h2>
          <p className="text-center font-mono text-base sm:text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
            Stay tuned for updates
          </p>
          <div className="flex justify-center">
            <img
              src={Coming}
              alt="Coming soon"
              loading="lazy"
              className="w-full max-w-screen-sm h-auto object-contain"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default Service;
