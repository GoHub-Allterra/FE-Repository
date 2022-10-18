import React from "react";
import "styles/index.css";
import CardsRegister from "./CardsRegister";

function CardsLogIn() {
	return (
		<div className="fixed card w-52">
			<div className="card-body items-center text-center">
				<h1 className="card-title text-3xl text-black dark:text-white py-4 font-pt-sans">Login</h1>
				<input
					type="text"
					id="username"
					placeholder="username"
					className="w-3/4 rounded-md bg-bg-color3 dark:bg-black border-none dark:border-bg-dark my-3 px-1 mx-1 font-pt-sans"
				/>
				<input
					type="password"
					id="password"
					placeholder="password"
					className="w-3/4 rounded-md bg-bg-color3 dark:bg-black border-none dark:border-bg-dark mt-2 mb-4 px-1 mx-1 font-pt-sans"
				/>
				<div className="card-actions">
					<button className="bg-bg-color2 dark:bg-bg-dark rounded-md w-3/4 my-2 text-sm text-white font-pt-sans btn btn-xs capitalize font-normal">Masuk</button>
					<hr className=" w-full border border-1 border-solid border-bg-color3 dark:border-bg-dark dark:bg-bg-dark bg-bg-color3" />
					<CardsRegister/>
				</div>
			</div>
		</div>
	);
}

export default CardsLogIn;
