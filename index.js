var cache = require("cache-helpers").once,
    path  = require("path"),
    PBJ   = require("pbj"),
    map   = cache(function(callback) {
      PBJ.readFile(path.join(__dirname, "map.pbjz"), callback);
    });

module.exports = function(lat, lon, callback) {
  return map(function(err, map) {
    if(err)
      return callback(err);

    var w = map.width(),
        h = map.height(),
        x = Math.round((180 + lon) * (w - 1) / 360) % w,
        y = Math.round((90  - lat) * (h - 1) / 180);

    return callback(null, map.bitAt(x, y));
  });
};
