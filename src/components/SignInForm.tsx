import { FormEvent } from "react";
import { useRouter } from "next/router";
import { signIn, SignInResponse } from "next-auth/react";
import { useMutation, type UseMutateFunction } from "@tanstack/react-query";

import encrypt from "@/utils/encrypt";

interface SignInFormData {
    email: { value: string };
    password: { value: string };
}

interface SignInAPIRequestBody {
    email: string;
    password: string;
}

type SubmitHandlerCallback = UseMutateFunction<
    SignInResponse | undefined,
    unknown,
    SignInAPIRequestBody,
    unknown
>;

const handleSubmit = (callback: SubmitHandlerCallback) => {
    return async (event: FormEvent) => {
        event.preventDefault();

        const formData = event.target as typeof event.target & SignInFormData;

        const encryptedPassword = await encrypt(formData.password.value);

        const data: SignInAPIRequestBody = {
            email: formData.email.value,
            password: encryptedPassword,
        };

        callback(data);
    };
};

const fetchSignInAPI = async ({ email, password }: SignInAPIRequestBody) => {
    return await signIn("credentials", {
        email,
        password,
        redirect: false,
    });
};

export default function LoginForm() {
    const router = useRouter();

    const { data, isLoading, mutate } = useMutation({
        mutationFn: fetchSignInAPI,
        onSuccess(data) {
            if (data?.ok) {
                router.push("/");
            }
        },
    });

    return (
        <form
            method="post"
            className="mx-auto w-1/5 min-w-[300px]"
            action="/api/auth/callback/credentials"
            onSubmit={handleSubmit(mutate)}
        >
            <Input id="email" filedName="電子郵件地址" />
            <Input id="password" filedName="密碼" />
            <p className="my-1 h-4 text-red-500">{data?.error}</p>
            <button
                type="submit"
                disabled={isLoading || data?.ok}
                className="my-4 w-full rounded bg-sky-400 py-2 font-medium tracking-wide text-white disabled:bg-sky-200"
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
                name={id}
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
