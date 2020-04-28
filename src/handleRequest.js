// import request from 'request'
// import Xray from 'x-ray'
// import cheerio from "cheerio"
// var xray_ready = Xray();
// import prepareFakeWindow from './workerFakeDOM'
// import prepareJQuery from './jquery-3.3.1'
// import prepareSignalR from './hubs';
// import initSignalR from './jquery.signalR-2.4.0'
// importScripts("workerFakeDOM.js");
// importScripts('jquery-3.3.1');
// const htmlparser2 = require("htmlparser2");
import {obtainGoogleTrendsArg, obtainGoogleTrendsGlobal} from './googleAnalizer';
import {generateGoogleTable} from './htmlTableGenerator';

const IFTTT_WEBHOOK_URL = 'https://maker.ifttt.com/trigger/estado_transito/with/key/bEJDjvRQ04PPYZVlKAP2E8';

//Handle Main Request
export default async function handleRequest(mainRequest) {
    console.log("---------------------------------------------------------------------------------------------");
    console.log("handleRequest initiated");
    
    const googleTrendsArg = await obtainGoogleTrendsArg();
    const googleTrendsGlobal = await obtainGoogleTrendsGlobal();

    //TODO parse Twitter analizer page to generate twitter daily trending topics section, in another JS file

    const htmlTable = generateGoogleTable(googleTrendsArg, googleTrendsGlobal);

    console.group('Calling IFTTT');
    await fetch(IFTTT_WEBHOOK_URL, {
        body: JSON.stringify({ 
            value1: htmlTable,
            value2: "Tendencias de Twitter y Google",
            value3: "optional value",
            }),
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    })
    .then(function (response) {
        console.log("Post send, response: ", response);
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