import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return this.store.createRecord('laCroix');
  },

  actions: {
    saveFlavor(newLaCroix) {
      newLaCroix.save()
        .then(() => this.transitionTo('la-croixs'))
        .catch((err) => console.log(`Err: ${err}`));
    }
  }
})
