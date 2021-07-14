var TodoPage = function() {
  var newTodoInput = element(by.css('.new-todo'));
  var tasksList = element.all(by.css('.todo-list li'));
  var taskNames = element.all(by.css('.view  label'));
  var taskEdit = element.all(by.css('.edit'));
  var taskCompleteButton = element.all(by.css('.toggle'));
  var taskDeleteButton = element.all(by.css('.destroy'));
  var allTasksLink = element(by.css('a[href="#/"]'));
  var activeTasksLink = element(by.css('a[href="#/active"]'));
  var completedTasksLink = element(by.css('a[href="#/completed"]'));
  var clearCompletedButton=element(by.css('.clear-completed'));
 

  //launch application url
  this.launchApp = function(){
  browser.ignoreSynchronization = true;
  browser.get('');
  };

  //add new task
  this.addTask = function(task) {
    
    newTodoInput.sendKeys(task);
    newTodoInput.sendKeys(protractor.Key.RETURN);
  };

  //verify added tasks
  this.verifyAddedTasks = function(expectedList){
    taskNames.getText().then(function(taskName){
    //console.log('******Task Length*******: '+taskName.length);
    expect(taskName.length).toBe(expectedList.length);

    for(var i=0;i<taskName.length;i++){
       //console.log('******Task Name*******: '+taskName[i]);
       expect(taskName[i]).toBe(expectedList[i]);
    }

    });    
    };

  //edit existing first task
  this.editTask = function(updatedTask) {
    browser.actions().doubleClick(taskNames.first()).perform();
    taskEdit.first().sendKeys(updatedTask);
    taskEdit.first().sendKeys(protractor.Key.RETURN);
  };


  //verify edited first task
  this.verifyEditedTask = function(updatedTask) {
    //console.log('******Updated Task Name*******: 'taskNames.first().getText());
    expect(taskNames.first().getText()).toBe(updatedTask);
  };


  //delete existing task
  this.deleteTask = function() {
    taskDeleteButton.first().click();
  };
  
  //mark task complete	
  this.completeTask = function() {
    taskCompleteButton.first().click();
  };

  //verify count after deleting a task
  this.verifyDeletedTask = function(updatedCount) {
    expect(tasksList.count()).toBe(updatedCount);
  };


  //navigate to completed task list
  this.navigateToCompleteTasks = function() {
    completedTasksLink.click();
  };

  //navigate to active tasks list
  this.navigateToActiveTasks = function() {
    activeTasksLink.click();
  };

  //verify count of complete tasks
  this.verifyCompleteTask = function(updatedCount) {
    expect(tasksList.count()).toBe(updatedCount);
  };

  //verify count of active tasks
  this.verifyActiveTask = function(updatedCount) {
    expect(tasksList.count()).toBe(updatedCount);
  };

  //navigate to active tasks list
  this.clearCompleteTask = function() {
    clearCompletedButton.click();
  };
};
module.exports = new TodoPage();