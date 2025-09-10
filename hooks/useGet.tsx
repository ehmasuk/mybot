import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";

interface UseGetProps {
    baseUrl?: string;
    endpoint: string;
    onSuccess?: (data: any) => void;
    onError?: (error: AxiosError) => void;
}

function useGet({ baseUrl = process.env.NEXT_PUBLIC_API_URL, endpoint, onSuccess, onError }: UseGetProps) {
    const [data, setData] = useState<any>(null);

    const [loading, setLoading] = useState<boolean>(false);

    const [error, setError] = useState<boolean>(false);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await axios.get(baseUrl + endpoint);
            setData(response.data);
            onSuccess && onSuccess(response.data);
        } catch (error: any) {
            console.log(error);
            onError && onError(error);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { getData, data, loading, error };
}

export default useGet;
