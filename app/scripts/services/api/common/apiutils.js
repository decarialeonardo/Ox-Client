'use strict';

/**
 * @ngdoc service
 * @name OxApp.api/common/apiutils
 * @description
 * # api/common/apiutils
 * Service in the OxApp.
 */
angular.module('OxApp')
  .service('ApiUtils', ['$http',function ($http) {

  	var serverURL = '';
  	var serverURLJava = '';
  	var serverURLNode = 'http://localhost:5000/';
  	
    this.getServerURL = function(){
	  	//return serverURL;
	  	return serverURLBuild;
      	//return serverURLJava;
	};

	this.buildQueryParam = function(params) {
	var item, queryParam;
	if (params && params instanceof Object) {
    	queryParam = '?';
    	for (item in params) {
    		queryParam+= '&'+item+'='+params[item];	
    	}
    	if (queryParam == '?') {
    		return '';
    	}
    	else {
    		queryParam = queryParam.replace('?&', '?');
    	}
	}
	else {
		throw 'ApiUtils.buildQueryParam: expected params as Json'
	}
    	return queryParam;
    };

    this.get = function(resourceURL, success, error){
    	$http.get(resourceURL)
  			.then(function(response){
  				console.log('');
  				success(response);
  			},function(reason){
  				console.log('');
  				error(reason);
  			});
    };

    this.post = function(resourceURL, data, success, error){
    	$http.post(resourceURL, data)
  			.then(function(response){
  				console.log('');
  				success(response);
  			},function(reason){
  				console.log('');
  				error(reason);
  			});
    };

    this.put = function(){};

    this.delete = function(){};
    
  }]);
