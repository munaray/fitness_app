import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/components/types";
import ActionButton from "@/components/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.png";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
	const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");
	return (
		<section
			id="home"
			className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
			{/* IMAGE AND MAIN HEADER*/}
			<motion.section
				className="md:flex items-center mx-auto w-5/6 justify-center md:h-5/6"
				onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
				{/* MAIN HEADER */}
				<div className="z-10 mt-20 md:basis-3/5">
					{/* HEADINGS */}
					<motion.article
						className="md:-mt-20"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: -70 },
							visible: { opacity: 1, x: 0 },
						}}>
						<section className="relative">
							<figure className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
								<img src={HomePageText} alt="home-page-text" />
							</figure>
						</section>
						<p className="mt-4 text-sm">
							Unrivaled Gym. Unparalleled Training Fitness
							Classes. World Class Studios to get the Body Shapes
							That you Dream of.. Get Your Dream Body Now.
						</p>
					</motion.article>
					{/* ACTIONS */}
					<motion.figure
						className="flex gap-8 mt-8 item-center"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ delay: 0.4, duration: 1 }}
						variants={{
							hidden: { opacity: 0, x: -70 },
							visible: { opacity: 1, x: 0 },
						}}>
						<ActionButton setSelectedPage={setSelectedPage}>
							Join Now
						</ActionButton>
						<AnchorLink
							className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
							onClick={() =>
								setSelectedPage(SelectedPage.ContactUs)
							}
							href={`#${SelectedPage.ContactUs}`}>
							<p>Learn More</p>
						</AnchorLink>
					</motion.figure>
				</div>
				{/* IMAGE */}
				<figure className="flex  basis-3/5 justify-center md:z-10 md:mt-16 md:ml-40 md:justify-items-end">
					<img src={HomePageGraphic} alt="home-page-graphics" />
				</figure>
			</motion.section>

			{/* SPONSORS */}
			{isAboveMediumScreen && (
				<section className="h-[150px] w-full bg-primary-100 py-10">
					<div className="mx-auto w-5/6">
						<figure className="flex justify-center w-3/5 item-center gap-8">
							<img src={SponsorRedBull} alt="redbull-sponsor" />
							<img src={SponsorForbes} alt="forbes-sponsor" />
							<img src={SponsorFortune} alt="fortune-sponsor" />
						</figure>
					</div>
				</section>
			)}
		</section>
	);
};

export default Home;
