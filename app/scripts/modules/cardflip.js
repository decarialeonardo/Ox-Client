
/**
* AngularJS version of a cardflip.
*
*/
(function(window, angular, undefined) {'use strict';
   angular.module('cardflipModule', [])

	.directive('cardflip', [function() {
		return {
			restrict: 'AE',
			replace: true,
			transclude: true,
			scope: {
            	flipped: '=?'
        	},
		  	template:
		  		'<div class="flip">'
		  			+'<div class="card" ng-transclude></div>' +
				'</div>',
			controller: ['$scope', '$element', function($scope, $element) {
	            this.toggle = function() {
	                var flipped = !$element.hasClass('flipped');
	                $scope.$apply(function() {
	                    $scope.flipped = flipped;
	                })
	            };

	            this.cardFront = function() {
	                $scope.flipped = false;
	            };

	            this.cardBack = function() {
	                $scope.flipped = true;
	            }
        	}],
        	link: function(scope, elm, attrs) {
	            scope.$watch('flipped', function(newValue, oldValue) {
	                if (newValue) {
	                    elm.addClass('flipped');
	                } else {
	                    elm.removeClass('flipped');
	                }
	            });
        	}
  		};
	}])

	.directive('cardFront', [function() {
	    return {
	        require: '^cardflip',
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template:
	            '<div class="face front" ng-transclude></div>'
	    }
	}])

	.directive('cardBack', [function() {
	    return {
	        require: '^cardflip',
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template:
	            '<div class="face back" ng-transclude></div>'
	    }
	}])

	.directive('cardToggle', [function() {
	    return {
	        require: '^cardflip',
	        restrict: 'A',
	        link: function(scope, elm, attrs, controller) {
	            var previousValue;

	            attrs.$observe('cardToggle', function(value) {
	                if (!value) {
	                    value = 'click'
	                }

	                if (previousValue) elm.off(previousValue, controller.toggle);

	                previousValue = value;

	                elm.on(value, controller.toggle);
	            });
	        }
	    }
	}])

	.directive('cardHeader', [function() {
	    return {
	        require: ['^cardBack','^cardFront'],
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template:
	            '<div class="card-header" ng-transclude></div>'
	    }
	}])

	.directive('cardBody', [function() {
	    return {
	        require: ['^cardBack','^cardFront'],
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template:
	            '<div class="card-body" ng-transclude></div>'
	    }
	}])

	.directive('cardFooter', [function() {
	    return {
	        require: ['^cardBack','^cardFront'],
	        restrict: 'E',
	        replace: true,
	        transclude: true,
	        template:
	            '<div class="card-footer" ng-transclude></div>'
	    }
	}])

})(window, window.angular);