import { useState } from "react";
import type { AppType } from "next/dist/shared/lib/utils";
import { SessionProvider } from "next-auth/react";
import {
    Hydrate,
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";

import "@/styles/globals.css";

const MyApp: AppType = ({
    Component,
    pageProps: { session, ...pageProps },
}) => {
    const [queryClient] = useState(() => new QueryClient());

    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate>
                <SessionProvider session={session}>
                    <Component {...pageProps} />
                </SessionProvider>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default MyApp;
