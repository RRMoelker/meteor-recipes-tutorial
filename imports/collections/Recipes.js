import {check} from 'meteor/check';

Recipes = new Mongo.Collection('recipes');

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  author: {
    type: String,
    label: "Author"
  },
  createdAt: {
    type: Date,
    label: "Created At"
  }
});

Meteor.methods({
  'recipe.insert': function(doc) {
    check(doc, RecipeFormSchema);

    Recipes.insert({
      name: doc.name,
      description: doc.description,
      author: this.userId,
      createdAt: new Date()
    });
  }
});

Recipes.attachSchema(RecipeSchema);

if(Meteor.isClient) {
  RecipeFormSchema = RecipeSchema.pick('name', 'description');
  Template.registerHelper("RecipeFormSchema", RecipeFormSchema);  
}
