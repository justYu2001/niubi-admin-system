import * as React from "react";
import { BsPlusLg } from "react-icons/bs";

export default function AddUserButton() {
    return (
        <button className="flex items-center rounded bg-sky-400 p-3 text-white lg:py-2.5 lg:px-4">
            <BsPlusLg />
            <span className="hidden pl-2 lg:inline">新增使用者</span>
        </button>
    );
}
