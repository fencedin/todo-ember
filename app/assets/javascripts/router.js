ToDo.Router.map(function() {
  this.resource('tasks', { path: '/' });
  this.resource('new_task', { path: '/tasks/new'});
  this.resource('task', { path: '/tasks/:id'});
  this.resource('edit_task', { path: '/tasks/:id/edit'});
});
