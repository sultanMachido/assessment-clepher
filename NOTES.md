# Assessment Notes

I built a simple React Application that allows a user search for the most recent stock prices of a company by using the search bar and selecting the Company from a list.

After clicking on the Company, a line chart is displayed that allows a user filter by different time ranges like daily,weekly,monthly.

Clicking on the load more button displays more data like the company's annual earnings.

## Additions

Some optimization techniques were applied and they include:

`Caching` i used React query to cache the calls to the endpoints during filtering
`Debounce` i ensured debounce was applied to the search input to prevent multiple calls to an endpoint per keystroke
`Lazy Loading` i lazy loaded the annual earning component so as to optimize the initial load time

## Conclusion

The apiKey would be safer if there was an API that calls the alphavantage API and stores the API key server side. I requested a new key because the key provided timed out
