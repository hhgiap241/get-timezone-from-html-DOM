// const data = require('./data.json');
// const moment = require('moment');
// const zoneIdList = require('./zoneIdList');
import { zoneIdList } from './zoneIdList.js';
import moment from 'moment';
// import data from './data.json';

// const result = [];
// data.forEach((item) => {
//   const {name: zoneId, abbreviation: timezone_code} = item;
//   let timezone_gap = item.rawFormat.substring(0, 6);
//   let timezone_name = item.rawFormat.substring(7);
//   result.push({
//     zoneId
//   })
// });
// console.log(JSON.stringify(result));



zoneIdList.forEach((zoneId, index) => {
  const date = "2023-02-17T06:33:27.782299";
  const format = "YYYY/MM/DD HH:mm";
  const options = {};
  options.timeZone = zoneId;
  const result = moment(
    new Date(
      new Date(date).toLocaleString("en-US", options)
    ).toISOString()
  ).format(format);
  console.log(`${index + 1}. ${zoneId} ${result}`);
});