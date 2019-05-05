angular.module('todoApp',[])
.controller('TodoListController',function(){
var todoList=this;
todoList.todos=[];
todoList.addTodo=function(){
    todoList.todos.push({text:todoList.todoText});
    todoList.todoText='';
};
todoList.delTodo=function () {
  todoList.todos.splice(todoList.index,1);  
};
});