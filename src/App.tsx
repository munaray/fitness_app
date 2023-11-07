import { useEffect, useState } from "react";
import { SelectedPage } from "@/components/types";
import Navbar from "@/components/navbar";
import Home from "@/pages/home";
import Benefits from "@/pages/benefits";
import OurClasses from "@/pages/ourClasses";
import ContactUs from "./pages/contactUs";

const App = () => {
	const [selectedPage, setSelectedPage] = useState<SelectedPage>(
		SelectedPage.Home
	);
	const [isTopPage, setIsTopPage] = useState<boolean>(true);
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY === 0) {
				setIsTopPage(true);
				setSelectedPage(SelectedPage.Home);
			} else {
				setIsTopPage(false);
			}
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return (
		<div className="app bg-gray-20">
			<Navbar
				isTopPage={isTopPage}
				selectedPage={selectedPage}
				setSelectedPage={setSelectedPage}
			/>
			<Home setSelectedPage={setSelectedPage} />
			<Benefits setSelectedPage={setSelectedPage} />
			<OurClasses setSelectedPage={setSelectedPage} />
			<ContactUs setSelectedPage={setSelectedPage} />
		</div>
	);
};

export default App;
