/*Template generated by WebStorm on Thursday (5/11/23), 12:28 PM.
 * Author: kramstyles
 * Filename: Pareto3D.jsx
 */

import PropTypes from "prop-types";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Theme from "fusioncharts/themes/fusioncharts.theme.fusion";

ReactFC.fcRoot(FusionCharts, Charts, Theme);

const Pareto3D = ({data}) => {
    const chartConfig = {
        type: "pareto3d",
        width: '100%',
        height: "600",
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Popular Language",
                subCaption: "Visualization with Pareto",
                theme: "fusion",
                yAxisName: "Number of Repositories",
                xAxisName: "Programming Languages",
                showPercentValues: 0,
            },
            data
        }
    }
  return (
    <div className="col-12 my-5">
      <ReactFC {...chartConfig} />
    </div>
  );
};

Pareto3D.propTypes = {
    data: PropTypes.array.isRequired
}

export default Pareto3D;