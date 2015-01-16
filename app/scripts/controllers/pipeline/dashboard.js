'use strict';

/**
 * @ngdoc function
 * @name OxApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the OxApp
 */
angular.module('OxApp')
  .controller('DashboardCtrl', ['$scope','$modal', 'Project', 'Stage', 'NotificationAPI','$location', function ($scope, $modal, Project, Stage, NotificationAPI, $location) {
        $scope.projects = [];

        Project.stopPolling('getProjects');

  		$scope.open = function(){
  			var modalInstance = $modal.open({
		      templateUrl: 'myModalContent.html',
		      controller: ModalInstanceCtrl
		    });
  		}

        $scope.showGrid = function(projectId){
            $location.path('/pipeline/grid/'+projectId);
        }

        var onSuccess = function(response){
            $scope.projects = response.data;
        }

        var onError = function(reason){
          console.log("Error: " + reason);
        }

        var runProject = function(response){
            NotificationAPI.showNotification('El proyecto a comenzado a correr.');
        }

        $scope.delete = function(project){
            var modalInstance = $modal.open({
              templateUrl: 'confirmModal.html',
              controller: ModalConfirmCtrl,
              resolve: {
                    project: function(){
                        return project;
                    }
                }
            });
        }

        $scope.runs = function(projectId){
            Project.runsProject(projectId,runProject,onError);
        }



        /** Modals**/

  		var ModalInstanceCtrl = function ($scope, $modalInstance) {

            $scope.project = {};

            var getIdForLocation = function(location){
                var stringArray = location.split('/');
                // example of url "https://ox-server.herokuapp.com//me/projects/1"
                return stringArray[stringArray.length - 1];
            }

            var createdStage = function(response){
                $location.path('/pipeline/grid/'+$scope.project['id']+'?created');
                $modalInstance.close();
            }

            var createdProject = function(response){
                var data = {
                    "type":"commit-stage",
                    "url": $scope.project.url,
                    "branch": $scope.project.branch
                };

                var projectId = getIdForLocation(response.headers('Location'));
                $scope.project['id'] = projectId;

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

        var ModalConfirmCtrl = function($scope, $modalInstance, project) {
            $scope.project = project;

            var deletedProject = function(response){
                NotificationAPI.showNotification('Se ha eliminado el proyecto con exito.');
            }

            $scope.deleteConfirmed = function(projectId){
                Project.deleteProject(projectId,deletedProject,onError);
            }

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };
        }

		Project.getProjects(onSuccess,onError);

  }]);
