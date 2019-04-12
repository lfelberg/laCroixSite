import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { lte } from '@ember/object/computed';
import { validateEmail } from 'la-croix-site/helpers/validate-email';

export default Controller.extend({
  emailAddress: '',
  message: '',

  isMessageTooShort: lte('message.length', 5),

  invalidEmailAndMessage: computed('emailAddress', 'isMessageTooShort', function() {
    return this.isMessageTooShort || !validateEmail(this.emailAddress);
  }),

  clearAll() {
    this.set('emailAddress', '');
    this.set('message', '');
  },

  actions: {
    sendMessage() {
      this.set('responseMessage', `We got your message and we’ll get in touch soon.`);
      this.clearAll();
    }
  }
});
