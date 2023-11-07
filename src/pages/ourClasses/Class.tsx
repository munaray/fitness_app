type Props = {
	name: string;
	description?: string;
	image: string;
};

const Class = ({ name, description, image }: Props) => {
	const overlayStyles = `p-5 absolute z-30 flex h-[380px] w-[450px] flex-col items-center justify-center whitespace-normal bg-primary-500 text-center text-white opacity-0 transition duration-500 hover:opacity-90 cursor-pointer`;
	return (
		<li className="relative inline-block h-[380px] w-[450px] mx-5">
			<figure className={overlayStyles}>
				<p className="text-2xl">{name}</p>
				<p className="mt-5">{description}</p>
			</figure>
			<img src={image} alt={`${image}`} />
		</li>
	);
};

export default Class;
