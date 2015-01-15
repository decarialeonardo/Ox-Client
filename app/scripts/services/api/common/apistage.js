'use strict';

/**
 * @ngdoc service
 * @name OxApp.api/common/apistage
 * @description
 * # api/common/apistage
 * Service in the OxApp.
 */
angular.module('OxApp')
  .service('ApiStage', ['$http', 'ApiUtils', function ($http, ApiUtils) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var serverURL = ApiUtils.getServerURL();

    this.setStage = function(projectId, params, success, error){
        var resource = '/projects/'+projectId+'/stages';

    	$http.post(serverURL+resource, params)
  			.then(function(response){
  				success(response);
  			},function(reason){
  				error(reason);
  		});
    };

    this.getStages = function(projectId, success, error){
        var resource = '/projects/'+projectId+'/stages';
        
        ApiUtils.startPolling('getStages',serverURL+resource, success);
    };

    this.deleteStage = function(projectId, stageId, success, error){
        var resource = '/projects/'+projectId+'/stages/'+stageId;

        $http.delete(serverURL+ resource)
            .then(function(response){
                success(response);
            },function(reason){
                error(reason);
        });
    };

    this.runsStage = function(projectId, stageId, success, error){
        var resource = '/projects/'+projectId+'/stages/'+stageId+'/runs';

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
