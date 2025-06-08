import { Facebook, Instagram, Linkedin, Mail } from "lucide-react";
import logo from "../assets/logo/logo.png"; // Ensure correct path

const Footer = () => {
	return (
		<footer className="bg-gray-900 text-white py-10 px-4 sm:px-8 mt-10 w-full">
			<div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
				{/* Branding */}
				<div className="text-center sm:text-left">
					<h2 className="text-xl font-semibold">Industries Times</h2>
					<p className="text-sm text-gray-400">Marketing made simple & effective.</p>
				</div>


				{/* Social Media */}
				<div className="flex gap-4">
					<a href="mailto:contact@industries-times.com" className="hover:text-indigo-400" aria-label="Email">
						<Mail size={30} />
					</a>
					<a
						href="https://www.instagram.com/industries_times_official?igsh=c2hyeHhjZW1ncXUz"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-indigo-400"
						aria-label="Instagram"
					>
						<Instagram size={30} />
					</a>
					<a
						href="https://www.linkedin.com/company/industries-times/"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-indigo-400"
						aria-label="LinkedIn"
					>
						<Linkedin size={30} />
					</a>
					<a
						href="https://facebook.com"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-indigo-400"
						aria-label="Facebook"
					>
						<Facebook size={30} />
					</a>
				</div>
			</div>

			{/* Footer Bottom */}
			<div className="mt-8 text-center text-xs text-white">
				&copy; {new Date().getFullYear()} Industries Times. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
