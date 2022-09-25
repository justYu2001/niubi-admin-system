import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar() {
    return (
        <div className="flex-1 pl-2 pr-2.5 lg:pr-4">
            <div className="my-6 flex flex-row-reverse items-center rounded bg-slate-200 px-2">
                <input
                    type="text"
                    className="peer w-full bg-transparent px-2 py-1.5 text-lg outline-none"
                />
                <BiSearchAlt2 className="text-xl text-gray-600 transition-all duration-300 peer-focus:text-sky-400" />
            </div>
        </div>
    );
}
