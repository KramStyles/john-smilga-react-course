/*Template generated by WebStorm on Tuesday (5/9/23), 5:43 PM.
 * Author: kramstyles
 * Filename: Repo.jsx
 */

import { Bar3D, Column3D, Donut2D, Pie3D } from "./charts";

import { useGithubContext } from "../context/context";
import styled from "styled-components";
// import mockChartData from "../mockData/chart";

const Repo = () => {
  const { repos } = useGithubContext();

  const languages = repos.reduce((total, item) => {
    const { language, stargazers_count } = item;
    if (!language) return total;

    // Add language into object if it doesn't exist
    if (!total[language])
      total[language] = { label: language, value: 1, stars: stargazers_count };
    else
      total[language] = {
        ...total[language],
        value: total[language].value + 1,
        stars: total[language].stars + stargazers_count,
      }; // Update total

    return total;
  }, {});
  // Remove the key and turn the object into an array. I.e. it gets the values of the object we pass in
  let mostUsed = Object.values(languages).sort((a, b) => {
    return b.value - a.value;
  });
  // We don't need many languages, so we will pick the top 7
  mostUsed = mostUsed.slice(0, 7);

  const mostStars = Object.values(languages)
    .sort((a, b) => b.stars - a.stars) //sort based on top stars
      .map(item => ({...item, value: item.stars})) // Change value to stars
    .slice(0, 7);
  

  return (
    <Wrapper>
      <div className="row">
        <Pie3D data={mostUsed} />
        <Bar3D />
        <Column3D />
        <Donut2D data={mostStars} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  svg,
  .fusioncharts-container {
    width: 100% !important;
  }
`;

export default Repo;
