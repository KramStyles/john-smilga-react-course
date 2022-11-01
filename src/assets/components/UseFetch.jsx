import { useState, useEffect } from "react";

const UseFetch = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getProducts = async () => {
    const response = await fetch(url);
    console.log(response);
    const content = await response.json();
    setData(content);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, data };
};

export default UseFetch;
