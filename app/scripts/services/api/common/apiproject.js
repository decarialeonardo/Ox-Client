'use strict';

/**
 * @ngdoc service
 * @name OxApp.api/common/apiproject
 * @description
 * # api/common/apiproject
 * Service in the OxApp.
 */
angular.module('OxApp')
  .service('ApiProject', [ '$http', 'ApiUtils', function ($http, ApiUtils) {
    var serverURL = ApiUtils.getServerURL();

    this.getProjects = function(success, error){
        ApiUtils.startPolling('getProjects',serverURL+'/projects', success);

    	/*$http.get(serverURL+'/projects')
  			.then(function(response){
  				success(response);
  			},function(reason){
  				error(reason);
  		});*/
    };

    this.saveProject = function(params, success, error){
        $http.post(serverURL+'/projects', params)
            .then(function(response){
                success(response);
            },function(reason){
                error(reason);
        });
    };

    this.deleteProject = function(projectId, success, error){
        var resource = '/projects/'+projectId;

        $http.delete(serverURL+ resource)
            .then(function(response){
                success(response);
            },function(reason){
                error(reason);
        });
    };

    this.runsProject = function(projectId, success, error){
        var resource = '/projects/'+projectId+'/runs';

        $http.post(serverURL+resource)
            .then(function(response){
                success(response);
            },function(reason){
                error(reason);
        });
    };

    this.stopPolling = function(name){
        ApiUtils.stopPolling(name);
    }

  }]);
