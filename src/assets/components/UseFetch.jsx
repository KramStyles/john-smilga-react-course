import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      setData(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, data };
};

export default useFetch;
