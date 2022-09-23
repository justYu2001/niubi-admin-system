import { NextPage } from "next";
import Head from "next/head";

import LoginForm from "@/components/LoginForm";

const Login: NextPage = () => {
    return (
        <>
            <Head>
                <title>牛啤管理員系統</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="px-8 pt-8 pb-6 lg:py-10">
                <h1 className="text-3xl font-bold tracking-wide">
                    牛啤管理員系統
                </h1>
            </header>
            <main className="mt-20 lg:mt-60">
                <h2 className="text-2xl font-medium text-center">登入</h2>
                <LoginForm />
            </main>
        </>
    );
};

export default Login;
