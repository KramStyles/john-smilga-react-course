import {useState, useEffect, useCallback} from "react";


const UseFetch = (url, cache_name = "") => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);

    const getProducts = useCallback(async () => {
        try {
            // We check if it's cached and then retrieve data
            const storageName = `john_smilga_${cache_name}`;
            const storageDetails = localStorage.getItem(storageName);

            if (storageDetails) {
                setData(JSON.parse(storageDetails))
                setLoading(false);

            } else {
                const response = await fetch(url);
                const data = await response.json();

                setData(data);
                setLoading(false);

                // Cache the data if cache name is given
                if (cache_name) localStorage.setItem(storageName, JSON.stringify(data))
            }
        } catch (error) {
            console.log(error);
        }
    }, [url, cache_name]);

    useEffect(() => {
        getProducts(); // Would need a use callback to add this to dependency array else infinite loop
    }, [url, getProducts]);

    return {loading, data};
};

export default UseFetch;
