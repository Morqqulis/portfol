import Nav from "../Navigation/Navigation";

const Header: React.FC = (): JSX.Element => {
	return (
		<header
			className={
				"header min-h-[60px] relative z-50 before:absolute before:h-[1px] before:w-[120%] before:bg-[#1E2D3D] before:bottom-0 before:-left-[10%] before:-z-10 pr-[18px] sm:pr-0"
			}>
			<Nav />
		</header>
	);
};
export default Header;
