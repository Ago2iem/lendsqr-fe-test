/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState, useCallback } from "react";
import axios, { type AxiosRequestConfig, AxiosError } from "axios";
// import { getToken } from "./StorageUtils";

interface FetchOptions {
    method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
    body?: any;
    headers?: Record<string, string>;
    skipAuth?: boolean;
}

interface UseFetchReturn {
    request: <T = any>(url: string, options?: FetchOptions) => Promise<T>;
    loading: boolean;
    error: string | null;
    clearError: () => void;
}

export const useFetch = (): UseFetchReturn => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const clearError = useCallback(() => setError(null), []);

    const request = useCallback(async <T = any>(
        url: string,
        options: FetchOptions = {}
    ): Promise<T> => {
        const { method = 'GET', body, headers = {}, skipAuth = false } = options;
        const token = !skipAuth ? import.meta.env.VITE_ACCESS_TOKEN : null;

        setLoading(true);
        setError(null);
        // console.log(token)

        try {
            const config: AxiosRequestConfig = {
                url: `${baseURL}${url}`,
                method,
                headers: {
                    'Content-Type': 'application/json',
                    ...(token && { Authorization: `Bearer ${token}` }),
                    ...headers,
                },
                data: body,
            };
            console.log('Request initiated:', config.data);

            const response = await axios.request<T>(config);
            // console.log('Response:', response);
            return response.data;
        } catch (err: unknown) {
            console.log('err re from hook request----', (err as AxiosError).response?.data)
            const response = (err as AxiosError).response;
            const errorData = response?.data || null;
            const errorMessage =
                (errorData && (errorData as any).message) ||
                (err instanceof Error ? err.message : 'Network request failed');
            setError(errorMessage);
            throw new Error(errorMessage);
        } finally {
            setLoading(false);
        }
    }, [baseURL]);

    return { request, loading, error, clearError };
};
