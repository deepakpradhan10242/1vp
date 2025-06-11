import ServiceCard from "../components/ServiceCard";
import { posters, podcasts, videography, BundlePack } from "../utils/Constants";
import Coming from "../assets/Coming.jpg";

const ServiceSection = ({ title, services }) => (
	<div className="border-black w-full mb-16">
		<div className="relative w-full my-10">
			<h1 className="font-serif w-full text-center text-black text-2xl sm:text-4xl font-bold drop-shadow-lg">
				{title}
			</h1>
		</div>
		<div className="flex flex-col sm:flex-row flex-wrap justify-around gap-y-12 px-2">
			{services?.map((service, index) => (
				<ServiceCard
					key={index}
					title={service.title}
					description={service.description}
					features={service.features}
					notIncluded={service.notIncluded}
					Icon={service.icon}
					price={service.price}
				/>
			))}
		</div>
	</div>
);

// const BundlePackage = ({ bundlePack }) => (
//     <div className="">
//         <div className="relative w-full ">
//             <h1 className="font-serif w-full text-center text-black text-4xl sm:text-6xl font-bold drop-shadow-lg">
//                 BUNDLED PACKAGES
//             </h1>
//             <p className="font-mono text-slate-800 text-center w-full">
//                 (Best Value)
//             </p>
//         </div>
//         <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-y-12">
//             {bundlePack &&
//                 bundlePack.map((service, index) => (
//                     <ServiceCard
//                         key={index}
//                         title={service.title}
//                         description={service.description}
//                         features={service.features}
//                         Icon={service.icon}
//                         price={service.price}
//                     />
//                 ))}
//         </div>
//     </div>
// )

const Service = () => {
	return (
		<div className="w-full overflow-x-hidden">
			<div className="flex flex-col items-center px-2 sm:px-4">
				<h1 className="text-2xl sm:text-3xl font-bold my-8 w-full text-center">
					Our Marketing Services
				</h1>
				<p className="text-gray-800 mb-6 mx-3 text-lg text-wrap text-center">
					It's Your <strong>Industry's Time</strong> to Shine, with{" "}
					<strong>Industries Times</strong>! We don't just report success; we
					create it. We craft magnetic posters, viral-ready reels, engaging
					podcasts, cinematic videography, and provide razor-sharp editing to
					make your business iconic. Get all your marketing firepower in one
					place and dominate your sector.
				</p>

				{/* Bundled Package */}
				{/* <BundlePackage bundlePack={BundlePack} /> */}


				<ServiceSection title="Posters" services={posters} />
				<ServiceSection title="Podcast Shooting" services={podcasts} />
				<ServiceSection title="Videography" services={videography} />

				{/* Coming Soon Section */}
				<div className="border-black w-full mb-16">
					<div className="relative w-full my-10">
						<h1 className="font-serif w-full text-center text-black text-xl sm:text-3xl font-bold drop-shadow-lg mx-2 sm:mx-5">
							SEO Optimization, Web Designing, SEM and More ...
						</h1>
						<h3 className="font-mono w-full text-center mt-5 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-base sm:text-lg">
							Stay tuned for updates
						</h3>
					</div>
					<div className="flex justify-center px-2">
						<img
							src={Coming}
							alt="Coming soon"
							loading="lazy"
							className="w-full max-w-screen-sm flex-shrink-0"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
