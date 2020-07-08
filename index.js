const moment = require("moment-timezone");

moment.tz.setDefault("Asia/Kolkota");

if (process.argv.length != 3) {
  console.log("Usage: node <script-file> <timezoe>");
  process.exit(1)
} else {
  const targetTimezone = process.argv[2];
  console.log(
    `The time at the ${targetTimezone} timezone is ${moment()
      .tz(targetTimezone)
      .format()}`
  );
}
