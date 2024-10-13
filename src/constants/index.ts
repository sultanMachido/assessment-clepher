export const TIME_RANGE = {
  DAILY: "Time Series (Daily)",
  WEEKLY: "Weekly Time Series",
  MONTHLY: "Monthly Time Series",
};

export const timeRangeToQueryParam: { [key: string]: string } = {
  "Time Series (Daily)": "TIME_SERIES_DAILY",
  "Weekly Time Series": "TIME_SERIES_WEEKLY",
  "Monthly Time Series": "TIME_SERIES_MONTHLY",
};

export const colorFromTimeRange: { [key: string]: string } = {
  "Time Series (Daily)": "#e9d5ff",
  "Weekly Time Series": "#bedbfe",
  "Monthly Time Series": "#baf7d0",
};
