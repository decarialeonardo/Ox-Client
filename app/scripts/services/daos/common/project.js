'use strict';

/**
 * @ngdoc service
 * @name OxApp.daos/common/project
 * @description
 * # daos/common/project
 * Service in the OxApp.
 */
angular.module('OxApp')
    .service('Project', ['ApiProject', function(ApiProject) {

  	var onError = function(error){
  		console.log("Error:" + error);
  	}

	this.getProjects = function(success, error){
    	var onSuccess = function(res){
  			success(res);
  		}
		ApiProject.getProjects(onSuccess, onError);
	}

    this.saveProject = function(params, success, error){
        var onSuccess = function(res){
            success(res);
        }
        ApiProject.saveProject(params, onSuccess, onError);
    }

    this.deleteProject = function(projectId, success, error){
        var onSuccess = function(res){
            success(res);
        }
        ApiProject.deleteProject(projectId, onSuccess, onError);
    }

    this.runsProject = function(projectId, success, error){
        var onSuccess = function(res){
            success(res);
        }
        ApiProject.runsProject(projectId, onSuccess, onError);
    }

    this.stopPolling = function(name){
        ApiProject.stopPolling(name);
    }
}]);
