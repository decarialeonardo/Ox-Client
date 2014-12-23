'use strict';

/**
 * @ngdoc function
 * @name OxApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the OxApp
 */
angular.module('OxApp')
  .controller('DashboardCtrl', ['$scope','$modal', 'Project', function ($scope, $modal, Project) {
        $scope.projects = [];

  		$scope.open = function(){
  			var modalInstance = $modal.open({
		      templateUrl: 'myModalContent.html',
		      controller: ModalInstanceCtrl
		    });
  		}

  		var onSuccess = function(response){
            $scope.projects = response.data;
        }

        var onError = function(reason){
          console.log("Error: " + reason);
        }

  		var ModalInstanceCtrl = function ($scope, $modalInstance) {

			$scope.ok = function () {
				$modalInstance.close($scope.selected.item);
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};

		Project.getProjects(onSuccess,onError);

  }]);
