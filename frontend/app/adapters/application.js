import DS from 'ember-data';
import ENV from 'la-croix-site/config/environment';

export default DS.RESTAdapter.extend({
  host: ENV.proxyHost,
  namespace: 'api',
});
