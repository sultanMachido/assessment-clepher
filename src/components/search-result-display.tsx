type SearchResultDisplayProps = {
  searchResult: { [key: string]: string }[];
  addCompanySymbol: (companySymbol: string) => void;
};

const SearchResultDisplay = ({
  searchResult,
  addCompanySymbol,
}: SearchResultDisplayProps) => {
  return (
    <ul className="w-[50%] mx-auto">
      {searchResult.length
        ? searchResult.map((result: any) => (
            <>
              <li
                className="flex justify-between p-2 cursor-pointer"
                key=""
                onClick={() => addCompanySymbol(result["1. symbol"])}
              >
                <span className="text-grey-500 font-bold">
                  {result["1. symbol"]}
                </span>
                <span>{result["2. name"]}</span>
              </li>
              <hr />
            </>
          ))
        : null}
    </ul>
  );
};

export default SearchResultDisplay;
