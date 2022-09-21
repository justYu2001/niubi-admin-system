import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>牛啤管理員系統</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="px-5 py-8">
                <h1 className="text-3xl font-bold tracking-wide">
                    使用者列表
                </h1>
            </header>
        </>
    );
};

export default Home;