class Errors {
  constructor() {
    this.errors ={};
  }
   get(field) {
     if(this.errors[field]){
       console.log(this.errors[field]);
    return   this.errors[field][0];
     }

   }

record(errors) {
  this.errors = errors;
}
has(field) {
  return this.errors.hasOwnProperty(field);
}
clear(field) {
  delete this.errors[field];
}
}
export default Errors;
