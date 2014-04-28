ToDo.TaskController = Ember.ObjectController.extend({
  actions: {
    deleteTask: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  }
});
