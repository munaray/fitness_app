import { SelectedPage } from "@/components/types";
import AnchorLink from "react-anchor-link-smooth-scroll";

type Props = {
	page: string;
	selectedPage: SelectedPage;
	setSelectedPage: (value: SelectedPage) => void;
};

const Link = ({ page, selectedPage, setSelectedPage }: Props) => {
	// const [selectedPage, setSelectedPage] = useState("");
	const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage; //To remove white space
	return (
		<AnchorLink
			className={`${
				selectedPage === lowerCasePage ? "text-primary-500" : ""
			}
                transition duration-500 hover:text-primary-300
            `}
			href={`#${lowerCasePage}`}
			onClick={() => setSelectedPage(lowerCasePage)}>
			{page}
		</AnchorLink>
	);
};

export default Link;
