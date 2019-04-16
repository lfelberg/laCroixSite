import DS from 'ember-data';

export default DS.Model.extend({
  flavor: DS.attr('string'),
  image_url: DS.attr('string'),
  description: DS.attr('string')
});
