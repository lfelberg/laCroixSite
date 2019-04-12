import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  emailAddress: '',
  headerMessage: 'Coming soon',

  actions: {
    saveInvitation() {
      const email = this.emailAddress;
      const newInvitation = this.store.createRecord('invitation', { email });

      newInvitation.save()
        .then(() => {
          alert(`Saving the following email: ${this.emailAddress}`);
          this.set('responseMessage', `Thanks! We've just saved your email: ${this.emailAddress}`);
          this.set('emailAddress', '');
        })
        .catch(err => {
          console.log(`Error: ${err}`)
        });
    }
  }
});
