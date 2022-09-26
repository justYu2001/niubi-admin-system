import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";

import Tabs from "@/components/Tabs";
import SearchBar from "@/components/SearchBar";
import AddUserButton from "@/components/AddUserButton";
import AddUserModal from "@/components/AddUserModal";

const Home: NextPage = () => {
    const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);

    const openAddUserModal = () => setIsAddUserModalOpen(true);
    const closeAddUserModal = () => setIsAddUserModalOpen(false);

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

            <header className="flex items-center justify-between px-8 pt-8 pb-6 lg:py-10">
                <h1 className="text-3xl font-bold tracking-wide">使用者列表</h1>
                <button className="rounded border-2 border-sky-400 py-1 px-4 font-medium text-sky-400 transition-all duration-300 hover:bg-sky-400 hover:text-white">
                    登出
                </button>
            </header>

            <main className="px-8">
                <Tabs roles={roles} />
                <div className="flex items-center">
                    <SearchBar />
                    <AddUserButton onClick={openAddUserModal} />
                </div>
            </main>

            <AddUserModal
                open={isAddUserModalOpen}
                onClose={closeAddUserModal}
            />
        </>
    );
};

export default Home;
