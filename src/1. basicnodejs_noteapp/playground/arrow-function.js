var square = x => x * x; // same as (x) => x*x;
console.log(square(5));

var user = { // this is an obj
  name: 'Andrew',
  sayHi: () => {//arrow funtion inside obj that can be executed
    console.log(arguments);//but does not show result, shows properties
    console.log(`Hi. I'm ${this.name}`);//and 'this' for arrow funtion does not work
  },
  sayHiAlt () {//regular function to use when adding function in objs
    console.log(arguments);//shows arg binding when called through method
    console.log(`Hi. I'm ${this.name}`);//'this; meaning use the name of this obj user
  }
};

//user.sayHi(1, 2, 3);
user.sayHiAlt(1, 2, 3);
