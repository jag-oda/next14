import { Menu } from "lucide-react";
import { MouseEventHandler } from "react";

type HamburgerMenuProps = {
    toggleFnc: MouseEventHandler
};

export const HamburgerManu = (props: HamburgerMenuProps) => {
    const { toggleFnc } = props;
    return (
        <button
					onClick={toggleFnc}
					className=" ml-auto inline-flex rounded p-3 text-white outline-none hover:bg-blue-600 hover:text-white lg:hidden"
				>
					<Menu />
				</button>
    );
}