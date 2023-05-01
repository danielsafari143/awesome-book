import { DateTime } from '../node_modules/luxon/src/luxon.js';

function dates() {
  const saha = DateTime.now();
  const format = `${saha.monthLong} ${saha.day} ${saha.year} / ${saha.hour}:${saha.minute}:${saha.second} `;
  document.getElementById('currentDate').innerHTML = format;
}

export default dates;