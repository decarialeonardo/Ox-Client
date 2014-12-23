'use strict';

describe('Service: api/common/apiproject', function () {

  // load the service's module
  beforeEach(module('oxApp'));

  // instantiate service
  var api/common/apiproject;
  beforeEach(inject(function (_api/common/apiproject_) {
    api/common/apiproject = _api/common/apiproject_;
  }));

  it('should do something', function () {
    expect(!!api/common/apiproject).toBe(true);
  });

});
