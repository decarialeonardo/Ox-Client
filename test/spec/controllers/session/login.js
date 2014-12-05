'use strict';

describe('Controller: SessionLoginCtrl', function () {

  // load the controller's module
  beforeEach(module('oxApp'));

  var SessionLoginCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SessionLoginCtrl = $controller('SessionLoginCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
