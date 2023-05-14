/*Template generated by WebStorm on Thursday (5/11/23), 12:28 PM.
 * Author: kramstyles
 * Filename: Column3D.jsx
 */

import PropTypes from "prop-types";

import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Charts from "fusioncharts/fusioncharts.charts";
import Theme from "fusioncharts/themes/fusioncharts.theme.carbon";

ReactFC.fcRoot(FusionCharts, Charts, Theme);

const Column3D = ({data}) => {
    const chartConfig = {
        type: "bar3d",
        width: "100%",
        height: '600',
        dataFormat: "json",
        dataSource: {
            chart: {
                caption: "Popular Repositories",
                subCaption: "Most forked repositories",
                theme: "carbon",
                yAxisName: "Repositories",
                xAxisName: "Number of Forks",
            }, data,
        }
    }
  return (
    <div className="container">
      <ReactFC {...chartConfig}/>
    </div>
  );
};

Column3D.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Column3D;
