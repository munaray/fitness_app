import { SelectedPage } from "@/components/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	icon: JSX.Element;
	title: string;
	description: string;
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefit = ({ icon, title, description, setSelectedPage }: Props) => {
	return (
		<motion.section
			className="rounded-md mt-6 border-2 border-gray-100 px-5 py-16 text-center"
			variants={{
				hidden: { opacity: 0, scale: 0.9 },
				visible: { opacity: 1, scale: 1 },
			}}>
			<div className="mb-4 flex justify-center">
				<figure className="rounded-full p-4 bg-primary-100 border-gray-100 border-2">
					{icon}
				</figure>
			</div>
			<h4 className="font-bold">{title}</h4>
			<p className="my-3">{description}</p>
			<AnchorLink
				className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
				onClick={() => setSelectedPage(SelectedPage.ContactUs)}
				href={`#${SelectedPage.ContactUs}`}>
				<p>Learn More</p>
			</AnchorLink>
		</motion.section>
	);
};

export default Benefit;
