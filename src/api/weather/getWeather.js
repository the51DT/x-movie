const BaseUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const Mykey = '13b55b2bf5bf4b64df063ddbfe1f3c5c'
let citis = 'Seoul'

import { apiInstance } from '../index.js';
const api = apiInstance();

function getWt(param, success, fail) {
  api.get(`${BaseUrl}${param}&APPID=${Mykey}&units=metric`).then(success).catch(fail);
}
export { getWt };