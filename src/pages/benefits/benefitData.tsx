import {
	HomeModernIcon,
	UserGroupIcon,
	AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { BenefitType } from "../../components/types";

export const benefits: Array<BenefitType> = [
	{
		icon: <HomeModernIcon className="h-6 w-6" />,
		title: "State of the Art Facilities",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste vero cumque ex fugiat quibusdam mollitia.",
	},
	{
		icon: <UserGroupIcon className="h-6 w-6" />,
		title: "100's of Diverse Classes",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste vero cumque ex fugiat quibusdam mollitia.",
	},
	{
		icon: <AcademicCapIcon className="h-6 w-6" />,
		title: "Meet Our Expert and Pro Trainers",
		description:
			"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste vero cumque ex fugiat quibusdam mollitia.",
	},
];
