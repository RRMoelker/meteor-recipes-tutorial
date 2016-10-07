Template.Recipes.onCreated(function () {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.Recipes.helpers({
  recipes: () => {
    return Recipes.find({});
  }
});