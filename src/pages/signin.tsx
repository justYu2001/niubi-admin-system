import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { unstable_getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LoginForm from "@/components/SignInForm";

const SignIn: NextPage = () => {
    return (
        <>
            <Head>
                <title>牛啤管理員系統 - 登入</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="px-8 pt-8 pb-6 lg:py-10">
                <h1 className="text-3xl font-bold tracking-wide">
                    牛啤管理員系統
                </h1>
            </header>
            <main className="mt-20 lg:mt-40">
                <h2 className="text-center text-2xl font-medium">登入</h2>
                <LoginForm />
            </main>
        </>
    );
};

export default SignIn;

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await unstable_getServerSession(
        context.req,
        context.res,
        authOptions
    );

    if (session) {
        return {
            redirect: {
                destination: "/",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
};
