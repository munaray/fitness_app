import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/Logo.png";
import Link from "./Link";
import { SelectedPage } from "@/components/types";
import ActionButton from "@/components/ActionButton";
import useMediaQuery from "@/hooks/useMediaQuery";
import { motion } from "framer-motion";

type Props = {
	selectedPage: SelectedPage;
	isTopPage: boolean;
	setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopPage, selectedPage, setSelectedPage }: Props) => {
	const flexBetween = "flex items-center justify-between";
	const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
	const [isToggle, setIsToggle] = useState<boolean>(false);
	const navBackground = isTopPage ? "" : "bg-primary-100 drop-shadow";
	return (
		<header>
			<nav
				className={`${navBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
				<section className={`${flexBetween} w-5/6 mx-auto `}>
					<figure className={`${flexBetween} w-full gap-16`}>
						{/* Left Side */}
						<img src={Logo} alt="logo image" />

						{/* Right Side */}
						{isAboveMediumScreens ? (
							<figure className={`${flexBetween} w-full text-sm`}>
								<div className={`${flexBetween} gap-8 text-sm`}>
									<Link
										page="Home"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>

									<Link
										page="Benefits"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>

									<Link
										page="Our Classes"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>

									<Link
										page="Contact Us"
										selectedPage={selectedPage}
										setSelectedPage={setSelectedPage}
									/>
								</div>
								<div className={`${flexBetween} gap-8`}>
									<button>Sign In</button>
									<ActionButton
										setSelectedPage={setSelectedPage}>
										Become a Member
									</ActionButton>
								</div>
							</figure>
						) : (
							<button
								className="rounded-full bg-secondary-500 p-2"
								onClick={() => setIsToggle(!isToggle)}>
								<Bars3Icon className="h-6 w-6 text-white" />
							</button>
						)}
					</figure>
				</section>
			</nav>

			{/* MOBILE MENU NODAL */}
			{!isAboveMediumScreens && isToggle && (
				<aside className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
					{/* CLOSE ICON */}
					<figure className="flex justify-end p-12">
						<button onClick={() => setIsToggle(!isToggle)}>
							<XMarkIcon className="h-6 w-6 text-gray-400" />
						</button>
					</figure>
					{/* MENU ITEMS */}
					<motion.div
						className="ml-[33%] flex flex-col gap-10 text-2xl"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ staggerChildren: 0.5, duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: 80 },
							visible: { opacity: 1, x: 0 },
						}}>
						<Link
							page="Home"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>

						<Link
							page="Benefits"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>

						<Link
							page="Our Classes"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>

						<Link
							page="Contact Us"
							selectedPage={selectedPage}
							setSelectedPage={setSelectedPage}
						/>
					</motion.div>
				</aside>
			)}
		</header>
	);
};

export default Navbar;
