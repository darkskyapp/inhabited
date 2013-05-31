inhabited
=========

`inhabited` is a tiny library for Node.JS to determine whether a location may
be inhabited or not. It is used in [http://forecast.io/](Forecast) to quickly
short-circuit geocoding queries (which are expensive) for locations far from
human habitation. (In such cases, Forecast labels those locations "Middle of
Nowhere." Go ahead and try it: open up Forecast via the link above, and then
click and drag the location marker on the globe into the middle of the ocean.)

Usage
-----

The `inhabited` module is a single function, which takes a latitude, longitude,
and callback function as arguments. That callback function will be called with
two arguments: an optional error and a boolean. That boolean will be "true" if
the location specified may be inhabited, and will be "false" if the location is
definitely not inhabited.

    var inhabited = require("inhabited");

    // <40.7144, -74.0060> happens to be in New York City.
    inhabited(40.7144, -74.0060, function(err, inhabited) {
      if(err) throw err;
      console.log(inhabited); // prints "true"
    });

    // <-29.5065, -136.5820> happens to be in the middle of the South Pacific.
    inhabited(-29.5065, -136.5820, function(err, inhabited) {
      if(err) throw err;
      console.log(inhabited); // prints "false"
    });

The first call to the library will load a backing bitmap, which will be kept in
memory for all subsequent calls.

License
-------

This software is released into the public domain with love.
