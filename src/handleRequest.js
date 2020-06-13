import {obtainGoogleTrendsArg, obtainGoogleTrendsGlobal} from './googleAnalizer';
import {generateGoogleTable} from './htmlTableGenerator';

const IFTTT_WEBHOOK_URL_ARG = 'https://maker.ifttt.com/trigger/social_trends_AR/with/key/bEJDjvRQ04PPYZVlKAP2E8';
const IFTTT_WEBHOOK_URL_USA = 'https://maker.ifttt.com/trigger/social_trends_US/with/key/bEJDjvRQ04PPYZVlKAP2E8';

//Handle Main Request
export default async function handleRequest(mainRequest) {
    console.log("---------------------------------------------------------------------------------------------");
    console.log("handleRequest initiated");
    
    const googleTrendsArg = await obtainGoogleTrendsArg();
    const googleTrendsGlobal = await obtainGoogleTrendsGlobal();

    //TODO parse Twitter analizer page to generate twitter daily trending topics section, in another JS file. Probably better to copy project in another worker

    const htmlTables = generateGoogleTable(googleTrendsArg, googleTrendsGlobal);
    const ARG = 0, USA = 1;

    console.group('Calling IFTTT');
    await fetch(IFTTT_WEBHOOK_URL_ARG, {
        body: JSON.stringify({ 
            value1: htmlTables[ARG],
            value2: "Tendencias de Twitter y Google",
            value3: "optional value",
            }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (response) {
        console.log("Post ARG send, response: ", response);

        return fetch(IFTTT_WEBHOOK_URL_USA, {
            body: JSON.stringify({ 
                value1: htmlTables[USA],
                value2: "Tendencias de Twitter y Google",
                value3: "optional value",
                }),
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
        });
    })
    .then(function (response) {
        console.log("Post USA send, response: ", response);
    })
    .catch(function (error) {
        console.error('--- Error Detected ---');
        console.error(error);
        console.trace();
    })
    .finally(function () {
        // always executed
        console.groupEnd();
    });

    return new Response('Everything worked!', {
        headers: { 'content-type': 'text/plain' },
    });
}