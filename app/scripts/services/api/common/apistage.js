'use strict';

/**
 * @ngdoc service
 * @name OxApp.api/common/apistage
 * @description
 * # api/common/apistage
 * Service in the OxApp.
 */
angular.module('OxApp')
  .service('ApiStage', [ '$http', '$location','ApiUtils', function ($http, $location, ApiUtils) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    var serverURL = ApiUtils.getServerURL();

    this.setStage = function(projectId, params, success, error){
    	$http.post(serverURL+'/projects/'+projectId+'/stages', params)
  			.then(function(response){
  				console.log('');
  				success(response);
  			},function(reason){
  				console.log('');
  				error(reason);
  		});
    };

    this.getStages = function(projectId, success, error){
        $http.get(serverURL+'/projects/'+projectId+'/stages')
            .then(function(response){
                console.log('');
                success(response);
            },function(reason){
                console.log('');
                error(reason);
        });
    };

 }]);
