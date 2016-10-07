Template.ShoppingList.onCreated(function () {
  this.autorun(() => {
    this.subscribe('recipes');
  })
});

Template.ShoppingList.helpers({
  shoppingList: () => {
    return Recipes.find({inMenu: true});
  }
});