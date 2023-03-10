// const data = require('./data.json');
// const moment = require('moment');
// const zoneIdList = require('./zoneIdList');
import { zoneIdList } from './zoneIdList.js';
import moment from 'moment';
import cityTimezones from 'city-timezones';
import {mst} from './microsoft_timezone.js';

mst.forEach((city, index) => {
  const result = city.split(',');
  let timezoneValue = 'Nothing';
  for (let item = 0; item < result.length; item++) {
    const timezone = cityTimezones.lookupViaCity(result[item].trim());
    if (timezone?.[0]?.timezone) {
      timezoneValue = timezone?.[0]?.timezone;
      break;
    }
    
  }
  console.log(`${index + 1}. ${city} - ${timezoneValue}`);
})
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



// zoneIdList.forEach((zoneId, index) => {var
//   const date = "2023-02-17T06:33:27.782299";
//   const format = "YYYY/MM/DD HH:mm";
//   const options = {};
//   options.timeZone = zoneId;
//   const result = moment(
//     new Date(
//       new Date(date).toLocaleString("en-US", options)
//     ).toISOString()
//   ).format(format);
//   console.log(`${index + 1}. ${zoneId} ${result}`);
// });