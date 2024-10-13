import { lazy, useState } from "react";
import StockPriceDisplay from "./components/stock-price-display";
import { debounce } from "./utils";
import { useCompanySearch } from "./api/company-search";
import SearchResultDisplay from "./components/search-result-display";
import LazyLoad from "./components/lazy-load.tsx";

const CompanyEarningsDisplay = lazy(
  () => import("./components/company-earnings-display.tsx")
);

function App() {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [companySymbol, setCompanySymbol] = useState("");
  const [lazyLoadedComponents, setLazyLoadedComponents] = useState(0);
  const [hideLoadMoreButton, setHideLoadMoreButton] = useState(false);

  const { mutate, isPending, data, isSuccess, isError } = useCompanySearch();

  const searchHandler = (event: any) => {
    if (event.target.value) {
      setSearchKeyword(event.target.value);
      setCompanySymbol("");
      mutate(event.target.value);
    }
  };

  const addCompanySymbol = (companySymbol: string) => {
    setCompanySymbol(companySymbol);
  };

  const debouncedSearch = debounce(searchHandler, 2000);

  return (
    <main className="w-[80%] mx-auto">
      <h2 className="text-center font-bold text-[40px]">
        Financial Report Hub
      </h2>
      {data?.data?.Information && (
        <p className="text-center">{data?.data?.Information}</p>
      )}
      <section className="flex justify-center items-center gap-2">
        <input
          type="search"
          className="w-6/12 rounded-md p-3 border"
          placeholder="add company name or symbol"
          onChange={debouncedSearch}
        />
        {isPending && <p>...searching</p>}
      </section>
      <div>
        {searchKeyword && data?.data?.bestMatches?.length && !companySymbol ? (
          <SearchResultDisplay
            searchResult={data.data?.bestMatches}
            addCompanySymbol={addCompanySymbol}
          />
        ) : null}
        {searchKeyword && isSuccess && !data?.data?.bestMatches?.length ? (
          <p className="text-center font-bold">Company Not Found</p>
        ) : null}
        {isError && (
          <p className="text-red-500 text-center font-bold">
            An error occured please try again
          </p>
        )}
      </div>
      {companySymbol && (
        <>
          <section className="h-[700px] mb-10">
            <h3 className="text-center text-[30px] font-bold">
              {companySymbol} Stock Prices
            </h3>
            <div className="h-[400px]">
              <StockPriceDisplay companySymbol={companySymbol} />
            </div>
          </section>
          {!hideLoadMoreButton && (
            <div>
              <button
                onClick={() => {
                  setLazyLoadedComponents((prev) => prev + 1);
                  setHideLoadMoreButton(true);
                }}
                className="bg-black text-white rounded-[5px] text-sm font-bold"
              >
                Load More
              </button>
            </div>
          )}
          <div>
            <LazyLoad currentIndex={lazyLoadedComponents} index={1}>
              <CompanyEarningsDisplay companySymbol={companySymbol} />
            </LazyLoad>
          </div>
        </>
      )}
    </main>
  );
}

export default App;
