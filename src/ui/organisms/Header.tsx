import { Navbar } from "@/ui/organisms/Navbar";
import { Searchbar } from "../atoms/Searchbar";
import { Cart } from "../molecules/Cart";

export const Header = () => {
    return(
        <div className="flex flex-wrap h-16 items-center bg-blue-300 p-3 border-b-2 border-blue-500">
            <Navbar/>
            <Searchbar/>
            <Cart />
        </div>
    )
}
