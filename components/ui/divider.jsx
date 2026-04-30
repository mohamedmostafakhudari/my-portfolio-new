import clsx from "clsx";

const Divider = ({ className }) => {
	return <hr className={clsx("bg-border h-1", className)} />;
};

export default Divider;
