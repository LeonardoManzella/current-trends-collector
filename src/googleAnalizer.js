const GOOGLE_TRENDS_AR_URL = "https://trends.google.com/trends/api/dailytrends?hl=es-419&tz=180&geo=AR&ns=15";
const GOOGLE_TRENDS_US_URL = "https://trends.google.com/trends/api/dailytrends?hl=es-419&tz=180&geo=US&ns=15";

export async function obtainGoogleTrendsArg() {
    return await obtainGoogleTrends(GOOGLE_TRENDS_AR_URL);
}

export async function obtainGoogleTrendsGlobal() {
    return await obtainGoogleTrends(GOOGLE_TRENDS_US_URL);
}

async function obtainGoogleTrends(url) {
    console.group('Calling obtainGoogleTrends');

    const trends = await fetch(url)
    .then(function (response) {
        return response.text();
    })
    .then(function (response) {
        const JSON_DATA_START = 6;
        const FIRST = 0;
        response = response.substring(JSON_DATA_START);
        response = JSON.parse(response).default.trendingSearchesDays[FIRST].trendingSearches;
        console.log("Post send, google response: ", response);
        return response;
    })
    .catch(function (error) {
        console.error('--- Error Detected ---');
        console.error(error);
        console.trace();
    });

    console.groupEnd();
    return trends;
}