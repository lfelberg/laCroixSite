import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  headerMessage: 'Coming soon',

  actions: {
    saveInvitation() {
      const { emailAddress } = this;
      const newInvitation = this.store.createRecord('invitation', { email: emailAddress });

      newInvitation.save();
      alert(`Saving the following email: ${this.emailAddress}`);
      this.set('responseMessage', `Thanks! We've just saved your email: ${this.emailAddress}`);
      this.set('emailAddress', '');
    }
  }
});
