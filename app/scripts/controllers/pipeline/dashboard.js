'use strict';

/**
 * @ngdoc function
 * @name OxApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the OxApp
 */
angular.module('OxApp')
  .controller('DashboardCtrl', ['$scope','$modal', 'Project', 'Stage', 'NotificationAPI', function ($scope, $modal, Project, Stage, NotificationAPI) {
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

            var getIdForLocation = function(location){
                var stringArray = location.split('/');
                // example of url "https://ox-server.herokuapp.com//me/projects/1"
                return stringArray[stringArray.length - 1];
            }

            var createdStage = function(response){
                NotificationAPI.showNotification('Se ha creado el proyecto con exito.');
                $modalInstance.close();
            }

            var createdProject = function(response){
                var data = {
                    "type":"commit-stage",
                    "url": $scope.project.url,
                    "branch": $scope.project.branch
                };

                var projectId = getIdForLocation(response.headers('Location'));
                Stage.setStage(projectId,data,createdStage,onError);
            };

			$scope.createProject = function (project) {
                $scope.project = project; 
                var data = {
                    'name': project.name,
                    'description': project.description
                };
                Project.saveProject(data,createdProject,onError);
				$modalInstance.close();
			};

			$scope.cancel = function () {
				$modalInstance.dismiss('cancel');
			};
		};

		Project.getProjects(onSuccess,onError);

  }]);
