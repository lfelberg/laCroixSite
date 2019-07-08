import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      flavors: this.store.findAll('laCroixFlavor'),
      tastings: this.store.createRecord('laCroix'),
    });
  },

  actions: {
    saveNote(newLaCroix) {
      newLaCroix.set('laCroixFlavorId', Number(this.controller.chosenFlavor.id));
      newLaCroix.save()
        .then(() => this.transitionTo('la-croixs'))
        .catch((err) => console.log(`Err: ${err}`));
    }
  }
});
