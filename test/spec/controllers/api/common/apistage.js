'use strict';

describe('Controller: ApiCommonApistageCtrl', function () {

  // load the controller's module
  beforeEach(module('oxApp'));

  var ApiCommonApistageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ApiCommonApistageCtrl = $controller('ApiCommonApistageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
