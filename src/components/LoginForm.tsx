import * as React from "react";

export default function LoginForm() {
    return (
        <form method="post" className="w-1/5 min-w-[300px] mx-auto">
            <Input id="email" filedName="電子郵件地址" />
            <Input id="password" filedName="密碼" />
            <button
                type="submit"
                className="w-full bg-sky-400 text-white font-medium py-2 rounded my-4 tracking-wide"
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
        <div className="flex flex-col-reverse my-2">
            <input
                id={id}
                type="text"
                className="peer w-full px-3 py-2 focus:border-sky-400 transition-all duration-300 text-lg border-2 border-gray-300 rounded outline-none"
            />
            <label
                htmlFor={id}
                className="my-1 peer-focus:text-sky-400 text-gray-400 tracking-wide transition-all duration-300"
            >
                {filedName}
            </label>
        </div>
    );
};
