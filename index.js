"use strict";
const path = require("path"),
      PBJ  = require("pbj");

const MAP = PBJ.readFileSync(path.join(__dirname, "var/map.pbjz"));
MAP.set(98, 35);

function inhabited(lat, lon) {
  lat = +lat;
  lon = +lon;
  if(!(lat >= -90.0 && lat <= +90.0 && lon >= -180.0 && lon <= +180.0)) {
    return false;
  }

  return MAP.get(
    Math.floor((180 + lon) * MAP.width  / 360.00000000000006),
    Math.floor(( 90 - lat) * MAP.height / 180.00000000000003)
  );
}

module.exports = inhabited;
