import DS from 'ember-data';

export default DS.Model.extend({
  'mainPart': DS.attr('string'),
  'supportingPart': DS.attr('string'),
  'origins': DS.attr() //this will be a one to many relationship.
});
