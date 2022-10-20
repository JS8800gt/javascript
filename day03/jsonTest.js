// 프로퍼티에 ""(tow quotation)이 있으면 JSON이고,
// 프로퍼티에 어떠한 따옴표도 없으면 JS Object이다.
// JSON.stringify() : JS Object를 JSON 형식으로 변환
// JSON.parse() : JSON을 JS Object로 변환

var user = { name: '한동석', age: 20 };
var userJSON = JSON.stringify(user);

console.log(userJSON);

console.log(JSON.parse(userJSON).age);