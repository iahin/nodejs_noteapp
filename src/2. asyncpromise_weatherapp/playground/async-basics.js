console.log('Starting app');

setTimeout(() => {//async basic with delay
  console.log('Inside of callback');
}, 2000);

setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing up');
