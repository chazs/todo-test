describe("Controller: todoController", function() {
    var scope, rootScope, $controllerConstructor;
    
    beforeEach(module('todo'));
    
    beforeEach(inject(function($controller, $rootScope){
            //rootScope = $rootScope;
            scope = $rootScope.$new();
            $controllerConstructor = $controller;
            
    }));   
    it('ensures scope.test is true', function(){
        var mockTest = true;
        var ctrl = $controllerConstructor('todoController', {
                   $scope: scope});

        expect(scope.test).toBe(mockTest);
    });
    it('ensures scope.todos is title: build a todo app', function(){
        var mockTodos = [{'title': 'Build a todo app', 'done':false}];
        var ctrl = $controllerConstructor('todoController', {
                   $scope: scope});

        expect(scope.todos).toBe(mockTodos);
    });
});