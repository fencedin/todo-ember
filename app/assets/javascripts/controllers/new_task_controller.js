ToDo.NewTaskController = Ember.ObjectController.extend({
  actions: {
    createTask: function() {
      var model = this.get('model');
      var controller = this;

      model.save()
      .then(function() {
        controller.transitionToRoute('task', model);
      })
      .catch(function() {
        alert("Please fix")
      });
    }
  }
});
