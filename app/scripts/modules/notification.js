/*global angular, Notification */
(function(window, angular, undefined) {'use strict';
   angular.module('notificationModule', [])

    .controller('Controller', ['$scope', function($scope) {
        $scope.notification = {
            show: false
        };
    }])

    .directive('notification',['$timeout', function($timeout){
      return {
         restrict: 'E',
         replace: true,
         transclude: true,
         template: 
            '<div class="alert alert-success" role="alert">'+
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                '<div ng-transclude></div>'+
            '</div>',
         link: function(scope, element, attrs){
            // watch for changes
            attrs.$observe('ngShow', function (value) {
                if ( value ){
                    $timeout(function(){
                        scope.notification.show = false;
                        //element.remove();
                    }, 5000);
                }
            });
        }
      }
    }]);

})(window, window.angular);