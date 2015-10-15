describe('expense', function() {
	var scope;
	
	beforeEach(angular.mock.module('starter'));
	beforeEach(angular.mock.inject(function($rootScope, $controller) {
		scope = $rootScope.$new();
		$controller('ExampleController', {$scope: scope});
	}));

	it("Chart creation", function () {
		var size = scope.tasks.length;
		scope.createTask({ title: 'Charts' });
		expect(scope.tasks.length).toEqual(size+1);
	});
});