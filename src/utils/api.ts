import axios, { CreateAxiosDefaults } from "axios";
import { ungzip } from "pako";

import { env } from "@/env/server.mjs";

const config: CreateAxiosDefaults = {
    baseURL: env.API_URL,
};

const api = axios.create(config);

const snakeToCamel = (value: string) => {
    return value.toLowerCase()
                .replace(/([_][a-z])/g, (group) =>
                    group.toUpperCase().replace("_", "")
                );
};

interface RenameKeyFunction {
    (object: Record<string, unknown>, oldKey: string, newKey: string): void;
}

const renameKey: RenameKeyFunction = (object, oldKey, newKey) => {
    const value = Object.getOwnPropertyDescriptor(object, oldKey);

    if (value && oldKey !== newKey) {
        Object.defineProperty(object, newKey, value);
        delete object[oldKey];
    }
};

const convertKeysToCamelCase = (data: Record<string, unknown>) => {
    for (const key of Object.keys(data)) {
        const camelCaseKey = snakeToCamel(key);
        renameKey(data, key, camelCaseKey);
    }
};

api.interceptors.response.use((response) => {
    /*
     * Fly.io compresses the response data to Gzip format automatically,
     * and we are unable to control this behavior.
     * Therefore, the data must be decompressed before being used.
     */

    const isFromFlyio = "fly-request-id" in response.headers;
    const isJSONData = response.headers["content-type"] === "application/json";

    if (isFromFlyio && isJSONData) {
        const unzipedData = ungzip(response.data);
        const jsonString = new TextDecoder().decode(unzipedData);
        response.data = JSON.parse(jsonString);
    } else if (isJSONData) {
        const dataBuffer = <Buffer>response.data;
        response.data = JSON.parse(dataBuffer.toString());
    }

    if (typeof response.data === "object") {
        convertKeysToCamelCase(response.data);
    }

    return response;
});

export default api;
