import { useGetStockPrices } from "../api/stock-prices";
import {
  extractChartDataFromApiData,
  extractChartLabelFromApiData,
  formatDataset,
  formatDateLabel,
} from "../utils";
import LineChart from "./charts/linechart";
import { TIME_RANGE } from "../constants";
import TimeButtons from "./time-buttons";
import { useState } from "react";

const StockPriceDisplay = ({ companySymbol }: { companySymbol: string }) => {
  const [timeRange, setTimeRange] = useState(TIME_RANGE.DAILY);
  const { data } = useGetStockPrices(timeRange, companySymbol);

  const label = extractChartLabelFromApiData(data?.data[timeRange]);
  const chartData = extractChartDataFromApiData(data?.data[timeRange]);

  const datasetKey = "4. close";

  const formattedDateLabel = formatDateLabel(label);
  const formattedDataset = formatDataset(chartData, datasetKey);

  const changeTimeRange = (newTimeRange: string) => {
    setTimeRange(newTimeRange);
  };

  return (
    <div>
      <TimeButtons
        selectTimeRange={changeTimeRange}
        currentTimeRange={timeRange}
      />
      {formattedDataset && formattedDateLabel ? (
        <LineChart
          dataset={formattedDataset}
          labels={formattedDateLabel}
          timeRange={timeRange}
          title="Stock Prices"
        />
      ) : null}
    </div>
  );
};

export default StockPriceDisplay;
