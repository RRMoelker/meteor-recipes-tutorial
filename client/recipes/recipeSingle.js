Template.RecipeSingle.onCreated(function () {
  this.autorun(() => {
    let id = FlowRouter.getParam('id');
    this.subscribe('singleRecipe', id);
  })
});

Template.RecipeSingle.helpers({
  recipe: () => {
    let id = FlowRouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});