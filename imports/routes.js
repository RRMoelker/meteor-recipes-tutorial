
FlowRouter.route('/', {
  name: 'home',
  action() {
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