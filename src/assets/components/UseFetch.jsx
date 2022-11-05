import { useState, useEffect, useCallback } from "react";

const UseFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = useCallback(async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  }, [url]);

  useEffect(() => {
    getProducts(); // Would need a use callback to add this to dependency array else infinite loop
  }, [url, getProducts]);

  return { loading, data };
};

export default UseFetch;
