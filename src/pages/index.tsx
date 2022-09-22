import type { NextPage } from "next";
import Head from "next/head";

import Tabs from "@/components/Tabs";

const Home: NextPage = () => {
    const roles: Role[] = [
        {
            name: "全部",
            value: "all",
        },
        {
            name: "管理員",
            value: "administrator",
        },
        {
            name: "使用者",
            value: "user",
        },
    ];

    return (
        <>
            <Head>
                <title>牛啤管理員系統</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className="px-8 pt-8 pb-6 lg:py-10">
                <h1 className="text-3xl font-bold tracking-wide">
                    使用者列表
                </h1>
            </header>

            <main className="px-8">
                <Tabs roles={roles} />
            </main>
        </>
    );
};

export default Home;