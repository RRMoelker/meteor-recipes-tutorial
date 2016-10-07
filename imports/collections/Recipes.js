Recipes = new Mongo.Collection('recipes');

Recipes.allow({
  insert: function(userId, doc) {
    return !!userId;
  },
  update: function(userId, doc) {
    return !!userId;
  }
})

IngredientScheme = new SimpleSchema({
  name: {
    type: String,
    label: "name"
  },
  amount: {
    type: String
  }
})

RecipeSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  ingredients: {
    type: [IngredientScheme]
  },
  inMenu: {
    type: Boolean,
    defaultValue: false,
    optional: true,
    autoform: {
      afFieldInput: { type: "hidden" },
      afFormGroup: { label: false }
    }
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId;
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

Meteor.methods({
  toggleMenuItem: function (id, currentState) {
    Recipes.update(id, {
      $set: {
        inMenu: !currentState
      }
    })
  }
})

Recipes.attachSchema(RecipeSchema);
