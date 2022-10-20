var hong = {name: '홍길동', age: 10, level: 1};
var lee = {name: '이순신', age: 20, level: 2};
var jang = {name: '장보고', age: 8, level: 3};
var train = new Array(hong, lee, jang);

console.log(JSON.stringify(train));