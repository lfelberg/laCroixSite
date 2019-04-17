import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return Ember.RSVP.hash({
      flavors: this.store.findAll('laCroixFlavor'),
      tastings: this.store.createRecord('laCroix'),
    });
  },

  actions: {
    saveNote(newLaCroix) {
      newLaCroix.save()
        .then(() => this.transitionTo('la-croixs'))
        .catch((err) => console.log(`Err: ${err}`));
    }
  }
});
