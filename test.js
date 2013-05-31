var expect = require("chai").expect;

describe("inhabited", function() {
  var inhabited = require("./");

  it("should return false for the north pole", function(done) {
    inhabited(90, 0, function(err, inhabited) {
      expect(err).to.equal(null);
      expect(inhabited).to.equal(false);
      done();
    });
  });

  it("should return false for the south atlantic", function(done) {
    inhabited(0, 0, function(err, inhabited) {
      expect(err).to.equal(null);
      expect(inhabited).to.equal(false);
      done();
    });
  });

  it("should return true for Troy, NY", function(done) {
    inhabited(42.728412, -73.691785, function(err, inhabited) {
      expect(err).to.equal(null);
      expect(inhabited).to.equal(true);
      done();
    });
  });

  it("should return true for Oahu, Hawaii", function(done) {
    inhabited(21.438912, -158.000000, function(err, inhabited) {
      expect(err).to.equal(null);
      expect(inhabited).to.equal(true);
      done();
    });
  });
});
