import HText from "@/components/HText";
import { SelectedPage } from "@/components/types";
import { motion } from "framer-motion";
import ContactUsPageGraphics from "@/assets/ContactUsPageGraphic.png";
import { useForm } from "react-hook-form";

type Props = {
	setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
	const inputStyles = `mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;
	const {
		register,
		trigger,
		formState: { errors },
	} = useForm();
	const handleOnSubmit = async (e: any) => {
		const invalid = await trigger();
		if (!invalid) {
			e.preventDefault();
		}
	};
	return (
		<section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
			<motion.div
				onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
				{/* HEADER */}
				<motion.article
					className="md:w-3/5"
					initial="hidden"
					whileInView={"visible"}
					viewport={{ once: true, amount: 0.5 }}
					transition={{ duration: 0.7 }}
					variants={{
						hidden: { opacity: 0, x: -70 },
						visible: { opacity: 1, x: 0 },
					}}>
					<HText>
						<span className="text-primary-500">JOIN NOW</span> TO
						GET IN SHAPE
					</HText>
					<p className="py-5">
						Lorem ipsum dolor, sit amet consectetur adipisicing
						elit. Ad assumenda voluptatibus consequuntur, soluta
						labore sed eveniet tenetur quidem totam distinctio
						libero, non cumque impedit facilis laudantium nesciunt
						earum voluptatem enim!
					</p>
				</motion.article>
				{/* ContactGraphics and Form */}
				<section className="md:flex gap-8 mt-10 justify-between">
					<motion.div
						className="mt-10 basis-3/5 md:mt-0"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7 }}
						variants={{
							hidden: { opacity: 0, y: 70 },
							visible: { opacity: 1, y: 0 },
						}}>
						<form
							target="_blank"
							onSubmit={handleOnSubmit}
							action=""
							method="POST">
							<input
								className={inputStyles}
								type="text"
								placeholder="NAME"
								{...register("name", {
									required: true,
									maxLength: 100,
								})}
							/>
							{errors.name && (
								<p className="mt-1 text-primary-500">
									{errors.name.type === "required" &&
										"This field is require"}
									{errors.name.type === "maxLength" &&
										"Max length should not exceed 100 char"}
								</p>
							)}

							<input
								className={inputStyles}
								type="text"
								placeholder="EMAIL"
								{...register("email", {
									required: true,
									pattern:
										/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								})}
							/>
							{errors.email && (
								<p className="mt-1 text-primary-500">
									{errors.email.type === "required" &&
										"This field is require"}
									{errors.email.type === "pattern" &&
										"Invalid email"}
								</p>
							)}

							<textarea
								className={inputStyles}
								placeholder="MESSAGE"
								rows={4}
								cols={50}
								{...register("message", {
									required: true,
									maxLength: 2000,
								})}
							/>
							{errors.message && (
								<p className="mt-1 text-primary-500">
									{errors.message.type === "required" &&
										"This field is required"}
									{errors.message.type === "maxLength" &&
										"The max char should not exceed 2000"}
								</p>
							)}

							<button
								className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
								type="submit">
								SUBMIT
							</button>
						</form>
					</motion.div>
					<motion.div
						className="relative basis-2/5 mt-16 md:mt-0"
						initial="hidden"
						whileInView={"visible"}
						viewport={{ once: true, amount: 0.5 }}
						transition={{ duration: 0.7, delay: 0.4 }}
						variants={{
							hidden: { opacity: 0, y: 70 },
							visible: { opacity: 1, y: 0 },
						}}>
						<figure className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1] md:before:content-evolvetext">
							<img
								className="w-full"
								src={ContactUsPageGraphics}
								alt="contact-us-page-graphic"
							/>
						</figure>
					</motion.div>
				</section>
			</motion.div>
		</section>
	);
};

export default ContactUs;
