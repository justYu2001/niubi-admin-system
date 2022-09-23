import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar() {
    return (
        <div className="px-2">
            <div className="flex flex-row-reverse items-center px-2 my-6 bg-slate-200 rounded">
                <input
                    type="text"
                    className="w-full px-2 py-1 text-lg bg-transparent outline-none peer"
                />
                <BiSearchAlt2 className="text-xl text-gray-600 peer-focus:text-sky-400 transition-all duration-300" />
            </div>
        </div>
    );
}
