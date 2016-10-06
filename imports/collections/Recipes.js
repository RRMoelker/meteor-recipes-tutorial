Recipes = new Meteor.Collection('recipes');

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
    label: "Author",
    autoValue: function() {
      this.userId;
    },
    autoform: {
      afFieldInput: { type: "hidden" },
      afFormGroup: { label: false }
    }
  },
  createdAt: {
    type: Date,
    label: "Created At",
    autoValue: function() {
      return new Date();
    },
    autoform: {
      afFieldInput: { type: "hidden" },
      afFormGroup: { label: false }
    }
  }
})

Recipes.attachSchema(RecipeSchema);