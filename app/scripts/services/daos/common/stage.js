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

    this.getStages = function(projectId, success, error){
        var onSuccess = function(res){
            success(res);
        }
        
        ApiStage.getStages(projectId, onSuccess, onError);
    }
}]);
