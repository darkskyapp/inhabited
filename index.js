"use strict";
const path = require("path"),
      PBJ  = require("pbj"),
      MAP  = PBJ.readFileSync(path.join(__dirname, "var/map.pbjz"));

function inhabited(lat, lon) {
  return MAP.bitAt(
    Math.round((180 + lon) * (MAP.width  - 1) / 360) % MAP.width,
    Math.round((90  - lat) * (MAP.height - 1) / 180)
  );
}

module.exports = inhabited;
