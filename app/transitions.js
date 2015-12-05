export default function(){  
  this.transition(
    this.fromRoute('application'),
    this.toRoute('home'),
    this.use('fade'),
    this.reverse('fade')
  );
  this.transition(
    this.fromRoute('home'),
    this.toRoute('jokes'),
    this.use('scale'),
    this.reverse('scale')
  );
}