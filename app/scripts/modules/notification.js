/*global angular, Notification */
(function(window, angular, undefined) {'use strict';
   angular.module('notificationModule', [])

    .controller('NotificationController', ['$scope', 'NotificationAPI', function($scope, NotificationAPI) {
        $scope.api = NotificationAPI;
    }])


    .factory('NotificationAPI', function() {
        return {
            status: false,
            message:'',
            showNotification: function(msg) {
                this.status = true;
                this.message = msg;
            },
            clear: function() {
                this.status = false;
            }
        }
    })

    .directive('notification',['$timeout','$animate', function($timeout, $animate){
      return {
         restrict: 'E',
         replace: true,
         controller: 'NotificationController',
         template: 
            '<div class="alert alert-success" role="alert" ng-show="api.status">'+
                '<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                '{{api.message}}'+
            '</div>',
         link: function(scope, element, attrs){
            // watch for changes
            scope.$watch(attrs.ngShow, function ngShowWatchAction(value){
                if ( value ){
                    $timeout(function(){
                        scope.api.status = false;
                        $animate['removeClass'](element, 'ng-hide');
                    }, 4000);
                }
            });
        }
      }
    }]);

})(window, window.angular);