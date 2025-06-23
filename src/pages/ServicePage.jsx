import ServiceCard from "../components/ServiceCard";
import { posters, podcasts, videography,BundlePack } from "../utils/Constants";
import Coming from "../assets/Coming.jpg";
import GreenTick from "../assets/icons8-tick.svg";


const ServiceSection = ({ title, services }) => (
	<section className="w-full mb-16 px-4 sm:px-6">
		<h2 className="text-center font-serif text-black text-2xl sm:text-4xl font-bold my-10 drop-shadow">
			{title}
		</h2>
		<div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-items-center">
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

// const BundlePackage = ({ bundle }) => (
// 	<section className="w-full py-12 px-4 sm:px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-white mb-16 rounded-xl shadow-inner">
// 		<div className="relative w-full mb-10">
// 			<h1 className="font-serif w-full text-center text-black text-4xl sm:text-6xl font-extrabold drop-shadow-lg tracking-tight">
// 				<span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
// 					BUNDLED PACKAGES
// 				</span>
// 			</h1>
// 			<p className="font-mono text-slate-700 text-center w-full mt-2 text-lg">
// 				<span className="inline-block px-3 py-1 bg-yellow-200 text-yellow-900 rounded-full font-semibold shadow">
// 					Best Value
// 				</span>
// 			</p>
// 		</div>

// 		<div className="flex flex-col sm:flex-row flex-wrap justify-center gap-8">
// 			{bundle &&
// 				bundle.map((service, index) => (
// 					<div
// 						key={index}
// 						className={`relative flex-1 min-w-[280px] max-w-sm bg-white rounded-2xl shadow-xl border-2 border-indigo-100 hover:border-indigo-400 transition-all duration-200 p-7 flex flex-col justify-between ${
// 							index === 1
// 								? "scale-105 border-2 border-purple-400 shadow-2xl z-10"
// 								: ""
// 						}`}
// 					>
// 						{index === 1 && (
// 							<div className="absolute top-0 left-10 transform -translate-x-1/2">
// 								<span className="px-1 py-1 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg  text-xs font-bold shadow z-20">
// 									Most Popular
// 								</span>
// 							</div>
// 						)}

// 						{/* Optional icon display */}
// 						{/* <div className="mb-3">{service.icon && <service.icon className="w-8 h-8 text-indigo-500" />}</div> */}

// 						<div>
// 							<h2 className="text-2xl font-bold text-indigo-700 mb-2 text-center">
// 								{service.title}
// 							</h2>
// 							<p className="text-gray-700 mb-4">{service.description}</p>
// 							<ul className="text-sm text-gray-800 mb-6 space-y-2 leading-relaxed">
// 								{service.features.map((feature, i) => (
// 									<li key={i} className="pl-1 flex items-start gap-2">
// 										<img
// 											src={GreenTick}
// 											alt="tick"
// 											className="w-5 h-5 mt-0.5"
// 										/>
// 										<span>{feature}</span>
// 									</li>
// 								))}
// 							</ul>
// 						</div>

// 						<div className="mt-auto flex flex-col items-center">
// 							<span className="text-xl font-extrabold text-purple-700 mb-2">
// 								{service.price}
// 							</span>
// 							<button
// 								className="mt-2 px-6 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-full shadow hover:from-indigo-600 hover:to-purple-600 transition-all duration-200"
// 								type="button"
// 							>
// 								Buy Now
// 							</button>
// 						</div>
// 					</div>
// 				))}
// 		</div>
// 	</section>
// );


const Service = () => {
  return (
		<main className="w-full overflow-x-hidden">
			<div className="flex flex-col items-center px-4 sm:px-6">
				<h1 className="text-2xl sm:text-3xl font-bold my-8 text-center">
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
        
        		{/* <BundlePackage bundle={ BundlePack} /> */}
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
