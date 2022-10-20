// var는 함수만 영역으로 취급하기 때문에
// for문에서 선언한 i는 전역변수다.

// for (var i = 0; i < 10; i++) {

// }
// console.log(i);

// for (let i = 0; i < 10; i++) {

// }
// console.log(i);

// let으로 선언하면 두 번 이상 선언되는 문법을 허용하지 않는다.
// let data = 10;
// let data = 20;
// console.log(data);

// 전역변수는 선언의 충돌을 막기 위해 let을 권장하고
// 함수 영역 안에서 변수를 선언할 때에는 var을 권장한다.
// 제어문에서는 상황에 따라 let 또는 var을 선택하여 선언한다.
