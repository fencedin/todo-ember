ToDo.EditTaskController = Ember.ObjectController.extend({
  actions: {
    updateTask: function() {
      var model = this.get('model');
      var controller = this;

      model.save()
      .then(function() {
        controller.transitionToRoute('task', model);
      })
      .catch(function() {
      });
    }
  }
})
