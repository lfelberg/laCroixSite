import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('number'),
  username: DS.attr('string'),
  laCroixFlavorId: DS.attr('number'),
  notes: DS.attr('string')
});
