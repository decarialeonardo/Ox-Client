'use strict';

/**
 * @ngdoc function
 * @name OxApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the OxApp
 */
angular.module('OxApp')
  .controller('DashboardCtrl', ['$scope','$modal', 'Project', 'Stage', function ($scope, $modal, Project, Stage) {
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

            $scope.project = {};

            var createdProject = function(response){
                var data = {
                    "type":"commit-stage",
                    "url": $scope.project.url,
                    "branch": $scope.project.branch
                };

                //Stage.setStage(response.id,data,createdProject,onError);
            };

			$scope.createProject = function (project) {
                $scope.project = project; 
                var data = {
                    'name': project.name,
                    'description': project.description
                };
                Project.saveProject(data,createdProject,onError);
				$modalInstance.close($scope.selected.item);
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};

		Project.getProjects(onSuccess,onError);

  }]);
