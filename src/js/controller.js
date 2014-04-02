var TD = angular.module('todo', []);

TD.controller('todoController', function todoController($scope){
	$scope.todos = [{'title': 'Build a todo app', 'done':false}];
    
	$scope.addTodo = function(){
		$scope.todos.push({'title':$scope.newTodoTitle, 'done':false});
		$scope.newTodoTitle = "";
	};
	$scope.clearCompleted = function(){
		$scope.todos = $scope.todos.filter(function(item){
			return !item.done;
		});
	};
});