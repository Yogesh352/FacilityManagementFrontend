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

export default function AreaGraph() {
  //   const didMount = useRef(false);

  const [labels, setLabels] = useState([
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
  ]);
  const [state, setState] = useState({
    labels: ["08:00", "08:00", "08:00", "08:00", "08:00"],
    data: [50, 40, 20, 100, 14, 18],
  });

  // labels render when the user returns to the game after leaving the site
  //   useEffect(() => {
  //     for (let i = 0; i < data.length; i++) {
  //       setLabels((prevState) => [...prevState, "Year " + i]);
  //     }
  //   }, []);

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
            title: {
              display: false,
              text: "Energy Line Chart",
            },
          },
          legend: {
            display: false,
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
              
              min: 0,
            },
          },
        }}
        data={{
          labels,
          datasets: [
            {
              fill: true,
              fillColor: "gradient",
              label: "Energy Consumed",
              lineTension: 0.5,
              data: state.data,
              borderColor: "#2e6689",
              backgroundColor: (context) => {
                const ctx = context.chart.ctx;
                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                gradient.addColorStop(0, "#2e6689");
                gradient.addColorStop(1, "#94c0db");
                return gradient;
              },
            },
          ],
        }}
      />
    </div>
  );
}
