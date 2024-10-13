import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { apiClient } from ".";
import { timeRangeToQueryParam } from "../constants";

export const getStockPrices = async (
  timeRange: string,
  companySymbol: string
) => {
  const requestInfo = {
    url: `query?function=${
      timeRangeToQueryParam[timeRange]
    }&symbol=${companySymbol}&apikey=${import.meta.env.VITE_API_KEY}`,
    config: {},
  };

  return await apiClient.get(requestInfo);
};

export const useGetStockPrices = (timeRange: string, companySymbol: string) => {
  let queryObject = {
    queryKey: ["fetchStockPrices", timeRange],
    queryFn: () => getStockPrices(timeRange, companySymbol),
    placeholderData: keepPreviousData,
  };
  return useQuery(queryObject);
};
