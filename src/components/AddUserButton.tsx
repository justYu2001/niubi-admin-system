import * as React from "react";
import { BsPlusLg } from "react-icons/bs";

export default function AddUserButton() {
    return (
        <button className="flex items-center rounded bg-sky-400 p-3 text-white md:py-2.5 md:px-4">
            <BsPlusLg />
            <span className="hidden pl-2 md:inline">新增使用者</span>
        </button>
    );
}
