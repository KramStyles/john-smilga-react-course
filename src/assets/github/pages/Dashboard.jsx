/*Template generated by WebStorm on Tuesday (5/9/23), 4:21 PM.
 * Author: kramstyles
 * Filename: Dashboard.jsx
 */

import { Info, Repos, User, NavBar, Search } from "../components";
import Loader from "../../components/Loader";
import { useGithubContext } from "../context/context";

const Dashboard = () => {
  const { initialLoading } = useGithubContext();
  if (initialLoading) return <Loader />;
  return (
    <>
      <NavBar />
      <div className="container">
        <Search />
        <Info />
        <User />
        <Repos />
      </div>
    </>
  );
};

export default Dashboard;
