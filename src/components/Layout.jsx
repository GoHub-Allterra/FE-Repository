import React from "react";
import Navbar from "./Navbar";

// import { ThemeContext } from "utils/context";
// import { WithRouter } from "utils/Navigation";

const Layout = ({ children }) => {
	// const { isLight, setIsLight } = useContext(ThemeContext);

	return (
		<div>
			<Navbar />
			<div className="w-full h-max dark:bg-bg-dark2 bg-bg-color">{children}</div>
		</div>
	);
};

export default Layout;
