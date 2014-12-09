'use strict';

describe('Controller: PipelineDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('oxApp'));

  var PipelineDashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PipelineDashboardCtrl = $controller('PipelineDashboardCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
