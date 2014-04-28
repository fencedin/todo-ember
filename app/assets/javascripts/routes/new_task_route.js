ToDo.NewTaskRoute = Ember.Route.extend({

  model: function() {
    return this.store.createRecord('task');
  },

  deactivate: function() {
    var model = this.get('controller.model');
    model.rollback();
    if (model.get('isNew')) {
      model.deleteRecord();
    }
  },

  actions: {
    willTransition: function(transition) {
      var model = this.get('controller.model');
      if (model.get('isDirty') && !confirm('You have unsaved changes. They will be lost if you continue!')) {
        transition.abort();
      }
    }
  }
});
