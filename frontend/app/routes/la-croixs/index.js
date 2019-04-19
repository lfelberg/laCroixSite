import { hash } from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return hash({
      flavors: this.store.findAll('laCroixFlavor'),
      tastings: this.store.findAll('laCroix'),
    });
  }
});
