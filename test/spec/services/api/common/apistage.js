'use strict';

describe('Service: api/common/apistage', function () {

  // load the service's module
  beforeEach(module('oxApp'));

  // instantiate service
  var api/common/apistage;
  beforeEach(inject(function (_api/common/apistage_) {
    api/common/apistage = _api/common/apistage_;
  }));

  it('should do something', function () {
    expect(!!api/common/apistage).toBe(true);
  });

});
