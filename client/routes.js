Accounts.onLogin(function () {
  FlowRouter.go('recipe-list');
});

Accounts.onLogout(function () {
  FlowRouter.go('home');
});

FlowRouter.triggers.enter([function(context, redirect) {
  if(!Meteor.userId()) {
    FlowRouter.go('home');
  }
}])

FlowRouter.route('/', {
  name: 'home',
  action() {
    if(Meteor.userId()) {
      FlowRouter.go('recipe-list');
    }
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/recipes', {
  name: 'recipe-list',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'Recipes'
    });
  }
});

FlowRouter.route('/recipe/:id', {
  name: 'recipe-id',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'RecipeSingle'
    });
  }
});

FlowRouter.route('/menu', {
  name: 'menu',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'Menu'
    });
  }
});


FlowRouter.route('/shopping-list', {
  name: 'shopping-list',
  action() {
    BlazeLayout.render('MainLayout', {
      main: 'ShoppingList'
    });
  }
});