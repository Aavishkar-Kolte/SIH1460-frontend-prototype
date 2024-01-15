import React from "react";
import { Chart } from "react-google-charts";
import { useResultData } from "../contexts/Result";


export const Results = () => {
    const { results } = useResultData();

    const data = [
        ["Status", "Number"],
        ["Answered Correct", results.correct],
        ["Answered Incorrect", results.incorrect],
        ["Unanswered", results.unanswered],
    ];

    const options = {
        title: "Results",
        is3D: true,
        colors: ["rgb(16,150,24)", "rgb(220,57,18)", "rgb(51,102,204)"]
    };

    function PieChart() {
        return (
            <Chart
                chartType="PieChart"
                data={data}
                options={options}
                width={"100%"}
                height={"500px"}
            />
        );
    }

    return (
        <div id="result">
        <br></br>
        <h1>Results</h1>
            <PieChart />
        </div>
    )
}