import DS from 'ember-data';

export default DS.Model.extend({
  userId: DS.attr('int'),
  laCroixFlavorId: DS.attr('int'),
  notes: DS.attr('text')
});
