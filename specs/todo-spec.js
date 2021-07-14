var todoPage = require('../pages/TodoPage.js');
var taskList=['Task1','Task2','Task3'];
var count=taskList.length;
var updatedTaskValue = ' Updated';


describe('Test todo functionality', function() {
  
  //launch application	
  beforeAll(function(){
    todoPage.launchApp();
  });
  

  it('Add tasks and verify newly added tasks', function() {
    for(var i=0;i<count;i++){
	todoPage.addTask(taskList[i]);
	}
        todoPage.verifyAddedTasks(taskList);
  });


  it('Edit and verify first task from todo list', function() {
	todoPage.editTask(updatedTaskValue);
	todoPage.verifyEditedTask(taskList[0]+updatedTaskValue);
  });


  it('Delete and verify first task is removed from todo list', function() {
	todoPage.deleteTask();
	todoPage.verifyDeletedTask(count-1);
  });


  it('Complete and verify first task is marked complete', function() {
	todoPage.completeTask();
	todoPage.navigateToCompleteTasks();
	todoPage.verifyCompleteTask(1);
  });

  it('Verify active task list is updated', function() {
	todoPage.navigateToActiveTasks();
	todoPage.verifyActiveTask(count-2);
  });


  it('Verify completed tasks are cleared', function() {
	todoPage.clearCompleteTask();
	todoPage.navigateToCompleteTasks();
	todoPage.verifyCompleteTask(0);
  });

});
