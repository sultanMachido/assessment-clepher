import { useQuery } from "@tanstack/react-query";
import { apiClient } from ".";

export const getCompanyEarnings = async (companySymbol: string) => {
  const requestInfo = {
    url: `query?function=EARNINGS&symbol=${companySymbol}&apikey=${import.meta.env.VITE_API_KEY}`,
    config: {},
  };

  return await apiClient.get(requestInfo);
};

export const useGetCompanyEarnings = (companySymbol: string) => {
  let queryObject = {
    queryKey: ["fetchStockPrices"],
    queryFn: () => getCompanyEarnings(companySymbol),
  };
  return useQuery(queryObject);
};
