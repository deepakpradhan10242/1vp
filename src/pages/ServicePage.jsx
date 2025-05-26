import { Film, Smartphone } from "lucide-react";
import ServiceCard from "./ServiceCard";
import { posters, podcasts, videography } from "./Service";
import ComingSoon from "../assets/ComingSoon.jpg";
import Coming from "../assets/Coming.jpg";
// import { SEO, SEM, WEB } from "./Service";

const Service = () => {
	return (
		<div className="flex flex-col items-center">
			<div>
				<h1 className="text-4xl font my-8 w-full text-center">
					Our Marketing Services
				</h1>
			</div>

			<div className="w-full mb-16 border-black">
				<div className="relative w-full ">
					<h1 className="font-serif w-full text-center text-black text-6xl font-bold drop-shadow-lg">
						POSTERS
					</h1>
				</div>
				<div className="flex flex-row flex-wrap  justify-center gap-y-12">
					{posters &&
						posters?.map((service, index) => (
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

			<div className="relative w-full">
				<h1 className="font-serif w-full text-center text-black text-6xl font-bold drop-shadow-lg">
					Podcast Shooting
				</h1>
			</div>
			<div className="flex flex-row flex-wrap justify-around">
				{podcasts &&
					podcasts?.map((service, index) => (
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

			<div className="border-black">
				<div className="relative w-full my-10 ">
					<h1 className="font-serif w-full text-center text-black text-6xl font-bold drop-shadow-lg">
						VIDEOGRAPHY
					</h1>
				</div>
				<div className="flex flex-row flex-wrap justify-around">
					{videography &&
						videography?.map((service, index) => (
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

			<div className="border-black">
				<div className="relative w-full my-10">
					<h1 className="font-serif w-full text-center text-black text-5xl font-bold drop-shadow-lg mx-5">
						SEO OPTIMIZATION , WEB DESIGNING , SEM AND MORE ....
					</h1>
					<h3 className="font-mono w-full text-center mt-5 font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
						Stay tuned for updates
					</h3>
				</div>
				<div className="flex justify-center">
					<img
						src={Coming}
						className="w-160 flex-shrink-0 justify-center"
					></img>
				</div>

				{/* <div className="flex flex-row flex-wrap justify-around">
					{SEO &&
						SEO?.map((service, index) => (
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
				</div> */}
			</div>

			{/* <div className="border-black">
				<div className="relative w-full my-10 ">
					<h1 className="font-serif w-full text-center text-black text-6xl font-bold drop-shadow-lg">
						SEM
					</h1>
				</div>
				<div className="flex flex-row flex-wrap justify-around">
					{SEM &&
						SEM?.map((service, index) => (
							<ServiceCard
								key={index}
								title={service.title}
								description={service.description}
								features={service.features}
								Icon={service.icon}
								price={service.price}
							/>
						))}
				</div> 
			</div> */}

			{/* <div className="border-black">
				<div className="relative w-full my-10 ">
					<h1 className="font-serif w-full text-center text-black text-6xl font-bold drop-shadow-lg">
						WEB DESIGNING
					</h1>
				</div>
				<div className="flex flex-row flex-wrap justify-around">
					{WEB &&
						WEB?.map((service, index) => (
							<ServiceCard
								key={index}
								title={service.title}
								description={service.description}
								features={service.features}
								Icon={service.icon}
								price={service.price}
							/>
						))}
				</div>
			</div> */}
		</div>
	);
};

export default Service;
