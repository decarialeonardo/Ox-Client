'use strict';

/**
 * @ngdoc service
 * @name OxApp.api/common/apiproject
 * @description
 * # api/common/apiproject
 * Service in the OxApp.
 */
angular.module('OxApp')
  .service('ApiProject', [ '$http', '$location','ApiUtils', function ($http, $location, ApiUtils) {
    var serverURL = ApiUtils.getServerURL();

    this.getProjects = function(success, error){
    	$http.get(serverURL+'/projects')
  			.then(function(response){
  				console.log('');
  				success(response);
  			},function(reason){
  				console.log('');
  				error(reason);
  		});
    };

    this.saveProject = function(params, success, error){
        $http.post(serverURL+'/projects', params)
            .then(function(response){
                console.log('');
                success(response);
            },function(reason){
                console.log('');
                error(reason);
        });
    };

  }]);
