import { helper } from '@ember/component/helper';

export function validateEmail([ email = '' ]) {
  return email === '' || !/^.+@.+\..+$/.test(email.toLowerCase());
}

export default helper(validateEmail);
