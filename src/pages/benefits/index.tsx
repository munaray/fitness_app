import HText from "@/components/HText";
import { BenefitType, SelectedPage } from "@/components/types";
import { motion } from "framer-motion";
import { benefits } from "./benefitData";
import Benefit from "./Benefit";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from "@/components/ActionButton";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
	return (
		<section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
			<motion.div
			// onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
			>
				<motion.article
					className="md:my-5 md:w-3/5"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					transition={{ delay: 0.4, duration: 0.7 }}
					variants={{
						hidden: { opacity: 0, x: -70 },
						visible: { opacity: 1, x: 0 },
					}}>
					<HText>MORE THAN JUST A GYM</HText>
					<p className="my-5 text-sm">
						We provide world class fitness equipment, trainers and
						classes to get you to your ultimate fitness goals with
						ease. We provide true care into each and every member.
					</p>
				</motion.article>
				{/* BENEFITS */}
				<motion.section
					className="md:flex items-center justify-between mt-5 gap-8"
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.5 }}
					variants={{
						hidden: {},
						visible: {
							transition: { staggerChildren: 0.5 },
						},
					}}>
					{benefits.map((benefit: BenefitType) => (
						<Benefit
							key={benefit.title}
							icon={benefit.icon}
							title={benefit.title}
							description={benefit.description}
							setSelectedPage={setSelectedPage}
						/>
					))}
				</motion.section>

				{/* GRAPHICS AND DESCRIPTION  */}
				<section className="mt-16 md:mt-28 md:flex justify-between items-center gap-20">
					{/* GRAPHICS */}
					<img
						className="mx-auto"
						alt="benefits-page-graphics"
						src={BenefitsPageGraphic}
					/>

					{/* DESCRIPTION */}
					<section>
						{/* TITLE */}
						<figure className="relative">
							<figure className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
								<motion.div
									initial="hidden"
									whileInView={"visible"}
									viewport={{ once: true, amount: 0.5 }}
									transition={{ duration: 0.7 }}
									variants={{
										hidden: { opacity: 0, x: 50 },
										visible: { opacity: 1, x: 0 },
									}}>
									<HText>
										MILLIONS OF HAPPY MEMBERS GETTING{" "}
										<span className="text-primary-500">
											FIT
										</span>
									</HText>
								</motion.div>
							</figure>
						</figure>
						{/* TITLE DESCRIPTION */}
						<motion.figure
							initial="hidden"
							whileInView={"visible"}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: 0.2, duration: 0.7 }}
							variants={{
								hidden: { opacity: 0, x: 50 },
								visible: { opacity: 1, x: 0 },
							}}>
							<p className="my-5">
								Lorem ipsum dolor sit amet consectetur,
								adipisicing elit. Dolorum officia, eius
								excepturi, cum illo facilis voluptatum
								recusandae, corporis explicabo ullam
								reprehenderit aspernatur quae culpa enim
								consequatur praesentium fugit quos dolores.
							</p>
							<p className="mb-5">
								Lorem, ipsum dolor sit amet consectetur
								adipisicing elit. Dolor architecto perspiciatis
								excepturi eveniet. Illum ipsum amet vitae
								facilis voluptate ducimus temporibus, nulla
								placeat possimus, recusandae beatae maxime
								omnis? Similique, totam!
							</p>
						</motion.figure>

						{/* BUTTON */}
						<figure className="relative mt-16">
							<div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
								<ActionButton setSelectedPage={setSelectedPage}>
									Join Now
								</ActionButton>
							</div>
						</figure>
					</section>
				</section>
			</motion.div>
		</section>
	);
};

export default Benefits;
