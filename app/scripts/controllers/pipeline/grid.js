'use strict';

/**
 * @ngdoc function
 * @name OxApp.controller:PipelineGridCtrl
 * @description
 * # PipelineGridCtrl
 * Controller of the OxApp
 */
angular.module('OxApp')
  .controller('GridCtrl', ['$scope','$routeParams','NotificationAPI','$location','$modal', 'Stage', function ($scope, $routeParams, NotificationAPI, $location, $modal, Stage) {

        $scope.jobs = [];
        $scope.stages = {};
        $scope.rowPosition = 0;
        $scope.maxCol = 0;

        var MAX_COLUMNS = 12;

        $scope.createModal = function(){
            var modalInstance = $modal.open({
                templateUrl: 'createStageModal.html',
                controller: ModalInstanceCtrl,
                resolve: {
                    stages: function(){
                        return $scope.stages;
                    }
                }
            });
        }

        $scope.getRows = function(size){
            return new Array(size);
        }

        $scope.getCols = function(size){
            return new Array(size);
        }

        $scope.isEmpty = function (obj) {
           return angular.equals({},obj); 
        }

        $scope.getJobInGrid = function(row, col){
            for (var i = 0; i < $scope.jobs.length; i++) {
                if ($scope.jobs[i].rowPosition == row && $scope.jobs[i].colPosition == col){
                    return $scope.jobs[i];
                }
            }
            return null;
        }

        var getMaxColPosition = function(array){
            var max = 0;
            for (var i = 0; i < array.length; i++) {
                var col = array[i].colPosition
                if ( col > max ){
                    max = col;
                }
            }

            return col;
        }

        var searchStage = function(jobs, idSon){
            for (var i = 0; i < jobs.length; i++) {
                if (jobs[i].id == idSon){
                    return jobs[i];
                }
            }
            return null;
        }

        var buildStage = function(jobs, job, colPosition){
            var idSons = job.next;
            if ( idSons != null ){
                var data = job;
                data['rowPosition'] = $scope.rowPosition;
                data['colPosition'] = colPosition;
                $scope.jobs.push(data);

                colPosition++;
                for (var i = 0; i < idSons.length; i++) {
                    var stageSon = searchStage(jobs, idSons[i]);
                    if ( i!= 0){
                        $scope.rowPosition++;
                    }
                    buildStage(jobs,stageSon, colPosition);
                }
            }
        }

        var renderStages = function(response){
            $scope.stages = response.data;
            buildStage(response.data, response.data[0],0);
            $scope.maxCol = getMaxColPosition($scope.jobs);
            $scope.colDivision = Math.floor(MAX_COLUMNS / ($scope.maxCol+1));
        }

        var onError = function(reason){
          console.log("Error: " + reason);
        }

        var deletedStage = function(response){
            NotificationAPI.showNotification('Se ha eliminado el stage con exito.');
        }

        var runStage = function(response){
            NotificationAPI.showNotification('El stage a comenzado a correr.');
        }

        $scope.delete = function(stageId){
            //Stage.deleteStage($routeParams.projectId,stageId,deletedStage,onError);
        }

        $scope.runs = function(stageId){
            //Stage.runsStage($routeParams.projectId,stageId,runStage,onError);
        }

        Stage.getStages($routeParams.projectId,renderStages,onError);

        var ModalInstanceCtrl = function ($scope, $modalInstance, stages) {
  			$scope.stages = stages;

            var addedStage = function(response){
                NotificationAPI.showNotification('Se ha creado el stage con exito.');
            }

            $scope.addStage = function (data) {
                Stage.setStage($routeParams.projectId,data,addedStage,onError);
            }

            $scope.close = function () {
				$modalInstance.dismiss('cancel');
			}

            var setStages = function(stages){
                $scope.stages = stages;
            }
        }
  }]);
