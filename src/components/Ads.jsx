import React from "react";

function Ads() {
	return (
		<div className="fixed grid grid-cols-1 w-52">
			<div className="card w-48 h-fit rounded-md border border-bg-color3 dark:border-bg-dark m-3 p-3">
				<figure>
					<img
						src="https://pict.sindonews.net/dyn/620/pena/news/2022/06/10/146/794657/google-ads-adalah-pengertian-keuntungan-dan-cara-lengkap-menggunakannya-fqc.jpg"
						alt=""
						className="w-full h-fit rounded-md"
					/>
				</figure>
				<div className="card-body py-2 mt-1 font-pt-sans text-black dark:text-white">Google Ads</div>
			</div>
			<div className="card w-48 h-fit rounded-md border border-bg-color3 dark:border-bg-dark m-3 p-3">
				<figure>
					<img
						src="https://i.insider.com/4f0c8843ecad042f0b000013?width=750&format=jpeg&auto=webp"
						alt=""
						className="w-full h-fit rounded-md"
					/>
				</figure>
				<div className="card-body py-2 mt-1 font-pt-sans text-black dark:text-white">Burger King</div>
			</div>
			<div className="card w-48 h-fit rounded-md border border-bg-color3 dark:border-bg-dark m-3 p-3">
				<figure>
					<img
						src="https://cdn-alkia.nitrocdn.com/pYhxgXnSfZKoVDcmKIiZcCHPcRVbhqvl/assets/static/optimized/rev-01a21f9/wp-content/uploads/2021/10/Untitled-design-800x400.png"
						alt=""
						className="w-full h-fit rounded-md"
					/>
				</figure>
				<div className="card-body py-2 mt-1 font-pt-sans text-black dark:text-white">Watch to get paid</div>
			</div>
		</div>
	);
}

export default Ads;
