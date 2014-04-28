ToDo.TaskController = Ember.ObjectController.extend({
  actions: {
    deleteTask: function() {
      if (confirm('Are you sure?')) {
        this.get('model').destroyRecord();
      }
    }
  },
  done: function(key, value) {
    var model = this.get('model');
    console.debug(value);
    if (value === undefined) {
      return model.get('done');
    } else {
      model.set('done', value);
      model.save();
      return value;
    }
  }.property('model.done')
});
