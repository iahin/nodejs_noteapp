//this is for creating dublicate and seperate database for testing so original database not affected
var env = process.env.NODE_ENV || 'development';
console.log('env *****',env);
if (env === 'development') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoApp';
} else if (env === 'test') {
  process.env.PORT = 3000;
  process.env.MONGODB_URI = 'mongodb://localhost:27017/TodoAppTest';
}

//set this in packagejson SET is for windows, export is for linux
// "test": "export NODE_ENV=test || SET \"NODE_ENV=test\" && mocha server/**/*.test.js",
