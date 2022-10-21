import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        async function getData() {
            try {
                const response = await axios.get(url);

                response.data && setData(response.data);
            } catch (error) {
                setError(error.message);
            }
        }
        getData();
    }, [url]);

    return {
        data,
        error,
    };
};

export default useFetch;
