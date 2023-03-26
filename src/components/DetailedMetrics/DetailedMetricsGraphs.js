import React, { useEffect, useRef, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { TimeRange } from "./TimeRange";
import { energyConsumptionDataW } from "./MetricsWeekly";
import { energyConsumptionDataD } from "./MetricsDaily";
import { energyConsumptionDataM } from "./MetricsMonthly";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export default function DetailedMetricsGraphs({
  timerange,
  selectedBuildings,
  metric
}) {
  const didMount = useRef(false);

  const [labels, setLabels] = useState(TimeRange[1]);

  const [energyData, setEnergyData] = useState([
    energyConsumptionDataW.get("SOB").consumption,
  ]);

  // labels render when the user returns to the game after leaving the site
  useEffect(() => {
    if (didMount.current) {
      // console.log(TimeRange.M);
      setLabels(TimeRange[parseInt(timerange)]);
      const oldEnergy = [];
      const dataToUse =
        timerange === "0"
          ? energyConsumptionDataD
          : timerange === "1"
          ? energyConsumptionDataW
          : energyConsumptionDataM;

      for (let i = 0; i < selectedBuildings.length; i++) {
        metric === "Energy Consumption"? 
        oldEnergy.push(dataToUse.get(selectedBuildings[i]).consumption):
        metric === "Energy Cost" ? 
        oldEnergy.push(dataToUse.get(selectedBuildings[i]).cost):
        oldEnergy.push(dataToUse.get(selectedBuildings[i]).occupancy)
      }
      setEnergyData(oldEnergy);
    } else {
      didMount.current = true;
    }
  }, [timerange, selectedBuildings, metric]);

  //update chart upon submission of answer
  //   useEffect(() => {
  //     if (didMount.current) {

  //       setLabels((prevState) => [...prevState, `Year ${year + 1}`]);

  //       setState({
  //         labels: labels,
  //         data: data,
  //       });
  //     } else {
  //       didMount.current = true;
  //     }
  //   }, [year]);

  if (labels.length === 0) {
    return <div> still loading </div>;
  }

  return (
    <div className="h-full">
      <Line
        options={{
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              display: false,
            },
            filler: {
              propagate: false,
            },
            title: {
              display: false,
              text: "Energy Line Chart",
            },
          },
          legend: {
            display: false,
          },
          interaction: {
            intersect: false,
          },

          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
                drawBorder: false,
              },
              stacked: true,
              min: 0,
            },
          },
        }}
        // data={{ state }}
        data={{
          labels,
          // datasets: [
          //   {
          //     fill: true,
          //     fillColor: "gradient",
          //     label: "Energy Consumed",
          //     lineTension: 0.5,
          //     data: state.data,
          //     borderColor: "#2e6689",
          //     backgroundColor: (context) => {
          //       const ctx = context.chart.ctx;
          //       const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          //       gradient.addColorStop(0, "#2e6689");
          //       gradient.addColorStop(1, "#94c0db");
          //       return gradient;
          //     },
          //   },
          // ],
          datasets: energyData,

          // {
          //   label: "Data A",
          //   data: [40.96, 89.06, 65.46, 45.46, 89.55, 54.52, 71.24, 89.1],
          //   borderColor: "#2e6689",
          //   lineTension: 0.5,
          //   backgroundColor: "#2e6689",
          //   // look at this setting
          //   fill: "origin",
          // },
          // {
          //   label: "Data B",
          //   lineTension: 0.5,
          //   data: [20.96, 65.06, 15.46, 34.46, 53.55, 24.52, 31.24, 59.1],
          //   borderColor: "#8EDCE6",
          //   backgroundColor: "#8EDCE6",
          //   fill: "origin",
          // },
          // {
          //   label: "Data C",
          //   lineTension: 0.5,
          //   data: [20.96, 65.06, 15.46, 34.46, 53.55, 24.52, 31.24, 59.1],
          //   borderColor: "#D5DCF9",

          //   backgroundColor: "#D5DCF9",
          //   fill: "origin",
          // },
        }}
      />
    </div>
  );
}
