'use strict';

describe('Service: api/common/apiutils', function () {

  // load the service's module
  beforeEach(module('oxAppApp'));

  // instantiate service
  var api/common/apiutils;
  beforeEach(inject(function (_api/common/apiutils_) {
    api/common/apiutils = _api/common/apiutils_;
  }));

  it('should do something', function () {
    expect(!!api/common/apiutils).toBe(true);
  });

});
