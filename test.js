"use strict";
const expect    = require("chai").expect,
      inhabited = require("./");

describe("inhabited", () => {
  it(
    "should return false for the north pole",
    () => expect(inhabited(90, 0)).to.be.false
  );

  it(
    "should return false for the south atlantic",
    () => expect(inhabited(90, 0)).to.be.false
  );

  it(
    "should return true for Troy, NY",
    () => expect(inhabited(42.728412, -73.691785)).to.be.true
  );

  it(
    "should return true for Oahu, Hawaii",
    () => expect(inhabited(21.438912, -158.000000)).to.be.true
  );

  it(
    "should return true for a location that a user complained about",
    () => expect(inhabited(64.7161, -110.6174)).to.be.true
  );

  it(
    "should return true for downtown Sydney",
    () => expect(inhabited(-33.8636, 151.2095)).to.be.true
  );
});
