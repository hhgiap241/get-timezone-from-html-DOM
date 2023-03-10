// const data = require('./data.json');
// const moment = require('moment');
// const zoneIdList = require('./zoneIdList');
// import { zoneIdList } from "./zoneIdList.js";
import moment from "moment";


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

const data = [
  "+13:00,WST,Samoa,Pacific/Apia",
  "-10:00,HAST,Aleutian Islands,America/Adak",
  "-10:00,HST,Hawaii,Pacific/Honolulu",
  "-09:30,MART,Marquesas Islands,Pacific/Marquesas",
  "-09:00,AKST,Alaska,America/Anchorage",
  "-07:00,MST,Yukon,America/Whitehorse",
  "-08:00,PST,Baja California,America/Tijuana",
  "-08:00,PST,Pacific Time (US & Canada),America/Los_Angeles",
  "-07:00,MST,Arizona,America/Phoenix",
  "-07:00,MST,Chihuahua - La Paz - Mazatlan,America/Mazatlan",
  "-07:00,MST,Mountain Time (US & Canada),America/Creston",
  "-05:00,EST,Chetumal,America/Cancun",
  "-06:00,CST,Central America,America/Merida",
  "-06:00,CST,Central Time (US & Canada),America/Bahia_Banderas",
  "-06:00,EAST,Easter Island,Pacific/Easter",
  "-06:00,CST,Guadalajara - Mexico City - Monterrey,America/Mexico_City",
  "-06:00,CST,Saskatchewan,America/Regina",
  "-05:00,COT,Bogota - Lima - Quito - Rio Branco,America/Bogota",
  "-05:00,EST,Eastern Time (US & Canada),America/Atikokan",
  "-05:00,EST,Haiti,America/Port-au-Prince",
  "-05:00,CST,Havana,America/Havana",
  "-05:00,EST,Indiana (East),America/Indiana/Indianapolis",
  "-05:00,EST,Turks and Caicos,America/Grand_Turk",
  "-04:00,VET,Caracas,America/Caracas",
  "-03:00,CLST,Punta Arenas,America/Punta_Arenas",
  "-04:00,PYT,Asuncion,America/Asuncion",
  "-04:00,EDT,Atlantic Time (Canada),America/Glace_Bay",
  "-04:00,AMT,Cuiaba,America/Cuiaba",
  "-04:00,GYT,Georgetown - La Paz - Manaus - San Juan,America/Guyana",
  "-04:00,CLT,Santiago,America/Santiago",
  "-03:30,NST,Newfoundland,America/St_Johns",
  "-03:00,BRT,Araguaina,America/Araguaina",
  "-03:00,BRT,Brasilia,America/Sao_Paulo",
  "-03:00,GFT,Cayenne - Fortaleza,America/Cayenne",
  "-03:00,ART,City of Buenos Aires,America/Argentina/Buenos_Aires",
  "-03:00,WGT,Greenland,America/Nuuk",
  "-03:00,UYT,Montevideo,America/Montevideo",
  "-03:00,PMST,Saint Pierre and Miquelon,America/Miquelon",
  "-03:00,BRT,Salvador,America/Bahia",
  "-01:00,AZOT,Azores,Atlantic/Azores",
  "-01:00,CVT,Cabo Verde Is.,Atlantic/Cape_Verde",
  "+00:00,UTC,Coordinated Universal Time,Europe/London",
  "+00:00,UTC,Dublin - Edinburgh - Lisbon - London,Europe/London",
  "+00:00,UTC,Monrovia - Reykjavik,Africa/Monrovia",
  "+01:00,WEST,Casablanca,Africa/Casablanca",
  "+01:00,CET,Amsterdam - Berlin - Bern - Rome - Stockholm - Vienna,Europe/Berlin",
  "+01:00,CET,Belgrade - Bratislava - Budapest - Ljubljana - Prague,Europe/Budapest",
  "+01:00,CET,Brussels - Copenhagen - Madrid - Paris,Europe/Copenhagen",
  "+01:00,CET,Sarajevo - Skopje - Warsaw - Zagreb,Europe/Sarajevo",
  "+01:00,WAT,West Central Africa,Africa/Algiers",
  "+02:00,EET,Tripoli,Africa/Tripoli",
  "+02:00,CAT,Windhoek,Africa/Windhoek",
  "+02:00,EET,Athens - Bucharest,Europe/Athens",
  "+02:00,EET,Beirut,Asia/Beirut",
  "+02:00,EET,Cairo,Africa/Cairo",
  "+02:00,EET,Chisinau,Europe/Chisinau",
  "+02:00,EET,Gaza - Hebron,Asia/Hebron",
  "+02:00,CAT,Harare - Pretoria,Africa/Johannesburg",
  "+02:00,EET,Helsinki - Kyiv - Riga - Sofia - Tallinn - Vilnius,Europe/Helsinki",
  "+02:00,IST,Jerusalem,Asia/Jerusalem",
  "+02:00,CAT,Juba,Africa/Juba",
  "+02:00,EET,Kaliningrad,Europe/Kaliningrad",
  "+02:00,CAT,Khartoum,Africa/Khartoum",
  "+03:00,EEST,Damascus,Asia/Damascus",
  "+03:00,EEST,Amman,Asia/Amman",
  "+03:00,TRT,Istanbul,Europe/Istanbul",
  "+03:00,MSK,Minsk,Europe/Minsk",
  "+03:00,AST,Baghdad,Asia/Baghdad",
  "+03:00,AST,Kuwait - Riyadh,Asia/Kuwait",
  "+03:00,MSK,Moscow - St. Petersburg,Europe/Moscow",
  "+03:00,EAT,Nairobi,Africa/Nairobi",
  "+03:00,MSK,Volgograd,Europe/Volgograd",
  "+04:00,SAMT,Astrakhan - Ulyanovsk,Europe/Samara",
  "+04:00,SAMT,Izhevsk - Samara,Europe/Samara",
  "+04:00,MSK,Saratov,Europe/Saratov",
  "+03:30,IRST,Tehran,Asia/Tehran",
  "+04:00,GST,Abu Dhabi - Muscat,Asia/Dubai",
  "+04:00,AZT,Baku,Asia/Baku",
  "+04:00,MUT,Port Louis,Indian/Mauritius",
  "+04:00,GET,Tbilisi,Asia/Tbilisi",
  "+04:00,AMT,Yerevan,Asia/Yerevan",
  "+04:30,AFT,Kabul,Asia/Kabul",
  "+05:00,TMT,Ashgabat - Toshkent,Asia/Ashgabat",
  "+05:00,YEKT,Ekaterinburg,Asia/Yekaterinburg",
  "+05:00,PKT,Islamabad - Karachi,Asia/Karachi",
  "+05:00,QYZT,Qyzylorda,Asia/Qyzylorda",
  "+05:30,IST,Chennai - Kolkata - Mumbai - New Delhi,Asia/Kolkata",
  "+05:30,SLST,Sri Jayawardenepura,Asia/Colombo",
  "+05:45,NPT,Kathmandu,Asia/Kathmandu",
  "+06:00,ALMT,Nur-Sultan,Asia/Almaty",
  "+06:00,BST,Dhaka,Asia/Dhaka",
  "+06:00,OMST,Omsk,Asia/Omsk",
  "+07:00,KRAT,Barnaul - Gorno-Altaysk,Asia/Krasnoyarsk",
  "+07:00,NOVT,Novosibirsk,Asia/Novosibirsk",
  "+07:00,KRAT,Tomsk,Asia/Omsk",
  "+06:30,MMT,Yangon (Rangoon),Asia/Yangon",
  "+07:00,ICT,Bangkok - Hanoi - Jakarta,Asia/Bangkok",
  "+07:00,HOVT,Hovd,Asia/Hovd",
  "+07:00,KRAT,Krasnoyarsk,Asia/Krasnoyarsk",
  "+08:00,CST,Beijing - Chongqing - Hong Kong - Urumqi,Asia/Shanghai",
  "+08:00,IRKT,Irkutsk,Asia/Irkutsk",
  "+08:00,MYT,Kuala Lumpur - Singapore,Asia/Kuala_Lumpur",
  "+08:00,AWST,Perth,Australia/Perth",
  "+08:00,CST,Taipei,Asia/Taipei",
  "+08:00,ULAT,Ulaanbaatar,Asia/Ulaanbaatar",
  "+09:00,YAKT,Chita,Asia/Chita",
  "+09:00,KST,Pyongyang,Asia/Pyongyang",
  "+08:45,ACWST,Eucla,Australia/Eucla",
  "+09:00,JST,Osaka - Sapporo - Tokyo,Asia/Tokyo",
  "+09:00,KST,Seoul,Asia/Seoul",
  "+09:00,YAKT,Yakutsk,Asia/Yakutsk",
  "+09:30,ACST,Adelaide,Australia/Adelaide",
  "+09:30,ACST,Darwin,Australia/Darwin",
  "+10:00,AEST,Brisbane,Australia/Brisbane",
  "+10:00,AEST,Canberra - Melbourne - Sydney,Australia/Sydney",
  "+10:00,ChST,Guam - Port Moresby,Pacific/Guam",
  "+10:00,AEST,Hobart,Australia/Hobart",
  "+10:00,VLAT,Vladivostok,Asia/Vladivostok",
  "+11:00,BST,Bougainville Island,Pacific/Bougainville",
  "+11:00,MAGT,Magadan,Asia/Magadan",
  "+11:00,SAKT,Sakhalin,Asia/Sakhalin",
  "+10:30,LHST,Lord Howe Island,Australia/Lord_Howe",
  "+11:00,SRET,Chokurdakh,Asia/Magadan",
  "+11:00,NFT,Norfolk Island,Pacific/Norfolk",
  "+11:00,SBT,Solomon Is. - New Caledonia,Pacific/Guadalcanal",
  "+12:00,ANAT,Anadyr - Petropavlovsk-Kamchatsky,Asia/Anadyr",
  "+12:00,NZST,Auckland - Wellington,Pacific/Auckland",
  "+12:00,FJT,Fiji,Pacific/Fiji",
  "+12:00,PETT,Petropavlovsk-Kamchatsky - Old,Asia/Kamchatka",
  "+12:45,CHAST,Chatham Islands,Pacific/Chatham",
  "+13:00,TOT,Nuku'alofa,Pacific/Tongatapu",
  "+14:00,LINT,Kiritimati Islan,Pacific/Kiritimati",
];

const zoneIdList = data.reduce((acc, cur) => {
  const [offset, abbr, name, zoneId] = cur.split(",");
  acc.push(zoneId);
  return acc;
}, []);

// console.log(JSON.stringify(zoneIdList));

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