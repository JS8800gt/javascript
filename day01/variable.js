/* 저장을 꼭 하고, 경로를 꼭 확인해보자! */

//동적 바인딩 : 컴파일 시 값에 따라 자료형이 동적으로 결정된다.
//ctrl + ~
// var data = 10;
// console.log(data);
// data = "안녕"
// console.log(typeof(data));

//hoistring(호이스팅) : 선언의 위치에 상관없이 존재하면 메모리에 할당된다.
//초기화 작업은 호이스팅 되지않고 선언만 호이스팅 된다.
// ※ var 키워드를 사용하지 않으면 호이스팅되지 않는다.

// console.log(age);
// age = 10;
//오류남

// console.log(age);
// var age = 10;
// console.log(age);

console.log(data);
var data = 10;
var data = 20;
console.log(data);