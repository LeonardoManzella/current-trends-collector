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
import axios from 'axios';


//Handle Main Request
export default async function handleRequest(mainRequest) {
    console.log("---------------------------------------------------------------------------------------------");
    console.log("handleRequest initiated");
    //TODO use axios to post IFTT to generate email
   

    return new Response('Hello worker!', {
        headers: { 'content-type': 'text/plain' },
    });
}