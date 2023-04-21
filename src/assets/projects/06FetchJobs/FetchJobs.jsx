import { useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Loader from "../../components/Loader";
import UseFetch from "../../components/UseFetch";

const url = "https://course-api.com/react-tabs-project";

const FetchJobs = () => {
  const { loading, data } = UseFetch(url, "fetch_jobs");

  return <div className="container">{loading ? <Loader /> : (
      data.map((items, index) => {

      })
  )}</div>;
};

export default FetchJobs;
