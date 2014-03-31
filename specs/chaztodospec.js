/*describe("test", function() {
  it("should do this or that", function() {
    expect(true).toBe(true);
  });
});*/

describe("todoController", function() {
	var $rootScope,
		$scope,
		controller;

	beforeEach(function(){
		module('ToDo');
	
	
		inject(function($injector){
			$rootScope = $injector.get('$rootScope');
			$scope = $rootScope.$new();
			controller = $injector.get('$controller')("todoController", {$scope: $scope});
		});

	});

	beforeEach(inject(function($controller, $rootScope) {
		$controller('todoController', {
			$scope: $rootScope.$new()
			//$location: $location
		});
	}));
});

