import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('laCroixFlavor');
  },

  actions: {
    saveFlavor(newLaCroixFlavor) {
      newLaCroixFlavor.save()
        .then(() => this.transitionTo('la-croix-flavors'))
        .catch((err) => console.log(`Err: ${err}`));
    }
  }
})
