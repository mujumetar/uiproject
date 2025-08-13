import React, { useState } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
    const [chartData] = useState({
        series: [
            {
                name: "Clients",
                data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
            }
        ],
        options: {
            chart: {
                height: 350,
                type: "pie",
                zoom: {
                    enabled: true
                }
            },
            dataLabels: {
                enabled: true
            },
            stroke: {
                curve: ['straight', 'smooth', 'monotoneCubic', 'stepline']
            },
            title: {
                text: "Monthly Conversion Rate",
                align: "center"
            },
            xaxis: {
                categories: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul",
                    "Aug",
                    "Sep"
                ]
            },
            yaxis: {
                title: {
                    text: "Client"
                }
            },
            legend: {
                position: "top"
            }
        }
    });

    return (
        <div>
            <div className="container bg-white rounded-2 my-3 p-2 p-4">
                <h4>Analysis</h4>
                <div className="row">
                    <div className="col-lg-6 col-md-12 col-sm-12 ">
                        <Chart
                            options={chartData.options}
                            series={chartData.series}
                            type="line"
                            height={250}
                        />
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Charts;
