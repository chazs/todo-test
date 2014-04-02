describe("Controller: todoController", function() {
    var scope, rootScope, $controllerConstructor, newTodo, todos;
    
    beforeEach(module('todo'));
    
    beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            $controllerConstructor = $controller;
            newTodo = scope.newTodo;
            
    }));   
    it('expects addTodo() to bool done value', function(){
        var mockDone = false;
        var ctrl = $controllerConstructor('todoController', {
                   $scope: scope});
        scope.todos = ["throwin in a todo"];

        scope.addTodo();

        expect(scope.todos[1].done).toBe(mockDone);
    });
    it('ensures addTodo() newTodo is empty string', function(){
        var mockNewTodo = "title";
        var ctrl = $controllerConstructor('todoController', {
                   $scope: scope});
        scope.todos = [];
        scope.newTodoTitle = "title"; 
        scope.addTodo();
        expect(scope.todos[0].done).toBe(false);
        expect(scope.todos[0].title).toBe(mockNewTodo); 
    });
    it('ensures addTodo() todosPush function works', function(){
        var ctrl = $controllerConstructor('todoController', {
                   $scope: scope});
        var mockPush = scope.addTodo([{
                    'title': scope.newTodo, 
                    'done':false
        }]);
        expect(scope.addTodo()).toEqual(mockPush);
    });
    it('ensures clearCompleted() function works', (function(){
        var ctrl = $controllerConstructor('todoController', {
                   $scope: scope});
        var mockTodos = scope.todos.filter(function(item){
            return !item.done;
        });    
       
        scope.clearCompleted();

        expect(scope.todos).toEqual(mockTodos);

    }));
});

//   expect(scope.todos[0].done).toBe(false);