Template.Menu.onCreated(function () {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.Menu.helpers({
  recipes: () => {
    return Recipes.find({inMenu: true});
  }
});