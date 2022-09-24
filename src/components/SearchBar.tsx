import { BiSearchAlt2 } from "react-icons/bi";

export default function SearchBar() {
    return (
        <div className="px-2">
            <div className="my-6 flex flex-row-reverse items-center rounded bg-slate-200 px-2">
                <input
                    type="text"
                    className="peer w-full bg-transparent px-2 py-1 text-lg outline-none"
                />
                <BiSearchAlt2 className="text-xl text-gray-600 transition-all duration-300 peer-focus:text-sky-400" />
            </div>
        </div>
    );
}
