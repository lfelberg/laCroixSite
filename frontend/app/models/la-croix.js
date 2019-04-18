import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('integer'),
  laCroixFlavorId: DS.attr('integer'),
  notes: DS.attr('text')
});
