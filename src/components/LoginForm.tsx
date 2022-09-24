import * as React from "react";

export default function LoginForm() {
    return (
        <form method="post" className="mx-auto w-1/5 min-w-[300px]">
            <Input id="email" filedName="電子郵件地址" />
            <Input id="password" filedName="密碼" />
            <button
                type="submit"
                className="my-4 w-full rounded bg-sky-400 py-2 font-medium tracking-wide text-white"
            >
                登入
            </button>
        </form>
    );
}

interface InputProps {
    id: string;
    filedName: string;
}

const Input = ({ id, filedName }: InputProps) => {
    return (
        <div className="my-2 flex flex-col-reverse">
            <input
                id={id}
                type="text"
                className="peer w-full rounded border-2 border-gray-300 px-3 py-2 text-lg outline-none transition-all duration-300 focus:border-sky-400"
            />
            <label
                htmlFor={id}
                className="my-1 tracking-wide text-gray-400 transition-all duration-300 peer-focus:text-sky-400"
            >
                {filedName}
            </label>
        </div>
    );
};
