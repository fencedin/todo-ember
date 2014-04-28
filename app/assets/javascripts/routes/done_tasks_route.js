ToDo.TasksDoneTasksRoute = Ember.Route.extend({
  model: function() {
    return this.store.filter('task', function(task) {
      return task.get('done');
    });
  },
  renderTemplate: function(controller) {
    this.render('done_tasks', {controller: controller});
  }
});
