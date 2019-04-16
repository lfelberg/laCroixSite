import DS from 'ember-data';

export default DS.Model.extend({
  flavor: DS.attr('string'),
  imageUrl: DS.attr('string'),
  description: DS.attr('text')
});
