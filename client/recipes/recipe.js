Template.Recipe.events({
  'click .toggle-menu': function () {
    Meteor.call('toggleMenuItem', this._id, this.inMenu);
  }
})

Template.Recipe.events({
  'click .fa-trash': function() {
    Meteor.call('deleteRecipe', this._id);
  }
})