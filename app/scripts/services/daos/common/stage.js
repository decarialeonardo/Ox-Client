'use strict';

/**
 * @ngdoc service
 * @name OxApp.daos/common/stage
 * @description
 * # daos/common/stage
 * Service in the OxApp.
 */
angular.module('OxApp')
    .service('Stage', ['ApiStage', function(ApiStage) {

  	var onError = function(error){
  		console.log("Error:" + error);
  	}

	this.setStage = function(projectId, params, success, error){
    	var onSuccess = function(res){
  			success(res);
  		}
  		
		ApiStage.setStage(projectId, params, onSuccess, onError);
	}

    this.updateStage = function(projectId, params, success, error){
        var onSuccess = function(res){
            success(res);
        }
        
        ApiStage.updateStage(projectId, params, onSuccess, onError);
    }

    this.getStages = function(projectId, success, error){
        var onSuccess = function(res){
            success(res);
        }
        
        ApiStage.getStages(projectId, onSuccess, onError);
    }

    this.deleteStage = function(projectId, stageId, success, error){
        var onSuccess = function(res){
            success(res);
        }
        ApiStage.deleteStage(projectId, stageId, onSuccess, onError);
    }

    this.runsStage = function(projectId, stageId, success, error){
        var onSuccess = function(res){
            success(res);
        }
        ApiStage.runsStage(projectId, stageId, onSuccess, onError);
    }

    this.stopPolling = function(name){
        ApiStage.stopPolling(name);
    }
}]);
