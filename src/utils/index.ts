export const extractChartLabelFromApiData = (data: {
  [key: string]: string;
}) => {
  if (!data) {
    return null;
  }
  return Object.keys(data);
};

export const extractChartDataFromApiData = (data: {
  [key: string]: string;
}) => {
  if (!data) {
    return null;
  }
  return Object.values(data);
};

export const formatDateLabel = (dateLabels: string[] | null) => {
  if (!dateLabels?.length) {
    return [];
  }
  const trimmedData = dateLabels?.splice(1, 11);
  const dateAsAscending = trimmedData?.sort(
    (a: string, b: string) => Number(new Date(a)) - Number(new Date(b))
  );
  return dateAsAscending;
};

export const formatDataset = (dataset: string[] | null, datasetKey: string) => {
  if (!dataset?.length || !datasetKey) {
    return [];
  }

  return dataset?.map((data: any) => data[datasetKey])?.splice(1, 11);
};

export function debounce(func: any, delay: any) {
  let timeoutId: any;

  return function (this: any, ...args: any) {
    const context = this;

    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
}
