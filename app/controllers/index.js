import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  emailAddress: '',
  headerMessage: 'Coming soon',

  actions: {
    saveInvitation() {
      alert(`Saving the following email: ${this.emailAddress}`);
      this.set('responseMessage', `Thanks! We've just saved your email: ${this.emailAddress}`);
      this.set('emailAddress', '');
    }
  }
});
