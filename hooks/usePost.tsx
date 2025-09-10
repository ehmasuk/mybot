import { message } from "antd";
import axios, { AxiosError } from "axios";
import { useState } from "react";

interface PostDataProps {
    baseUrl?: string;
    endpoint: string;
    data: any;
    loadingText?: string;
    onSuccess?: (data: any) => void;
    onError?: (error: AxiosError) => void;
    successText?: string;
    allowMessage?: boolean;
}

function usePost() {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(false);

    const postData = async ({ baseUrl = process.env.NEXT_PUBLIC_API_URL, endpoint, data, loadingText = "Loading..", onSuccess, onError, successText = "Completed 🎉", allowMessage = true }: PostDataProps) => {
        setLoading(true);

        if (allowMessage) {
            message.loading({ content: loadingText, key: 1 });
        }

        try {
            const res = await axios.post(baseUrl + endpoint, data);
            setData(res.data);
            onSuccess && onSuccess(res.data);
        } catch (error: any) {
            console.log(error);
            onError && onError(error);
            allowMessage && message.error("Something went wrong..");
        } finally {
            setLoading(false);
            if (allowMessage) {
                message.destroy(1);
                message.success(successText);
            }
        }
    };

    return { postData, data, loading };
}

export default usePost;
