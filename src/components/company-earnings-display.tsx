import { useGetCompanyEarnings } from "../api/company-earnings";
import { formatDateLabel } from "../utils";
import LineChart from "./charts/linechart";

const CompanyEarningsDisplay = ({
  companySymbol,
}: {
  companySymbol: string;
}) => {
  const { data } = useGetCompanyEarnings(companySymbol);

  const label = data?.data?.annualEarnings
    ?.map((earning: any) => earning?.fiscalDateEnding)
    .slice(1, 11);
  const chartData = data?.data?.annualEarnings
    ?.map((earning: any) => earning?.reportedEPS)
    .slice(1, 11);

  const formattedDateLabel = formatDateLabel(label);

  return (
    <div>
      {chartData && formattedDateLabel ? (
        <LineChart
          dataset={chartData}
          labels={formattedDateLabel}
          title="Annual Company Earnings"
        />
      ) : null}
    </div>
  );
};

export default CompanyEarningsDisplay;
