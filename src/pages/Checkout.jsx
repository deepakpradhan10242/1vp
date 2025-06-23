import React, { useState } from "react";

const Checkout = ({ serviceName = "Poster Design", amount = 999 }) => {
	const [formData, setFormData] = useState({
		name: "",
		phone: "",
		email: "",
		relationship: "",
		companyName: "",
		companyEmail: "",
		companyAddress: "",
		companyWebsite: "",
		gstNumber: "",
	});

	const handleChange = (e) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		console.log("Submitting:", formData);
		// TODO: Call your backend to initiate EaseBuzz payment
	};

	return (
		<div className="min-h-screen  bg-gray-100 p-6 m-6">
			<h1 className="text-center font-mono font-bold text-5xl m-2">
				Checkout Page
			</h1>
			<p className="text-md font-semibold text-center mb-4">
				Complete the Basic Necessary details to complete your payement and move
				one step closer to achieve new heights with you business
			</p>
			<div className=" flex">
				<div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl font-semibold mb-4">Personal Details</h2>
					<form onSubmit={handleSubmit} className="space-y-4">
						<div>
							<label className="block text-sm font-medium">
								Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="name"
								className="w-full mt-1 p-2 border rounded"
								value={formData.name}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">
								Phone <span className="text-red-500">*</span>
							</label>
							<input
								type="tel"
								name="phone"
								className="w-full mt-1 p-2 border rounded"
								value={formData.phone}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">
								Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								name="email"
								className="w-full mt-1 p-2 border rounded"
								value={formData.email}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">
								Relationship with Company
								<span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="relationship"
								className="w-full mt-1 p-2 border rounded"
								value={formData.relationship}
								onChange={handleChange}
								required
							/>
						</div>

						<h2 className="text-xl font-semibold mt-6 mb-4">Company Details</h2>
						<div>
							<label className="block text-sm font-medium">
								Company Name <span className="text-red-500">*</span>
							</label>
							<input
								type="text"
								name="companyName"
								className="w-full mt-1 p-2 border rounded"
								value={formData.companyName}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">
								Company Email <span className="text-red-500">*</span>
							</label>
							<input
								type="email"
								name="companyEmail"
								className="w-full mt-1 p-2 border rounded"
								value={formData.companyEmail}
								onChange={handleChange}
								required
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">
								Company Address
							</label>
							<input
								type="text"
								name="companyAddress"
								className="w-full mt-1 p-2 border rounded"
								value={formData.companyAddress}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">
								Company Website
							</label>
							<input
								type="url"
								name="companyWebsite"
								className="w-full mt-1 p-2 border rounded"
								value={formData.companyWebsite}
								onChange={handleChange}
							/>
						</div>
						<div>
							<label className="block text-sm font-medium">GST Number</label>
							<input
								type="text"
								name="gstNumber"
								className="w-full mt-1 p-2 border rounded"
								value={formData.gstNumber}
								onChange={handleChange}
							/>
						</div>
					</form>
				</div>

				<div className="w-full md:w-1/3 mx-6 px-2 flex flex-col items-center">
					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center">
						<h3 className="text-2xl font-semibold mb-4">Order Summary</h3>
						<p className="text-lg mb-2">
							<strong>Service:</strong> {serviceName}
						</p>
						<p className="text-lg mb-4">
							<strong>Total Amount:</strong> ₹{amount}
						</p>
						<button
							onClick={handleSubmit}
							className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
						>
							Pay Now
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Checkout;
