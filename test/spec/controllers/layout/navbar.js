'use strict';

describe('Controller: LayoutNavbarCtrl', function () {

  // load the controller's module
  beforeEach(module('oxApp'));

  var LayoutNavbarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LayoutNavbarCtrl = $controller('LayoutNavbarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
