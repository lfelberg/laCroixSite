import Controller from '@ember/controller';

export default Controller.extend({
  emailAddress: '',
  message: '',

  clearAll() {
    this.set('emailAddress', '');
    this.set('message', '');
  },

  actions: {
    sendMessage() {
      this.set('responseMessage', `Thanks! We've just saved your email: ${this.emailAddress}`);
      this.clearAll();
    }
  }
});
