import { CChart } from "@coreui/react-chartjs";
import { colorFromTimeRange } from "../../constants";

type LineChartProps = {
  labels: string[];
  dataset: number[];
  timeRange?: string;
  title: string;
};

let color: string = "";
const LineChart = ({ labels, dataset, timeRange, title }: LineChartProps) => {
  if (timeRange) {
    color = colorFromTimeRange[timeRange];
  }

  return (
    <div>
      <CChart
        type="line"
        data={{
          labels: labels,
          datasets: [
            {
              label: `${timeRange || ""} ${title}`,
              backgroundColor: color || "",
              borderColor: color || "",
              pointBackgroundColor: color || "",
              pointBorderColor: "#fff",
              data: dataset,
            },
          ],
        }}
        options={{
          plugins: {
            legend: {
              labels: {
                color: "",
              },
            },
          },
          scales: {
            x: {
              grid: {
                color: "",
              },
              ticks: {
                color: "",
              },
            },
            y: {
              grid: {
                color: "",
              },
              ticks: {
                color: "",
              },
            },
          },
        }}
      />
    </div>
  );
};

export default LineChart;
