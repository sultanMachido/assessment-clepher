import { useMutation } from "@tanstack/react-query";
import { apiClient } from ".";

export const searchCompany = async (searchKeyword: string) => {
  const requestInfo = {
    url: `query?function=SYMBOL_SEARCH&keywords=${searchKeyword}&apikey=${
      import.meta.env.VITE_API_KEY
    }`,
    config: {},
  };

  return await apiClient.get(requestInfo);
};

export const useCompanySearch = () => {
  let queryObject = {
    mutationFn: (searchKeyword: string) => searchCompany(searchKeyword),
  };
  return useMutation(queryObject);
};
