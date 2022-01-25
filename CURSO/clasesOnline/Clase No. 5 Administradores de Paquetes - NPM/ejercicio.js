const moment = require("moment");

let a = moment();
let b = moment([1979 - 12 - 27]);

console.log(a.diff(b, "years"));

console.log(a.diff(b, "days"));
